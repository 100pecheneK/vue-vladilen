import { useFetch } from '@/hooks/fetch'
import { Ref, ref } from 'vue'
export type UserType = {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

type UseUsersType = Promise<{ users: Ref<UserType[] | undefined> }>
export async function useUsers(): UseUsersType {
	const loading = ref(false)
	const { request: getUsers, response: users } = useFetch<UserType[]>(
		'https://jsonplaceholder.typicode.com/users',
	)
	if (!loading.value) {
		await getUsers()
		loading.value = true
	}
	return { users }
}
