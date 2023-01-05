import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import Loading from './components/Loading.vue'
import './theme.css'

const app = createApp(App)

app.component(
	'AsyncComponent',
	defineAsyncComponent({
		loader: () => import('./components/AsyncComponent'),
		loadingComponent: Loading,
	}),
)
app.mount('#app')
