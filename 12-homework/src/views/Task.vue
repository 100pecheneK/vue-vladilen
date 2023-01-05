<template>
	<div v-if="founded" class="card">
		<h2>{{ task.title }}</h2>
		<p>
			<strong>Status</strong>:
			<AppStatus :type="task.status" />
		</p>
		<p><strong>Дэдлайн</strong>: {{ task.date }}</p>
		<p><strong>Описание</strong>: {{ task.description }}</p>
		<div>
			<button class="btn" @click="changeStatus('pending')">
				Взять в работу
			</button>
			<button class="btn primary" @click="changeStatus('done')">
				Завершить
			</button>
			<button class="btn danger" @click="changeStatus('cancelled')">
				Отменить
			</button>
		</div>
	</div>
	<h3 v-else class="text-white center">
		Задачи с id = <strong>{{ routeId }}</strong> нет.
	</h3>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
	setup() {
		const store = useStore()
		const route = useRoute()
		const id = route.params.id
		const task = computed(() => store.getters.getTaskById(id))
		function changeStatus(status) {
			store.dispatch('changeStatus', { id, status })
		}
		return { task, founded: !!task.value, routeId: id, changeStatus }
	},
	components: { AppStatus },
}
</script>

<style scoped></style>
