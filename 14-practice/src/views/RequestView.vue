<template>
	<AppLoader v-if="loading" />
	<AppPage title="Заявка" back v-else-if="request">
		<p><strong>Имя владельца</strong>: {{ request.fio }}</p>
		<p><strong>Телефон</strong>: {{ request.phone }}</p>
		<p><strong>Сумма</strong>: {{ currency(request.amount) }}</p>
		<p><strong>Статус</strong>: <AppStatus :type="request.status" /></p>
		<div class="form-control">
			<label for="status">Статус</label>
			<select id="status" v-model="status">
				<option value="done">Завершен</option>
				<option value="cancelled">Отменен</option>
				<option value="active">Активен</option>
				<option value="pending">Выполняется</option>
			</select>
		</div>

		<button class="btn danger" @click="deleteRequest">Удалить</button>
		<button class="btn" @click="updateRequest" v-if="hasChanges">
			Обновить
		</button>
	</AppPage>
	<h3 v-else class="text-center text-white">Такой заявки не существует</h3>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'
import AppPage from '../components/ui/AppPage.vue'
import AppLoader from '../components/ui/AppLoader.vue'
import AppStatus from '../components/ui/AppStatus.vue'
import {currency} from '../utils/currency'
import {computed} from '@vue/reactivity'

export default {
	setup() {
		const route = useRoute()
		const router = useRouter()
		const loading = ref(true)
		const store = useStore()
		const request = ref()
		const status = ref()
		const hasChanges = computed(() => request.value.status !== status.value)
		onMounted(async () => {
			request.value = await store.dispatch('request/loadById', route.params.id)
			status.value = request.value?.status
			loading.value = false
		})
		const deleteRequest = async () => {
			await store.dispatch('request/remove', route.params.id)
			router.push('/')
		}
		const updateRequest = async () => {
			await store.dispatch('request/update', {
				...request.value,
				id: route.params.id,
				status: status.value,
			})
			request.value.status = status.value
		}
		return {
			loading,
			request,
			currency,
			deleteRequest,
			updateRequest,
			status,
			hasChanges,
		}
	},
	components: {AppPage, AppLoader, AppStatus},
}
</script>
