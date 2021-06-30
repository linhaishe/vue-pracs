import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  mutations: {
    setUser(state, user) {
      state.userInfo = user;
    },
  },
  actions: {},
  modules: {},
});
