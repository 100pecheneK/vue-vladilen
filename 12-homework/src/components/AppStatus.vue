<template>
	<span :class="['badge', classname]">{{ text }}</span>
</template>

<script>
import { watch, ref } from 'vue'
import { types, textType } from './AppStatusTypes'
export default {
	setup(props) {
		const classname = ref(types[props.type])
		const text = ref(textType[props.type])

		watch(props, (val) => {
			classname.value = types[val.type]
			text.value = textType[val.type]
		})
		return {
			classname,
			text,
		}
	},
	props: {
		type: {
			type: String,
			validator(value) {
				return ['active', 'done', 'pending', 'cancelled'].includes(value)
			},
		},
	},
}
</script>
