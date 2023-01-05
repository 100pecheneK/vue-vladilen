<template>
	<Alert v-if="alert" title="Working with composition" type="primary" @close="close" />
	<div class="card">
		<h1>Reusable</h1>
		<button class="btn primary" @click="toggle">
			{{ alert ? 'Hide' : 'Show' }} message
		</button>
		<button class="btn" @click="navigate">Go to home</button>
	</div>
</template>
<script>
import { useRouter } from 'vue-router'
import { useAlert } from '../hooks/alert'
import Alert from '../components/Alert'

export default {
	setup() {
		const router = useRouter()
		const navigate = () => router.push('/')
		return {
			navigate,
			...useAlert()
		}
	},
	components: { Alert },
}
</script>
<style>
</style>
