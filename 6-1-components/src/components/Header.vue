<template>
	<div class="card" style="display: grid">
		<h2 class="card__title">{{ title }} | {{ today }}</h2>
		<span
			>News opend: {{ newsOpend.length }}
			<span style="color: #aaa" v-if="newsOpend.length">
				({{ newsOpend.join(', ') }})
			</span>
		</span>
		<span>News Readed: {{ newsReaded }}</span>
	</div>
</template>

<script>
export default {
	props: {
		newsOpend: Array,
		newsReaded: Number,
	},
	data: () => ({
		today: new Date().toLocaleDateString(),
		title: 'News',
	}),
}
</script>

<style scoped lang="scss">
.card {
	&__title {
		color: hsl(120, 100%, 40%);
	}
}
</style>
