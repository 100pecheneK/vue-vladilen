<template>
	<span style="cursor: pointer" @click="toggleShowMore">{{ user.name }}</span>

	<div v-if="isShowMore">
		{{ user }}
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	props: ['user', 'isShow'],
	setup() {
		const isShowMore = ref(false)
		const toggleShowMore = () => {
			isShowMore.value = !isShowMore.value
		}

		return {
			isShowMore,
			toggleShowMore,
		}
	},
})
</script>
