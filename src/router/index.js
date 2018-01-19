import Vue from 'vue'
import Router from 'vue-router'

const Welcome = resolve => {
  require.ensure(['@/components/Welcome'], () => {
    resolve(require('@/components/Welcome'))
  })
}
const MainTitle = resolve => {
  require.ensure(['@/components/MainTitle'], () => {
    resolve(require('@/components/MainTitle'))
  })
}
const LetConst = resolve => {
  require.ensure(['@/components/LetConst'], () => {
    resolve(require('@/components/LetConst'))
  })
}
const Arrow = resolve => {
  require.ensure(['@/components/Arrow'], () => {
    resolve(require('@/components/Arrow'))
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      components: {
        default: Welcome,
        MainTitle
      }
    },
    {
      path: '/let-const',
      name: 'LetConst',
      components: {
        default: LetConst,
        MainTitle
      }
    },
    {
      path: '/arrow',
      name: 'Arrow',
      components: {
        default: Arrow,
        MainTitle
      }
    }
  ]
})
