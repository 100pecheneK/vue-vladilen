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
import { computed, inject, toRefs } from 'vue'
export default {
	emits: ['change-version'],
	setup(_, context) {
		const framework = inject('framework')
		function changeVersion() {
			context.emit('change-version', 100)
		}
		return {
			attrs: context.attrs,
			...toRefs(framework),
			changeVersion,
			doubleVersion: computed(() => framework.version * 2),
		}
	},
}
</script>
