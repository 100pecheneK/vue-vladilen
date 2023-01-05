<template>
	<div class="modal-backdrop" @click="$emit('close')">
		<div class="modal">
			<h3>Header</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
				perspiciatis fuga reiciendis blanditiis deserunt eaque ad accusamus
				itaque, quidem quisquam?
			</p>
		</div>
	</div>
</template>

<script>
export default {
	emits: ['close'],
}
</script>
