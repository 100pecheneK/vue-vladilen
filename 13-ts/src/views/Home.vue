<template>
	<div class="card">
		<h1>{{ title }}</h1>

		<button class="btn" @click="navigateToUsers">Открыть пользователей</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
	setup() {
		const router = useRouter()
		const navigateToUsers = () => {
			router.push('/users')
		}
		return {
			title: 'Как Vue работает с TypeScript?',
			navigateToUsers,
		}
	},
})
</script>
