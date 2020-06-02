import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    addItems(state, values) {
      state.data.push(values);
    }
  },
  getters: {
    getItems: state => {
      return state.data;
    }
  },
  actions: {},
  modules: {}
});
