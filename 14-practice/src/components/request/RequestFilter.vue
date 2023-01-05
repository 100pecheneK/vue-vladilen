<template>
	<div class="filter">
		<div class="form-control">
			<input type="text" placeholder="Начните писать имя" v-model="name" />
		</div>
		<div class="form-control">
			<select v-model="status">
				<option value="" disabled selected>Выберите статус</option>
				<option value="done">Завершен</option>
				<option value="cancelled">Отменен</option>
				<option value="active">Активен</option>
				<option value="pending">Выполняется</option>
			</select>
		</div>
		<button class="btn warning" v-if="isActive" @click="reset">
			Отчистить
		</button>
	</div>
</template>
<script>
import {computed} from '@vue/reactivity'
import {ref, watch} from 'vue'

export default {
	emits: ['update:modelValue'],
	props: ['modelValue'],
	setup(_, {emit}) {
		const name = ref()
		const status = ref('')
		const isActive = computed(() => name.value || status.value)
		watch([name, status], (values) => {
			emit('update:modelValue', {
				name: values[0],
				status: values[1],
			})
		})
		return {
			name,
			status,
			isActive,
			reset: () => {
				name.value = ''
				status.value = ''
			},
		}
	},
}
</script>
