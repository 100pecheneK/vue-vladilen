<template>
	<div class='container column'>
		<div class='card card-w30'>
			<Form @onSubmit='onSubmit' />

			<Tree :outputs='outputs' @onDelete='onDelete' />
		</div>
		<div class='card card-w70'>
			<Output :outputs='outputs' />
		</div>
	</div>
	<Comments />
</template>

<script>
import Form from './components/Form.vue'
import Output from './components/Output.vue'
import Comments from './components/Comments.vue'
import Tree from './components/Tree.vue'

export default {
	data() {
		return {
			outputs: [
				{ type: 'title', value: 'Резюме Nickname' },
				{
					type: 'avatar',
					value:
						'https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png',
				},
				{ type: 'subtitle', value: 'Опыт работы' },
				{
					type: 'text',
					value:
						'главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь отвергает его существование), алкоголик, социопат, дедушка Морти. На момент начала третьего сезона ему 70 лет[1]. Рик боится пиратов, а его главной слабостью является некий - "Санчезиум". Исходя из того, что существует неограниченное количество вселенных, существует неограниченное количество Риков, герой сериала предположительно принадлежит к измерению С-137. В серии комикcов Рик относится к измерению C-132, а в игре «Pocket Mortys» — к измерению C-123[2]. Прототипом Рика Санчеза является Эмметт Браун, герой кинотрилогии «Назад в будущее»[3].',
				},
			],
		}
	},
	methods: {
		onSubmit(output) {
			this.outputs = [...this.outputs, output]
		},
		onDelete(index) {
			this.outputs = this.outputs.filter((_, i) => i !== index)
		},
	},
	components: { Form, Output, Comments, Tree },
}
</script>

<style>
.avatar {
	display: flex;
	justify-content: center;
}

.avatar img {
	width: 150px;
	height: auto;
	border-radius: 50%;
}
</style>
