// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'iview/dist/styles/iview.css';
import iView from 'iview';
import App from './App';
import router from './router';
import './styles/reset.css';
import './styles/styles.scss';
import './styles/resetIview.scss';

Vue.use(iView);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});