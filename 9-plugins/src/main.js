import { createApp } from 'vue'
import App from './App.vue'
import translate from './plugins/translate'
import './theme.css'

const app = createApp(App)

const localizations = {
	ru: {
		app: {
			title: 'Плагины',
			switchLanguageButton: 'Сменить язык',
		},
	},
	en: {
		app: {
			title: 'Plugins',
			switchLanguageButton: 'Switch language',
		},
	},
}

app.use(translate, localizations)

app.mount('#app')
