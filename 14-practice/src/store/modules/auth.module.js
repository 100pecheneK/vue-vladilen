import axios from 'axios'
import {error} from '../../utils/error'
import {MESSAGE_TYPES} from '../../types/message'

const TOKEN_KEY = 'jwt-token'
export default {
	namespaced: true,
	state() {
		return {
			token: localStorage.getItem(TOKEN_KEY),
		}
	},
	mutations: {
		setToken(state, token) {
			state.token = token
			localStorage.setItem(TOKEN_KEY, token)
		},
		logout(state) {
			state.token = null
			localStorage.removeItem(TOKEN_KEY)
		},
	},
	actions: {
		async login({commit, dispatch}, payload) {
			const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
			try {
				const {data} = await axios.post(url, {
					...payload,
					returnSecureToken: true,
				})
				commit('setToken', data.idToken)
				commit('message/clearMessage', null, {root: true})
			} catch (e) {
				dispatch(
					'message/setMessage',
					{
						value: error(e.response.data.error.message),
						type: MESSAGE_TYPES.ERROR,
					},
					{root: true},
				)
			}
		},
	},
	getters: {
		token(state) {
			return state.token
		},
		isAuthenticated(_, getters) {
			return !!getters.token
		},
	},
}
