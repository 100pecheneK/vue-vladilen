import { createStore, createLogger } from 'vuex'
import counter from './modules/counter'

export default createStore({
	plugins: [createLogger()],
	modules: {
		counter,
	},
	state: {
		title: 'Vuex',
	},
	getters: {
		title(state) {
			return state.title
		},
	},
})
