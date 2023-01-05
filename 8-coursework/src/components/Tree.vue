<template>
	<ul>
		<li
			v-for="(output, index) in outputs"
			:key="index"
			@click="onDelete(index)"
		>
			<button class="btn danger btn--delete">✕</button>
			{{ outputComponentsType[output.type].text }}
			{{
				output.type !== 'avatar'
					? `(${output.value.substring(0, 5)}${
							output.value.length > 5 ? '...' : ''
					  })`
					: ''
			}}
		</li>
	</ul>
</template>

<script>
import outputComponentsType from './outputComponents/outputComponentsType'

export default {
	props: ['outputs'],
	emits: ['onDelete'],
	data() {
		return { outputComponentsType }
	},
	methods: {
		onDelete(index) {
			this.$emit('onDelete', index)
		},
	},
}
</script>

<style scoped>
ul {
	padding: 0;
}
li {
	list-style: none;
	/* border-left: 1px solid #000; */
	/* padding-left: 1em; */
	margin-bottom: 0.5em;
}
.btn--delete {
	padding: 0.4em 0.7em;
}
</style>
