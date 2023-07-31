import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

import about from './about'

Vue.use(Vuex)

const persistedDataState = createPersistedState({
  paths: ["about"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    about: {
      namespaced: true,
      ...about,
    }
  }
});
