import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/users/details'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    modules: {
        user
    },
    state: {},
    mutations: {}
});

export default store
