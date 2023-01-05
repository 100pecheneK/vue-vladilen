export default {
	increment(state) {
		state.counter = state.counter + 1
	},
	add(state, payload) {
		state.counter = state.counter + payload.value
	},
	sub(state, payload) {
		state.counter = state.counter - payload.value
	},
}