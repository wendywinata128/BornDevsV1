import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { IconName } from '@fortawesome/free-brands-svg-icons'
// import { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {gsap} from 'gsap';

Vue.config.productionTip = false

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$gsap = gsap;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
