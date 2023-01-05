<template>
	<TheNavbar />
	<TheSidebar />
	<div class="container with-nav">
		<AppMessage />
		<router-view />
	</div>
</template>
<script>
import TheNavbar from '../components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import AppMessage from '../components/AppMessage.vue'

export default {
	components: {TheNavbar, AppMessage, TheSidebar},
}
</script>
