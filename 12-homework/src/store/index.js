import { createStore } from 'vuex'

class LocalStorage {
	getTasks() {
		return JSON.parse(localStorage.getItem('tasks')) || []
	}
	addTask(task) {
		this.saveTasks([...this.getTasks(), task])
	}
	saveTasks(tasks) {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}
	changeStatus(id, status) {
		const tasks = this.getTasks().map((task) => {
			if (task.id !== id) return task
			return {
				...task,
				status: status,
			}
		})
		this.saveTasks(tasks)
	}
}

class Storage {
	constructor(Storage) {
		this.storage = new Storage()
	}
	getTasks() {
		return this.storage.getTasks()
	}
	addTask(task) {
		return this.storage.addTask(task)
	}
	saveTasks(tasks) {
		return this.storage.saveTasks(tasks)
	}
	changeStatus(id, status) {
		return this.storage.changeStatus(id, status)
	}
}

const storage = new Storage(LocalStorage)

export default createStore({
	state: {
		tasks: storage.getTasks(),
	},
	getters: {
		tasks(state) {
			return state.tasks
		},
		getTaskById(_, state) {
			return (id) => state.tasks.find((t) => t.id === id)
		},
		getTasksByStatus(_, state) {
			return (status) => state.tasks.filter((t) => t.status === status)
		},
	},
	mutations: {
		createTask(state, payload) {
			const task = {
				...payload,
				id: Date.now().toString(),
				status: 'active',
			}
			state.tasks.push(task)
			storage.addTask(task)
		},
		changeStatus(state, payload) {
			storage.changeStatus(payload.id, payload.status)
			state.tasks = storage.getTasks()
		},
	},
	actions: {
		createTask(context, payload) {
			context.commit('createTask', payload)
		},
		changeStatus(context, payload) {
			context.commit('changeStatus', payload)
		},
	},
})
