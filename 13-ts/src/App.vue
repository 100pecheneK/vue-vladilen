<template>
	<header class="navbar">
		<h3>Vue + TypeScript</h3>
		{{ workWithStore() }}
		<ul class="navbar-menu">
			<li>
				<router-link to="/">Главная</router-link>
			</li>
			<li>
				<router-link to="/users">Пользователи</router-link>
			</li>
		</ul>
	</header>
	<main class="container with-nav">
		<router-view />
	</main>
</template>
=>
<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()
function workWithStore() {
	return store.state.count
}
</script>
