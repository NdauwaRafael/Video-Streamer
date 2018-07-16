import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/users/details'
import video from './modules/videos/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    modules: {
        user,
        video
    },
    state: {},
    mutations: {}
});

export default store
