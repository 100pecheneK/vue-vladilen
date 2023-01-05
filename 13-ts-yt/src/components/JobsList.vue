<template>
	order by {{ order }}
	<transition-group name="list" tag="pre">
		<pre v-for="(job, i) in orderedJobs" :key="job.id">{{i}}<hr/>{{ job }}</pre>
	</transition-group>
</template>

<script lang="ts">
import {computed} from 'vue'
import {defineComponent, PropType} from 'vue'
import Job from '../types/job'
import OrderTerm from '../types/ordedTerm'

export default defineComponent({
	props: {
		jobs: {
			required: true,
			type: Array as PropType<Job[]>,
		},
		order: {
			required: true,
			type: String as PropType<OrderTerm>,
		},
	},
	setup(props) {
		const orderedJobs = computed(() => {
			return [...props.jobs].sort((a, b) =>
				a[props.order] > b[props.order] ? 1 : -1,
			)
		})
		return {orderedJobs}
	},
})
</script>

<style>
.list-move {
	transition: all 1s;
}
</style>
