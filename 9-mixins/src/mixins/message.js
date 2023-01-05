const messageMixin = {
	data() {
		return {
			message: false,
		}
	},
	methods: {
		onClose() {
			this.message = false
		},
		toggleMessages() {
			this.message = !this.message
		},
	},
}

export default messageMixin
