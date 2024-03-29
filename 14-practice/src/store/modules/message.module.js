export default {
	namespaced: true,
	store() {
		return {
			message: null,
		}
	},
	mutations: {
		setMessage(state, message) {
			state.message = message
		},
		clearMessage(state) {
			state.message = null
		},
	},
	actions: {
		setMessage({commit}, message) {
			commit('setMessage', message)
			setTimeout(() => {
				commit('clearMessage')
			}, 5000)
		},
	},
	getters: {
		message(state) {
			return state.message
		},
	},
}
