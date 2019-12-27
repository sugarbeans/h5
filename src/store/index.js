import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action'
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions
});
const state = {
  isShowMask: false,

  isLogin: false,
  username: null,
  scale: {}
}