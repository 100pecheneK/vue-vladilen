export default {
	install(app, langs) {
		let currentLanguage = Object.keys(langs)[0]

		function changeLanguage(name) {
			currentLanguage = name
		}
		function getCurrentI18N() {
			return currentLanguage
		}

		app.config.globalProperties.$i18n = (key) => {
			return key.split('.').reduce((words, key) => {
				return words[key] || '=== No translate ==='
			}, langs[currentLanguage])
		}

		app.provide('changeI18N', changeLanguage)
		app.provide('getCurrentI18N', getCurrentI18N)
	},
}
