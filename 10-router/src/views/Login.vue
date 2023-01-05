<template>
	<form class="card" @submit.prevent="submit">
		<h2>Мини клон Gmail</h2>
		<div class="form-control">
			<label for="email">Email</label>
			<input type="text" id="email" v-model.trim="email" autocomplete="email" />
		</div>

		<div class="form-control">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				v-model="password"
				autocomplete="current-password"
			/>
		</div>

		<button class="btn primary" type="submit" :disabled="!isValid">
			Войти
		</button>
		<router-link to="/forget" v-slot="{ navigate }">
			<button class="btn warning" @click="navigate">Забыл пароль?</button>
		</router-link>
	</form>
</template>

<script>
export default {
	data() {
		return {
			isValid: false,
			email: '',
			password: '',
		}
	},
	inject: ['login'],
	methods: {
		submit() {
			if (this.isValid) {
				this.login()
			}
		},
	},
	watch: {
		email() {
			this.isValid = this.email !== '' && this.password !== ''
		},
		password() {
			this.isValid = this.email !== '' && this.password !== ''
		},
	},
}
</script>

<style scoped></style>
