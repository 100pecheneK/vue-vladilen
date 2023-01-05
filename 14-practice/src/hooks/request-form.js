import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(submitFunction) {
	const {isSubmitting, handleSubmit} = useForm({
		initialValues: {
			status: 'active',
		},
	})
	const {
		value: fio,
		errorMessage: fioError,
		handleBlur: fioBlur,
	} = useField('fio', yup.string().trim().required('Введите фамилию'))
	const {
		value: phone,
		errorMessage: phoneError,
		handleBlur: phoneBlur,
	} = useField('phone', yup.string().trim().required('Введите телефон'))
	const {
		value: amount,
		errorMessage: amountError,
		handleBlur: amountBlur,
	} = useField(
		'amount',
		yup
			.number()
			.typeError('Введите число')
			.required('Введите сумму')
			.min(0, 'Сумма не может быть меньше 0'),
	)
	const {value: status} = useField('status')
	const onSubmit = handleSubmit(submitFunction)
	return {
		status,
		isSubmitting,
		onSubmit,
		fio,
		fioError,
		fioBlur,
		phone,
		phoneError,
		phoneBlur,
		amount,
		amountError,
		amountBlur,
	}
}
