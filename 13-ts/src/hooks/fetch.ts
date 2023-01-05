import { Ref, ref } from 'vue'

type RequestType = () => Promise<void>
type UseFetchType<T> = {
	request: RequestType
	response: Ref<T | undefined>
}

export function useFetch<T>(
	url: RequestInfo,
	options?: RequestInit,
): UseFetchType<T> {
	const response = ref<T>()
	const request = async () => {
		const res = await fetch(url, options)
		response.value = await res.json()
	}
	return {
		request,
		response,
	}
}
