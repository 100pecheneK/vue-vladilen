<template>
	<div class="form-control" :class="{ 'form-control--invalid': error }">
		<label :for="id">{{ label }}</label>
		<input
			:type="type"
			:id="id"
			:placeholder="placeholder"
			:value="value"
			@input="onInput"
		/>
		<small v-if="error">{{ error }}</small>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'text',
		},
		value: {
			type: String,
		},
		error: {
			type: String,
		},
		label: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			required: true,
		},
	},
	emist: ['update:value'],
	data() {
		return {
			id: 'input-' + Math.random(),
		}
	},
	methods: {
		onInput(e) {
			this.$emit('update:value', e.target.value)
		},
	},
}
</script>
