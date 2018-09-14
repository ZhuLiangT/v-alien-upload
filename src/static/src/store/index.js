/**
 * Created by zhuliang on 2018/9/6.
 * 组装并导出store
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import login from './modules/mainPage';

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    // 在这里添加自己的vuex模块
    login,
  },
  strict: debug,
});