<template>
	<div class="container">
		<div class="card">
			<button class="btn primary" @click="isModal = true">Open Modal</button>
		</div>
	</div>
	<teleport to="body">
		<Modal @close="isModal = false" v-if="isModal" />
	</teleport>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
	data() {
		return {
			isModal: false,
		}
	},
	components: { Modal },
}
</script>
