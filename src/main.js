import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/css/startup.css';
import Echarts from './plugins/echarts';
import '../node_modules/echarts/map/js/china';

Vue.use(Echarts);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
