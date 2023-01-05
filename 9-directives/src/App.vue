<template>
	<div class="container">
		<div class="card" v-if="isShow">
			<h2 v-color:[type].blink.hover="color">Directives</h2>
			<div class="form-control">
				<label for="inp">Active by default</label>
				<input type="text" id="inp" v-focus />
			</div>
			<button class="btn" @click="color = 'darkgreen'">
				Make it darkgreen!
			</button>
			<button
				class="btn"
				@click="type = type === 'color' ? 'backgroundColor' : 'color'"
			>
				Change type!
			</button>
			<button class="btn" @click="isShow = false">Hide</button>
		</div>
	</div>
</template>
<script>
import focusDirective from './directives/focus'
import colorDirective from './directives/color'

export default {
	data() {
		return {
			color: 'darkred',
			type: 'color',
			isShow: true,
		}
	},
	directives: {
		focus: focusDirective,
		color: colorDirective,
	},
}
</script>
