<template>
	<h3 v-if="!tasks.length" class="text-white center">Задач пока нет</h3>
	<h3 v-else class="text-white">
		Всего активных задач{{
			status && ` с типом ${textType[status].toLowerCase()}`
		}}: {{ tasks.length }}
	</h3>
	<ul class="navbar-menu status">
		<li class="list-item" @click="selectStatus()">Все</li>
		<li
			v-for="(type, key) in types"
			:class="['list-item', type, status === key && 'active']"
			:key="key"
			@click="selectStatus(key)"
		>
			{{ textType[key] }}
		</li>
	</ul>
	<TheTask v-for="task in tasks" :key="task.id" :task="task" />
</template>

<script>
import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import TheTask from '../components/TheTask'
import { types, textType } from '../components/AppStatusTypes'

export default {
	setup() {
		const store = useStore()
		const status = ref(null)
		const tasks = ref(store.getters.tasks)
		function selectStatus(newStatus) {
			status.value = newStatus
		}
		watch(status, (newStatus) => {
			if (!newStatus) return (tasks.value = store.getters.tasks)
			tasks.value = store.getters.getTasksByStatus(newStatus)
		})
		return {
			types,
			textType,
			tasks,
			selectStatus,
			status,
		}
	},
	components: { TheTask },
}
</script>
