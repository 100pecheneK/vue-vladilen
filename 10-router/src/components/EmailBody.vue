<template>
	<div v-if="email">
		<h2>{{ email.theme }}</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi,
			cumque ea laborum laudantium nostrum odio quis soluta sunt velit?
		</p>
		<button class="btn" @click="$router.push('/mail')">Закрыть</button>
	</div>
	<div v-else><h3>Выберите письмо</h3></div>
</template>

<script>
export default {
	inject: ['emails'],
	props: ['id'],
	computed: {
		email() {
			return this.emails.find((email) => email.id == this.id)
		},
	},
}
</script>

<style scoped></style>
