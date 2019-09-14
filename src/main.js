import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
