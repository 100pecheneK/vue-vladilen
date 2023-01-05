const app = {
  data: () => ({
    title: 'Vue 3',
  }),
  methods: {
    changeTitle() {
      this.title = 'Changed title'
    },
  },
  // template: `
  //   <div class='card center'>
  //     <h1>{{title}}</h1>
  //     <button className="btn" @click="changeTitle">Edit</button>
  //   </div>
  // `,
  render() {
    return Vue.h(
      'div',
      {
        class: 'card center',
      },
      [
        Vue.h('h1', {}, this.title),
        Vue.h('button', { class: 'btn', onClick: this.changeTitle }, 'Change'),
      ]
    )
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
}
const app2 = {
  data: () => ({
    title: 'Hello App 2',
  }),
}

const apps = [
  [app, '#app'],
  [app2, '#app2'],
]

apps.forEach(([a, el]) => Vue.createApp(a).mount(el))
