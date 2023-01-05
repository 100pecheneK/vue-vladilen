import { createRouter, createWebHistory } from 'vue-router'
import { Tasks, Task, New } from '../views'

const routes = [
	{
		path: '/',
		name: 'Tasks',
		component: Tasks,
	},
	{
		path: '/new',
		name: 'New',
		component: New,
	},
	{
		path: '/:id',
		name: 'Task',
		component: Task,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
})

export default router
