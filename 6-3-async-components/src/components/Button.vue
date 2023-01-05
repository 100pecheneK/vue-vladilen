<template>
	<button class="btn" :class="{ primary: primary }" @click="onClick">
		<slot>{{ text }}</slot>
	</button>
</template>
<script>
export default {
	props: {
		text: {
			type: String,
		},
		primary: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['click'],
	methods: {
		onClick(e) {
			this.$emit('click', e)
		},
	},
}
</script>
