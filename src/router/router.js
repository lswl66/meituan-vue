import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: r => require.ensure([], () => r(require('../page/App.vue')), 'app')
    },
    {
      path: '/shopdetails',
      component: r => require.ensure([], () => r(require('../page/ShopDetails.vue')), 'ShopDetails')
    }
  ]
}]
