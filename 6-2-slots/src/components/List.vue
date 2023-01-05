<template>
	<div class="card">
		<ul>
			<li v-for="(number, index) in 5" :key="number">
				<slot :number="number" :index="index" />
			</li>
		</ul>
	</div>
</template>
