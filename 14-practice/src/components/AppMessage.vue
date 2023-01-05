<template>
	<div v-if="message" :class="['alert', messageTypeClass]">
		<p class="alert-title">{{ title }}</p>
		<p>{{ message.value }}</p>
		<span class="alert-close" @click="close">&times;</span>
	</div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import {MESSAGE_CLASS_MAPPING, MESSAGE_MAPPING} from '@/types/message'

export default {
	setup() {
		const store = useStore()
		const message = computed(() => store.getters['message/message'])
		const title = computed(
			() => message.value && MESSAGE_MAPPING[message.value.type],
		)
		const messageTypeClass = computed(
			() => message.value && MESSAGE_CLASS_MAPPING[message.value.type],
		)
		return {
			message,
			messageTypeClass,
			title,
			close: () => store.commit('message/clearMessage'),
		}
	},
}
</script>
