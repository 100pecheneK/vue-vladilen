<template>
	<div class="card">
		<h3>{{ id }} | {{ title }}</h3>
		<Button
			:primary="!isReaded"
			@click="toggleOpenNews"
			:text="isNewsOpen ? 'Close' : 'Open'"
		/>
		<div v-if="isNewsOpen">
			<hr />
			<p>{{ text }}</p>
			<Button v-if="isReaded" @click="unread">I changed my mind</Button>
			<Button v-else @click="read" :primary="!isReaded">Make it readed!</Button>
			<NewsList />
		</div>
	</div>
</template>

<script>
import Button from './Button.vue'
import NewsList from './NewsList.vue'

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: false,
			default: 'No text',
		},
		id: {
			type: Number,
			required: true,
		},
		isOpen: {
			type: Boolean,
			required: false,
			default: false,
		},
		isReaded: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: {
		'news-open': null,
		'news-close': null,
		// For example validator func
		'news-readed'(id) {
			if (id) return true
			console.warn(
				'Id was not be provided when emit "news-readed" was summoned',
			)
			return false
		},
		'news-unread': null,
	},
	data() {
		return { isNewsOpen: this.isOpen }
	},
	methods: {
		closeNews() {
			this.isNewsOpen = false
			this.$emit('news-close', this.id)
		},
		toggleOpenNews() {
			this.isNewsOpen = !this.isNewsOpen
			if (this.isNewsOpen) {
				this.$emit('news-open', this.id)
			} else {
				this.closeNews()
			}
		},
		read() {
			if (this.isReaded) return
			this.closeNews()
			this.$emit('news-readed', this.id)
		},
		unread() {
			if (!this.isReaded) return
			this.$emit('news-unread', this.id)
		},
	},
	components: { Button, NewsList },
}
</script>
