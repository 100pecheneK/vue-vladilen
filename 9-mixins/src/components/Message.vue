<template>
	<div class="message" :class="type">
		<p class="message-title">{{ title }}</p>
		<p>{{ text }}</p>
		<button v-if="closable" class="btn" :class="type" @click="onClick">
			Close
		</button>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		title: String,
		closable: {
			type: Boolean,
			default: false,
			required: false,
		},
		type: {
			type: String,
			default: 'primary',
			required: false,
			validator: (type) => ['primary', 'danger', 'warning'].includes(type),
		},
	},
	emits: ['onClose'],
	methods: {
		onClick() {
			this.$emit('onClose')
		},
	},
}
</script>
