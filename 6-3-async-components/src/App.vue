<template>
	<div class="container pt-1">
		<div class="card">
			<h2>Dynamic & async compontens</h2>
			<AsyncComponent />
			<TogglerButton
				@activate="activate"
				:activeName="active"
				name="one"
				text="One"
			/>
			<TogglerButton
				@activate="activate"
				:activeName="active"
				name="two"
				text="Two"
			/>
		</div>

		<keep-alive>
			<component :is="activeComponent"></component>
		</keep-alive>
	</div>
</template>

<script>
import Button from './components/Button.vue'
import TextOne from './components/TextOne.vue'
import TextTwo from './components/TextTwo.vue'
import TogglerButton from './components/TogglerButton.vue'

export default {
	data() {
		return {
			active: 'one',
		}
	},
	methods: {
		activate(name) {
			this.active = name
		},
	},
	computed: {
		activeComponent() {
			return {
				one: 'TextOne',
				two: 'TextTwo',
			}[this.active]
		},
	},
	components: { Button, TextOne, TextTwo, TogglerButton },
}
</script>
