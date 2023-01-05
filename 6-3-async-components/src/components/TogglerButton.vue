<template>
	<button class="btn" :class="{ primary: primary }" @click="activate">
		<slot>{{ text }}</slot>
	</button>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		activeName: {
			type: String,
			required: true,
		},
		text: {
			type: String,
		},
	},
	emits: ['activate'],
	methods: {
		activate() {
			this.$emit('activate', this.name)
		},
	},
	computed: {
		primary() {
			return this.name === this.activeName
		},
	},
}
</script>
