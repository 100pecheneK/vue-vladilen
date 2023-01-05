Vue.createApp({
  data: () => ({
    html: '<h1>MEGA TITLE</h1>',
    title: 'I am Title',
    person: {
      firstName: 'Misha',
      lastName: 'Pritykin',
      age: 19,
    },
    numbers: [1, 2, 3, 4, 5, 6],
  }),
  methods: {
    onNumberDelete(numberIndex) {
      this.numbers = [
        ...this.numbers.slice(0, numberIndex),
        ...this.numbers.slice(numberIndex + 1),
      ]
    },
    addNumber() {
      this.numbers = [this.$refs.numberInput.value, ...this.numbers]
      this.$refs.numberInput.value = ''
    },
    log(number){
      console.log(number)
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(number => number % 2 === 0)
    },
  },
}).mount('#app')
