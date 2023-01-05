<template>
	<TheNavbar />
	<div class="container with-nav">
		<div class="card">
			<h1>{{ title }}</h1>
			<h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
			<button class="btn" @click="increment">Add</button>
			<button class="btn danger" @click="addAsync">Add 10</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import TheNavbar from './components/TheNavbar.vue'

export default {
	components: { TheNavbar },
	computed: {
		...mapGetters(['title']),
		...mapGetters('counter', ['counter', 'doubleCounter']),
	},
	methods: {
		...mapMutations('counter', ['increment']),
		...mapActions('counter', { actionAddAsync: 'addAsync' }),
		addAsync() {
			this.actionAddAsync({ value: 10, delay: 500 })
		},
	},
}
</script>
