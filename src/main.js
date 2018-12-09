import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
import http from './assets/js/http'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// Use vue-resource package
Vue.use(VueRouter);
// Vue.use(axios);
Vue.prototype.$http = http

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

