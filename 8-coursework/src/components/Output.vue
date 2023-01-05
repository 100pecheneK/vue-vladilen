<template>
	<h3 v-if="!outputs.length">Добавьте первый блок, чтобы увидеть результат</h3>
	<template v-for="({ type, value }, index) in outputs" :key="index">
		<component :is="components[type]" :value="value" />
	</template>
</template>

<script>
import Title from './outputComponents/Title.vue'
import Avatar from './outputComponents/Avatar.vue'
import Subtitle from './outputComponents/Subtitle.vue'
import Text from './outputComponents/Text.vue'

export default {
	props: ['outputs'],
	data() {
		return {
			components: {
				title: 'Title',
				avatar: 'Avatar',
				subtitle: 'Subtitle',
				text: 'Text',
			},
		}
	},
	components: { Title, Avatar, Subtitle, Text },
}
</script>
