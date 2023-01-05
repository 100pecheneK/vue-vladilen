<template>
	<AppLoader v-if="loading" />
	<AppPage title="Список заявок" v-else>
		<template #header>
			<button class="btn primary" @click="openModal">Создать</button>
		</template>
		<RequestFilter v-model="filter" />
		<RequestTable :requests="requests" />
		<teleport to="body">
			<AppModal v-if="modal" title="Создать заявку" @close="closeModal">
				<RequestModal @created="closeModal" />
			</AppModal>
		</teleport>
	</AppPage>
</template>
<script>
import {ref, computed, onMounted} from 'vue'
import AppPage from '../components/ui/AppPage.vue'
import AppModal from '../components/ui/AppModal.vue'
import AppLoader from '../components/ui/AppLoader.vue'
import RequestTable from '../components/request/RequestTable.vue'
import RequestModal from '../components/request/RequestModal.vue'
import RequestFilter from '../components/request/RequestFilter.vue'
import {useStore} from 'vuex'

export default {
	setup() {
		const store = useStore()
		const modal = ref(false)
		const loading = ref(true)
		const filter = ref({})
		const requests = computed(() =>
			store.getters['request/requests']
				.filter((request) => {
					if (filter.value.name) {
						const names = filter.value.name.split(',').map((c) => c.trim())
						return names.some((i) => request.fio.includes(i))
					}
					return request
				})
				.filter((request) => {
					if (filter.value.status) {
						return filter.value.status === request.status
					}
					return request
				}),
		)
		onMounted(async () => {
			await store.dispatch('request/load')
			loading.value = false
		})
		return {
			filter,
			modal,
			requests,
			loading,
			closeModal: () => (modal.value = false),
			openModal: () => (modal.value = true),
		}
	},
	components: {
		AppPage,
		RequestTable,
		AppModal,
		RequestModal,
		AppLoader,
		RequestFilter,
	},
}
</script>
