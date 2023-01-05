<template>
	<div class="card no-padding">
		<div class="card-nav">
			<ul class="list">
				<router-link
					:to="`/mail/${email.id}`"
					custom
					v-slot="{ isActive, navigate }"
					:key="email.id"
					v-for="email in emails"
				>
					<li
						class="list-item"
						:class="isActive ? 'active' : ''"
						@click="navigate"
					>
						{{ email.theme }}
					</li>
				</router-link>
			</ul>
		</div>
		<div class="card-body">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	inject: ['emails'],
}
</script>

<style scoped>
.card {
	display: flex;
}

.card.no-padding {
	padding: 0;
}

.card-nav {
	max-width: 300px;
	border-right: 1px solid #999999;
}

.card-body {
	padding: 0 1rem;
}

.list-item {
	padding: 0.5rem;
	cursor: pointer;
}

.list-item a {
	color: #2c3e50;
}

.list-item a.active {
	color: #3eaf7c;
	font-weight: bold;
}
</style>
