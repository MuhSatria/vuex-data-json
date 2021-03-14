import Vue from 'vue'
import Base from './Base.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
require('bootstrap')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Base)
}).$mount('#app')
