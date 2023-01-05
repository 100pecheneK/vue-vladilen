<template>
	<AppPage back title="Помощь">
		<QuestionItem
			v-for="(question, i) in questions"
			:key="i"
			:question="question"
		/>
	</AppPage>
</template>
<script>
import AppPage from '@/components/ui/AppPage.vue'
import QuestionItem from '@/components/question/QuestionItem.vue'
export default {
	setup() {
		const questions = [
			{
				title: 'WHAT?',
				text: 'TAHW',
			},
			{
				title: 'DONT CLICK ME!!!',
				text: '(」°ロ°)」',
			},
			{
				title: 'Нарисуй меня как одну из твоих француженок',
				text: '∠( ᐛ 」∠)＿',
			},
		]
		return {questions}
	},
	components: {AppPage, QuestionItem},
}
</script>
