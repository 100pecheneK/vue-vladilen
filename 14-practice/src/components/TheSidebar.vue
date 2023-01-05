<template>
	<div class="sidebar" v-if="sidebar">
		<span class="sidebar-close" @click="close">&times;</span>
		<div class="sidebar-content">
			<p>
				Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
				cillum sint consectetur cupidatat.
			</p>
		</div>
	</div>
</template>

<script>
import {computed} from '@vue/reactivity'
import {useStore} from 'vuex'

export default {
	setup() {
		const store = useStore()
		const sidebar = computed(() => store.state.sidebar)
		return {
			sidebar,
			close: () => store.commit('closeSidebar'),
		}
	},
}
</script>
