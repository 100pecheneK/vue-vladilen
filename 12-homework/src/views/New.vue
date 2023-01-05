<template>
	<form class="card" @submit.prevent="createTask">
		<h1>Создать новую задачу</h1>
		<div class="form-control">
			<label for="title">Название</label>
			<input type="text" id="title" v-model="task.title" />
		</div>

		<div class="form-control">
			<label for="date">Дата дэдлайна</label>
			<input type="date" id="date" v-model="task.date" />
		</div>

		<div class="form-control">
			<label for="description">Описание</label>
			<textarea id="description" v-model="task.description"></textarea>
		</div>

		<button class="btn primary" :disabled="!isValid">Создать</button>
	</form>
</template>

<script>
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
	setup() {
		const store = useStore()
		const router = useRouter()
		const task = reactive({
			title: '',
			description: '',
			date: '',
		})
		function createTask() {
			store.dispatch('createTask', {
				...task,
				date: new Date(task.date).toLocaleDateString(),
			})
			router.push('/')
		}
		const isValid = computed(() => {
			return task.title !== '' && task.date && task.description !== ''
		})
		return {
			isValid,
			task,
			createTask,
		}
	},
}
</script>
