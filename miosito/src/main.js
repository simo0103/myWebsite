// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(vueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
