import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        user
    }
})

export default store