import {computed, watch} from 'vue'
import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm() {
	const store = useStore()
	const router = useRouter()
	const {handleSubmit, isSubmitting, submitCount} = useForm()

	const {
		value: email,
		errorMessage: emailError,
		handleBlur: emailBlur,
	} = useField(
		'email',
		yup
			.string()
			.trim()
			.required('Пожалуйста, введите почту')
			.email('Это не почта'),
	)
	const MIN_PASSW_LEN = 6
	const {
		value: password,
		errorMessage: passwordError,
		handleBlur: passwordBlur,
	} = useField(
		'password',
		yup
			.string()
			.trim()
			.required('Пожалуйста, введите пароль')
			.min(
				MIN_PASSW_LEN,
				`Пароль не может быть меньше ${MIN_PASSW_LEN} символов`,
			),
	)

	const isToManyAttemts = computed(() => submitCount.value >= 3)
	const onSubmit = handleSubmit(async (values) => {
		try {
			await store.dispatch('auth/login', values)
			router.push('/')
		} catch (e) {
			console.log()
		}
	})

	watch(isToManyAttemts, (val) => {
		if (val) {
			setTimeout(() => (submitCount.value = 0), 1500)
		}
	})
	return {
		email,
		emailError,
		emailBlur,
		password,
		passwordError,
		passwordBlur,
		onSubmit,
		isSubmitting,
		isToManyAttemts,
	}
}
