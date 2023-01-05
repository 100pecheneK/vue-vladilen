<template>
	<div class="card">
		<p>
			Название: <strong>{{ name }}</strong>
		</p>
		<p>
			Версия: <strong>{{ version }}</strong>
		</p>
		<p>
			Версия x2: <strong>{{ doubleVersion }}</strong>
		</p>
		<pre>attrs: {{ attrs }}</pre>
		<button class="btn warning" @click="changeVersion">changeVersion</button>
		<slot name="footer">
			<p>No footer</p>
		</slot>
	</div>
</template>
<script>
import { computed } from 'vue'
export default {
	props: ['name', 'version'],
	emits: ['change-version'],
	setup(props, context) {
		function changeVersion() {
			context.emit('change-version', 200)
		}
		return {
			attrs: context.attrs,
			changeVersion,
			doubleVersion: computed(() => props.version * 2),
		}
	},
}
</script>
