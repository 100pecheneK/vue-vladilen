<template>
	<form @submit.prevent='onSubmit' @keypress.prevent.enter='onSubmit'>
		<div class='form-control'>
			<label for='type'>Тип блока</label>
			<select id='type' v-model='selectedType'>
				<option value='title'>{{ outputComponentsType['title'].text }}</option>
				<option value='subtitle'>
					{{ outputComponentsType['subtitle'].text }}
				</option>
				<option value='avatar'>
					{{ outputComponentsType['avatar'].text }}
				</option>
				<option value='text'>{{ outputComponentsType['text'].text }}</option>
			</select>
		</div>

		<div class='form-control'>
			<label for='value'>Значение</label>
			<textarea id='value' rows='3' v-model.trim='value' />
		</div>

		<button class='btn primary' :disabled='!isValidValue' type='submit'>
			Добавить
		</button>
	</form>
</template>

<script>
import outputComponentsType from './outputComponents/outputComponentsType'

export default {
	data() {
		return {
			types: [
				{ value: 'title', text: 'Заголовок' },
				{ value: 'subtitle', text: 'Подзаголовок' },
				{ value: 'avatar', text: 'Текст' },
				{ value: 'text', text: 'Аватар' },
			],
			value: '',
			selectedType: 'title',
			outputComponentsType,
		}
	},
	emits: ['onSubmit'],
	methods: {
		onSubmit() {
			const output = {
				type: this.selectedType,
				value: this.value,
			}
			this.$emit('onSubmit', output)
			this.value = ''
		},
	},
	computed: {
		isValidValue() {
			if (this.value.length < 4) return false
			return true
		},
	},
}
</script>
