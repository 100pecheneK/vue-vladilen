<template>
	<div class="container">
		<div class="card">
			<h2>{{ $i18n('app.title') }}</h2>
			<button class="btn" @click="switchLanguage">
				{{ $i18n('app.switchLanguageButton') }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	inject: ['changeI18N', 'getCurrentI18N'],
	methods: {
		switchLanguage() {
			this.changeI18N(this.getCurrentI18N() === 'ru' ? 'en' : 'ru')
			this.$forceUpdate()
		},
	},
}
</script>
