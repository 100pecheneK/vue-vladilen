<template>
	<div class="card">
		<h3>Title One</h3>
		<p>Lorem ipsum dolor sit amet consectetur.</p>
		<div class="form-control"><input type="text" v-model="text" /></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: '',
		}
	},
}
</script>
