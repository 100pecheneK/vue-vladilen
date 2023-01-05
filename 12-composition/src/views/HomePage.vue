<template>
	<Alert v-if="alert" title="AAAA HELP ME" type="danger" @close="close" />
	<div class="card">
		<h1>{{ title }} - {{ number }} ({{ doubleNumber }})</h1>
		<hr />
		<p>
			Название: <strong>{{ framework.name }} || {{ name }}</strong>
		</p>
		<p>
			Версия: <strong>{{ framework.version }} || {{ version }}</strong>
		</p>
		<div class="form-control">
			<input type="number" ref="textInput" />
		</div>
		<hr />
		<div class="form-control">
			First name: {{ firstName }}
			<input type="text" v-model="firstName" />
		</div>
		<hr />
		<div class="form-control">
			First name: {{ personForm.firstName }}
			<input type="text" v-model="personForm.firstName" />
			Last name: {{ personForm.lastName }}
			<input type="text" v-model="personForm.lastName" />
		</div>

		<button class="btn" @click="changeInfo">Изменить</button>
	</div>
	<FrameworkInfo :name="name" :version="version" @change-version="changeVersion" class="test-attrs">
		<template #footer>
			<p>this is slot footer</p>
		</template>
	</FrameworkInfo>
	<FrameworkInfo2 @change-version="changeVersion" class="test-attrs">
		<template #footer>
			<p>this is slot footer</p>
		</template>
	</FrameworkInfo2>
</template>

<script>
import {
	ref,
	reactive,
	toRefs,
	computed,
	watch,
	provide,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
} from 'vue'
import Alert from '../components/Alert.vue'
import FrameworkInfo from '../components/FrameworkInfo.vue'
import FrameworkInfo2 from '../components/FrameworkInfo2.vue'
import { useAlert } from '../hooks/alert'

export default {
	setup() {
		const title = ref('Vue Composition Api')
		const number = ref(1)
		const doubleNumber = computed(() => number.value * 2)
		const textInput = ref(null)
		const firstName = ref('')
		const personForm = reactive({
			firstName: '',
			lastName: '',
		})
		const framework = reactive({
			name: 'VueJS',
			version: 3,
		})
		console.log('created')

		onBeforeMount(() => {
			console.log('onBeforeMount')
		})
		onMounted(() => {
			console.log('onMounted')
		})

		onBeforeUpdate(() => {
			console.log('onBeforUpdate')
		})
		onUpdated(() => {
			console.log('onUpdated')
		})
		onBeforeUnmount(() => {
			console.log('onBeforeUnmount')
		})
		onUnmounted(() => {
			console.log('onUnmounted')
		})

		function changeInfo() {
			framework.name = 'Vue JS !!!'
			framework.version = +textInput.value.value || 1
			number.value = 4
			title.value = title.value.toUpperCase()
		}
		function changeVersion(version) {
			framework.version = version
		}

		watch(doubleNumber, (newValue, oldValue) => {
			console.log(newValue, oldValue)
		})
		watch([title, framework], (newValues, oldValues) => {
			console.log(newValues, oldValues)
		})
		provide('framework', framework)
		return {
			title,
			number,
			textInput,
			doubleNumber,
			...toRefs(framework),
			framework,
			changeInfo,
			firstName,
			personForm,
			changeVersion,
			...useAlert(true)
		}
	},
	components: { FrameworkInfo, FrameworkInfo2, Alert },
}
</script>
