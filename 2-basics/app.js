const App = {
  data() {
    return {
      inputPlaceholder: 'Type smth...',
      inputValue: '',
      title: 'Notes',
      notes: [],
      egg: 'ТЫ ЧТО, САМЫЙ УМНЫЙ, ААААА 🧐??? ВОТ И ОБНОВЛЯЙ СТРАНИЦУ ТЕПЕРЬ!!!',
      isEggShown: false,
      // home work
      deleteTimer: 5,
      deleteInterval: null,
      isAutoDelete: false,
      isDeletePardon: true,
    }
  },
  methods: {
    onNoteAdd() {
      if (!this.inputValue.trim()) return
      this.notes = [this.inputValue, ...this.notes]
      this.inputValue = ''
    },
    onDeleteNote(index, event) {
      this.notes = [
        ...this.notes.slice(0, index),
        ...this.notes.slice(index + 1),
      ]
    },
    // home work
    onClearAll() {
      if (!this.deleteInterval) {
        this.title = `Notes explode after ${this.deleteTimer} seconds 💥`
        this.deleteInterval = setInterval(() => {
          this.deleteTimer--
          this.title = `Notes explode after ${this.deleteTimer} seconds 💥`
        }, 1000)
      } else {
        this.reInitDeleteInterval()
      }
    },
    // home work
    reInitDeleteInterval() {
      clearInterval(this.deleteInterval)
      this.deleteInterval = null
      this.deleteTimer = 5
      this.isDeletePardon = true
      this.title = 'Notes'
    },
  },
  computed: {
    totalNotesAmount() {
      return this.notes.length
    },
    totalNotesAmountX2() {
      return this.notes.length * 2
    },
    titleColor() {
      const l = this.notes.length * 4 <= 50 ? this.notes.length * 4 : 50
      return `hsl(0deg, 100%, ${l}%)`
    },
  },
  watch: {
    inputValue(value) {
      if (value === 'smth...') {
        this.isEggShown = true
      }
    },
    // home work
    deleteTimer(value) {
      if (value < 0) {
        this.reInitDeleteInterval()
        this.notes = []
        return
      }
      if (this.deleteTimer === 0) {
        this.title = '💥BOOM💥'
        return
      }
    },
    // home work
    notes(value) {
      if (value.length * 4 >= 50 && !this.deleteInterval) {
        this.onClearAll()
        this.isAutoDelete = true
        this.isDeletePardon = false
      } else if (value.length * 4 < 50 && this.deleteInterval && this.isAutoDelete) {
        this.reInitDeleteInterval()
        this.isAutoDelete = false
      }
    },
  },
}

const app = Vue.createApp(App)

app.mount('#app')
