import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
		meta: {
			layout: 'main',
			authRequired: true,
		},
	},
	{
		path: '/help',
		name: 'Help',
		component: () => import('../views/HelpView.vue'),
		meta: {
			layout: 'main',
			authRequired: true,
		},
	},
	{
		path: '/auth',
		name: 'Auth',
		component: () => import('../views/AuthView.vue'),
		meta: {
			layout: 'auth',
		},
	},
	{
		path: '/request/:id',
		name: 'Request',
		component: () => import('../views/RequestView.vue'),
		meta: {
			layout: 'main',
			authRequired: true,
		},
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
})

router.beforeEach((to, _, next) => {
	const isAuthRequired = to.meta.authRequired
	const isAuthenticated = store.getters['auth/isAuthenticated']
	if (isAuthRequired && isAuthenticated) {
		next()
	} else if (isAuthRequired && !isAuthenticated) {
		next('/auth?message=notauth')
	} else {
		next()
	}
})

export default router
