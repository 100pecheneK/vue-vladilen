<template>
	<ul class="list">
		<li class="list-item" v-for="user in users" :key="user.id">
			<User :user="user" />
		</li>
	</ul>
</template>

<script lang="ts">
import { useUsers } from '@/hooks/users'
import { defineComponent } from 'vue'
import User from './User.vue'
export default defineComponent({
	async setup() {
		const { users } = await useUsers()
		return {
			users,
		}
	},
	components: { User },
})
</script>
