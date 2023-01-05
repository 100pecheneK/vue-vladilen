export default {
	addAsync({ commit }, payload) {
		setTimeout(() => {
			commit('add', payload)
		}, payload.delay || 1000)
	},
}