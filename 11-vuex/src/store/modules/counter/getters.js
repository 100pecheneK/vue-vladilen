export default {
	counter(state) {
		// if (state.counter > 10) {
		// 	return 0
		// }
		return state.counter
	},
	// eslint-disable-next-line
	doubleCounter(state, getters, rootState, rootGettters) {
		return getters.counter * 2
	},
}
