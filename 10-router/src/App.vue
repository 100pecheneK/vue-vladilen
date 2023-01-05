<template>
	<TheNavbar :visible="isAuth" />
	<div class="container with-nav">
		<router-view />
	</div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'

export default {
	data() {
		return {
			isAuth: !!localStorage.getItem('isAuth'),
		}
	},
	methods: {
		login() {
			this.isAuth = true
			localStorage.setItem('isAuth', true)
			if (this.$route.query.from) {
				this.$router.push(this.$route.query.from)
			} else {
				this.$router.push('/dashboard')
			}
		},
		logout() {
			this.isAuth = false
			localStorage.removeItem('isAuth')
			this.$router.push({
				path: '/login',
				query: {
					from: this.$route.path,
				},
			})
		},
	},
	components: { TheNavbar },
	provide() {
		return {
			login: this.login,
			logout: this.logout,
			emails: [
				{ id: 1, theme: 'Купил себе PlayStation 5' },
				{ id: 2, theme: 'Выучил Vue Router' },
				{ id: 3, theme: 'Хочу изучить весь Vue' },
				{ id: 4, theme: 'А следующий блок про Vuex!' },
				{ id: 5, theme: 'А что там на счет Vue Hooks?' },
			],
		}
	},
}
</script>

<style></style>
