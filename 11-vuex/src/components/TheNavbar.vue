<template>
	<header class="navbar">
		Vuex | {{ counter }}
		<button class="btn" @click="add">Add</button>
		<button class="btn" @click="sub">Sub</button>
	</header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	computed: {
		// counter() {
		// return this.$store.getters.counter
		// },
		...mapGetters('counter', ['counter']),
	},
	methods: {
		...mapMutations('counter', { mutationAdd: 'add', mutationSub: 'sub' }),
		add() {
			this.mutationAdd({ value: 5 })
		},
		sub() {
			this.mutationSub({ value: 5 })
		},
	},
}
</script>
