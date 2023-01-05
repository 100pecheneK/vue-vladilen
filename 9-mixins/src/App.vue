<template>
	<div class="container">
		<Message
			title="Title"
			text="Text"
			type="primary"
			v-if="message"
			@onClose="onClose"
			closable
		/>
		<div class="card">
			<button class="btn primary" @click="toggleMessages">
				{{ message ? 'Hide' : 'Show' }} messages
			</button>
		</div>
	</div>
</template>

<script>
import Message from './components/Message.vue'
import alertMixin from './mixins/message'

export default {
	mixins: [alertMixin],
	components: { Message },
}
</script>
