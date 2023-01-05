<template>
	<form class="card" @submit.prevent="onSubmit">
		<h1>Войти в систему</h1>
		<div :class="['form-control', {invalid: emailError}]">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				autocomplete="email"
				v-model="email"
				@blur="emailBlur"
			/>
			<small v-if="emailError">{{ emailError }}</small>
		</div>
		<div :class="['form-control', {invalid: passwordError}]">
			<label for="password">Password {{ password?.length || '' }}</label>
			<input
				type="password"
				id="password"
				autocomplete="current-password"
				v-model="password"
				@blur="passwordBlur"
			/>
			<small v-if="passwordError">{{ passwordError }}</small>
		</div>
		<button class="btn primary" :disabled="isSubmitting || isToManyAttemts">
			Войти
		</button>
		<div class="text-danger" v-if="isToManyAttemts">Слишком много попыток</div>
	</form>
</template>

<script>
import {MESSAGE_TYPES} from '@/types/message'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {useLoginForm} from '../hooks'
import {error} from '../utils/error'

export default {
	setup() {
		const route = useRoute()
		const store = useStore()

		if (route.query.message) {
			store.dispatch('message/setMessage', {
				value: error(route.query.message),
				type: MESSAGE_TYPES.WARNING,
			})
		}
		return {...useLoginForm()}
	},
}
</script>
