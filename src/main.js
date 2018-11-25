import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// Use vue-resource package
Vue.use(VueRouter);
Vue.use(axios);

Vue.config.productionTip = false

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

