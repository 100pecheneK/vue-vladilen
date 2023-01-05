<template>
	<div class="app">
		<button @click="handleClick('id')">order by id</button>
		<button @click="handleClick('salary')">order by selery</button>
		<JobsList :jobs="jobs" :order="order" />
	</div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Job from '@/types/job'
import JobsList from '@/components/JobsList.vue'
import OrderTerm from '@/types/ordedTerm'

export default defineComponent({
	name: 'App',
	setup() {
		const jobs = ref<Job[]>([
			{
				title: 'Title',
				location: 'Location',
				salary: 4000,
				id: '1',
			},
			{
				title: 'Title',
				location: 'Location',
				salary: 3000,
				id: '2',
			},
			{
				title: 'Title',
				location: 'Location',
				salary: 2000,
				id: '3',
			},
			{
				title: 'Title',
				location: 'Location',
				salary: 1000,
				id: '4',
			},
		])
		const order = ref<OrderTerm>('title')
		const handleClick = (term: OrderTerm) => {
			order.value = term
		}
		return {
			jobs,
			order,
			handleClick,
		}
	},
	components: {JobsList},
})
</script>
