<template>
	<div class="container">
		<form class="card" @submit.prevent="onSubmit">
			<h1>Анкета на Vue разработчика!</h1>
			<Input
				:error="errors.name"
				:label="'Как тебя зовут?'"
				:placeholder="'Введи имя'"
				v-model:value.trim="name"
			/>
			<div class="form-control">
				<label for="age">Выбери возраст</label>
				<input
					placeholder="Введите возраст"
					type="number"
					id="age"
					max="70"
					v-model.number="age"
				/>
			</div>

			<div class="form-control">
				<label for="city">Твой город</label>
				<select id="city" v-model="sity">
					<option value=""></option>
					<option :value="value" v-for="{ value, text } in sities" :key="value">
						{{ text }}
					</option>
				</select>
			</div>

			<div class="form-checkbox">
				<span class="label">Готов к переезду в Токио?</span>
				<div class="checkbox" v-for="{ value, text } in relocates" :key="value">
					<label
						><input
							type="radio"
							v-model="relocate"
							:value="value"
							name="relocate"
						/>{{ text }}</label
					>
				</div>
			</div>

			<div class="form-checkbox">
				<span class="label">Что знаешь во Vue?</span>
				<div class="checkbox" v-for="{ value, text } in skills" :key="value">
					<label>
						<input
							type="checkbox"
							v-model="selectedSkills"
							:value="value"
							name="skills"
						/>{{ text }}
					</label>
				</div>
			</div>
			<div class="form-checkbox">
				<span class="label">Правила</span>
				<div class="checkbox">
					<label>
						<input type="checkbox" v-model="agree" name="agree" />Согласен
					</label>
				</div>
			</div>

			<button type="submit" class="btn primary">Отправить</button>
		</form>
	</div>
</template>

<script>
import Input from './components/Input.vue'

export default {
	data() {
		return {
			name: null,
			age: null,
			sities: [
				{ value: 'spb', text: 'Санкт-Петербург' },
				{ value: 'msk', text: 'Москва' },
				{ value: 'zkn', text: 'Казань' },
				{ value: 'nsk', text: 'Новосибирск' },
			],
			sity: null,
			relocates: [
				{ value: 'yes', text: 'Да' },
				{ value: 'no', text: 'Нет' },
			],
			relocate: null,
			skills: [
				{ value: 'vuex', text: 'Vuex' },
				{ value: 'cli', text: 'Vue CLI' },
				{ value: 'router', text: 'Vue Router' },
			],
			selectedSkills: [],
			agree: null,
			errors: {
				name: null,
			},
		}
	},
	methods: {
		onSubmit() {
			console.log(`this.name`, this.name)
			if (!this.isFormValid()) return
			console.log({
				name: this.name,
				age: this.age,
				sity: this.sity,
				relocate: this.relocate,
				selectedSkills: this.selectedSkills,
				agree: this.agree,
			})
		},
		isFormValid() {
			this.errors = {}
			let isValid = true
			if (!this.name) {
				this.errors = { ...this.errors, name: 'Имя обязательно' }
				isValid = false
			}
			return isValid
		},
	},
	components: { Input },
}
</script>

<style lang="scss">
.form-control {
	small {
		color: #e53935;
	}
	&--invalid {
		input {
			border-color: #e53935 !important;
		}
	}
}
</style>
