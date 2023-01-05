<template>
	<span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import {ref, watch} from 'vue'
const classesMap = {
	active: 'primary',
	cancelled: 'danger',
	done: 'primary',
	pending: 'warning',
}
const textMap = {
	active: 'Активен',
	cancelled: 'Отменен',
	done: 'Завершен',
	pending: 'Выполняется',
}

export default {
	props: {
		type: {
			type: String,
			required: true,
			validator(value) {
				return Object.keys(classesMap).includes(value)
			},
		},
	},
	setup(props) {
		const className = ref(classesMap[props.type])
		const text = ref(textMap[props.type])
		watch(props, (value) => {
			className.value = classesMap[value.type]
			text.value = textMap[value.type]
		})
		return {
			className,
			text,
		}
	},
}
</script>
