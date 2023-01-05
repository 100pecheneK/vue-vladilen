<template>
	<div class="card">
		<slot name="title">No title</slot>
		<slot>No text</slot>
		<div v-if="$slots.footer">
			<hr />
			<slot name="footer"></slot>
		</div>
	</div>
</template>
