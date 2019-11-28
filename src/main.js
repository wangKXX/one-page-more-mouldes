import Vue from 'vue';
import router from './router';
import store from './store'
import App from './App.vue';
Vue.config.productionTip = false;
console.log(router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

