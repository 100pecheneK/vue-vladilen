import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
import Dashboard from './views/Dashboard'
import NotFound from './views/NotFound'
import EmailBody from './components/EmailBody'

const Mail = () => import('./views/Mail')

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/login', component: Login, alias: '/' },
		{ path: '/forget', component: Forget, meta: { forbidden: true } },
		{
			path: '/dashboard',
			component: Dashboard,
			name: 'home',
			beforeEnter() {},
		},
		{
			path: '/mail',
			component: Mail,
			children: [{ path: ':id?', component: EmailBody, props: true }],
			name: 'mail',
		},
		{ path: '/:notFound(.*)', component: NotFound },
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
})
router.beforeEach((to, from, next) => {
	if (to.meta.forbidden) {
		next({ name: 'home' })
	} else {
		next()
	}
})
// router.afterEach((to, from) => {})
export default router
