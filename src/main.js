import Vue from 'vue'
import App from './App.vue'
import ageFilter from "./utils/filter";

Vue.config.productionTip = false;
Vue.filter('ageFilter', ageFilter);

new Vue({
  render: h => h(App),
}).$mount('#app')
