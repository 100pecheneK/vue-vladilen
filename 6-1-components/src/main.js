import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import './theme.css'

const app = createApp(App)

app.component('main-header', Header)
app.mount('#app')
