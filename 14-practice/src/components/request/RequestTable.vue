<template>
	<h4 class="text-center" v-if="requests.length === 0">Заявок пока нет</h4>
	<table class="table" v-else>
		<thead>
			<tr>
				<th>#</th>
				<th>ФИО</th>
				<th>Телефон</th>
				<th>Сумма</th>
				<th>Статус</th>
				<th>Действие</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(request, i) in requests" :key="request.id">
				<td>{{ i + 1 }}</td>
				<td>{{ request.fio }}</td>
				<td>{{ request.phone }}</td>
				<td>{{ currency(request.amount) }}</td>
				<td>
					<AppStatus :type="request.status" />
				</td>
				<td>
					<router-link
						v-slot="{navigate}"
						custom
						:to="{name: 'Request', params: {id: request.id}}"
					>
						<button class="btn primary" @click="navigate">Открыть</button>
					</router-link>
				</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
import {currency} from '../../utils/currency.js'
import AppStatus from '../../components/ui/AppStatus.vue'
export default {
	props: ['requests'],
	setup() {
		return {
			currency,
			navigate: () => {},
		}
	},
	components: {AppStatus},
}
</script>
