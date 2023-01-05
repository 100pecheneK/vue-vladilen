<template>
	<div class="card">
		<h1>Привет на главной</h1>

		<p>
			Тут ты можешь перейти на любую страницу и почитать заранее заготовленные
			письма :)
		</p>

		<router-link :to="{ name: 'mail' }">To Mail</router-link>
	</div>
</template>

<script>
export default {
	beforeRouteLeave(to, from, next) {
		if (!confirm('Are you shure?')) return
		next()
	},
}
</script>

<style scoped></style>
