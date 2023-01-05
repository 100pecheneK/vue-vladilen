<template>
	<div>
		<div class="card">
			<h2 class="card-title">
				{{ title }}
				<AppStatus :type="status" />
			</h2>
			<p>
				<strong>
					<small>
						{{ date }}
					</small>
				</strong>
			</p>
			<button class="btn primary" @click="navigate">Посмотреть</button>
		</div>
	</div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import router from '../router'

export default {
	setup(props) {
		const navigate = () => {
			const id = props.task.id
			router.push('/' + id)
		}
		return {
			navigate,
			...props.task,
		}
	},
	props: ['task'],
	components: { AppStatus },
}
</script>
