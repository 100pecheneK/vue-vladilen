import {createLogger, createStore} from 'vuex'
import auth from './modules/auth.module'
import message from './modules/message.module'
import request from './modules/request.module'

const plugins = []
if (process.env.NODE_ENV === 'development') {
	plugins.push(createLogger())
}
export default createStore({
	plugins,
	state() {
		return {
			sidebar: false,
		}
	},
	getters: {},
	mutations: {
		openSidebar(state) {
			state.sidebar = true
		},
		closeSidebar(state) {
			state.sidebar = false
		},
	},
	actions: {},
	modules: {auth, message, request},
})
