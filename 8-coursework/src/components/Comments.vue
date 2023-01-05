<template>
	<div class="container">
		<p v-if="!isLoading && !comments.length">
			<button class="btn primary" @click="loadComments">
				Загрузить комментарии
			</button>
		</p>
		<div class="loader" v-if="isLoading" />
		<div class="card" v-else-if="comments.length">
			<h2>Комментарии</h2>
			<ul class="list">
				<li class="list-item" v-for="{ email, body, id } in comments" :key="id">
					<div>
						<p>
							<strong>{{ email }}</strong>
						</p>
						<small>{{ body }}</small>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			comments: [],
			isLoading: false,
		}
	},
	methods: {
		async loadComments() {
			this.isLoading = true
			const comments = await (
				await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
			).json()
			this.comments = comments
			this.isLoading = false
		},
	},
}
</script>
