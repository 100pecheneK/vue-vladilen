import requestAxios from '@/axios/request'
import {MESSAGE_TYPES} from '@/types/message'
import store from '..'

export default {
	namespaced: true,
	state() {
		return {
			requests: [],
		}
	},
	mutations: {
		setRequests(state, requests) {
			state.requests = requests
		},
		addRequest(state, request) {
			state.requests.push(request)
		},
	},
	actions: {
		async create({commit, dispatch}, payload) {
			try {
				const token = store.getters['auth/token']
				const {data} = await requestAxios.post(
					`/requests.json?auth=${token}`,
					payload,
				)
				dispatch(
					'message/setMessage',
					{
						value: 'Заявка успешно создана',
						type: MESSAGE_TYPES.SUCCESS,
					},
					{root: true},
				)
				commit('addRequest', {...payload, id: data.name})
			} catch (error) {
				dispatch(
					'message/setMessage',
					{
						value: error.response.data.error,
						type: MESSAGE_TYPES.ERROR,
					},
					{root: true},
				)
			}
		},

		async load({commit, dispatch}) {
			try {
				const token = store.getters['auth/token']
				const {data} = await requestAxios.get(`/requests.json?auth=${token}`)
				const requests = Object.keys(data).map((id) => ({...data[id], id}))
				commit('setRequests', requests)
			} catch (error) {
				dispatch(
					'message/setMessage',
					{
						value: error.response.data.error,
						type: MESSAGE_TYPES.ERROR,
					},
					{root: true},
				)
			}
		},

		async loadById({dispatch}, id) {
			try {
				const token = store.getters['auth/token']
				const {data} = await requestAxios.get(
					`/requests/${id}.json?auth=${token}`,
				)
				return data
			} catch (error) {
				dispatch(
					'message/setMessage',
					{
						value: error.response.data.error,
						type: MESSAGE_TYPES.ERROR,
					},
					{root: true},
				)
			}
		},
		async remove({dispatch}, id) {
			try {
				const token = store.getters['auth/token']
				await requestAxios.delete(`/requests/${id}.json?auth=${token}`)

				dispatch(
					'message/setMessage',
					{
						value: 'Заявка удалена',
						type: MESSAGE_TYPES.SUCCESS,
					},
					{root: true},
				)
			} catch (error) {
				dispatch(
					'message/setMessage',
					{
						value: error.response.data.error,
						type: MESSAGE_TYPES.ERROR,
					},
					{root: true},
				)
			}
		},

		async update({dispatch}, request) {
			try {
				const token = store.getters['auth/token']
				await requestAxios.put(
					`/requests/${request.id}.json?auth=${token}`,
					request,
				)
				dispatch(
					'message/setMessage',
					{
						value: 'Изменение сохранено',
						type: MESSAGE_TYPES.SUCCESS,
					},
					{root: true},
				)
			} catch (error) {
				dispatch(
					'message/setMessage',
					{
						value: error.response.data.error,
						type: MESSAGE_TYPES.ERROR,
					},
					{root: true},
				)
			}
		},
	},
	getters: {
		requests(state) {
			return state.requests
		},
	},
}
