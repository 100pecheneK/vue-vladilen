<template>
	<header class="navbar">
		<h1>Vue</h1>
		<ul class="navbar-menu">
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<router-link to="/reusable">Reusable</router-link>
			</li>
			<li>
				<router-link to="/vuex">Vuex</router-link>
			</li>
		</ul>
	</header>
	<div class="container with-nav">
		<router-view></router-view>
	</div>
</template>
