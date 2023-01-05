<template>
	<hr />
	<ul>
		<p>{{ title }}</p>
		<li v-for="news in newsList.value" :key="news.id">
			{{ news.title }}
			<span v-if="news.isReaded">!!!</span>
		</li>
	</ul>
</template>
<script>
export default {
	inject: ['newsList', 'title'],
}
</script>
