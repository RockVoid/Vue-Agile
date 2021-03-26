import Vue from 'vue'
import App from './App.vue'

import store from '@/store.js';
import router from '@/routes/index.js';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
