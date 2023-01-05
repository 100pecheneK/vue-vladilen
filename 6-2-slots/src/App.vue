<template>
	<div class="container pt-1">
		<div class="card">
			<h2>Slots</h2>
		</div>
		<List>
			<template #default="{ number, index }">
				<span style="color: red"
					><strong>{{ index }} - </strong>{{ number }}</span
				>
			</template>
		</List>
		<Block>
			<p>Lorem ipsum dolor sit.</p>

			<template #title>
				<h3>Lorem</h3>
			</template>
		</Block>
		<Block />
	</div>
</template>

<script>
import Block from './components/Block.vue'
import List from './components/List.vue'

export default {
	components: {
		Block,
		List,
	},
}
</script>
