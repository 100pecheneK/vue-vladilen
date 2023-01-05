<template>
	<div class="container pt-1">
		<vue-header :newsOpend="newsOpend" :newsReaded="newsReaded"></vue-header>
		<News
			v-for="{ title, text, id, isOpen, isReaded } in newsList"
			:key="id"
			:title="title"
			:text="text"
			:id="id"
			:isOpen="isOpen"
			:isReaded="isReaded"
			@news-open="onNewsOpen"
			@news-close="onNewsClose"
			@news-readed="onNewsReaded"
			@news-unread="onNewsUnread"
		/>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import News from './components/News.vue'
import { computed } from 'vue'

export default {
	data: () => ({
		newsOpend: [2],
		newsReaded: 0,
		newsList: [
			{
				id: 1,
				title: 'Lorem ipsum dolor sit amet.',
				isOpen: false,
				isReaded: false,
			},
			{
				id: 2,
				title: 'PIPA',
				text: 'PYPI',
				isOpen: true,
				isReaded: false,
			},
			{
				id: 3,
				title: 'Lorem ipsum dolor sit amet.',
				text: 'Text',
				isReaded: false,
			},
		],
	}),
	provide() {
		return {
			title: 'All news',
			newsList: computed(() => this.newsList),
		}
	},
	methods: {
		onNewsOpen(id) {
			this.newsOpend = [id, ...this.newsOpend]
		},
		onNewsClose(id) {
			this.newsOpend = this.newsOpend.filter((newsId) => newsId !== id)
		},
		onNewsReaded(id) {
			this.toggleNewsReaded(id, 1)
		},
		onNewsUnread(id) {
			this.toggleNewsReaded(id, -1)
		},
		toggleNewsReaded(id, readed) {
			this.newsReaded += readed
			this.newsList = this.newsList.map((news) => {
				if (news.id === id) {
					return {
						...news,
						isReaded: readed === 1,
					}
				}
				return news
			})
		},
	},
	components: {
		News,
		'vue-header': Header,
	},
}
</script>
