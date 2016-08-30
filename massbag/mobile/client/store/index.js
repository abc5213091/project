import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const state = {
    count: 0,
    user:{}
}

const mutations = {
    INCREMENT(state) {
        state.count++
    },
    GET_USER_LIST(state,data){
        state.user = data
    }
}

const actions = {
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 200)

        let data = {
            username:'王五',
            password:'abc123',
            mobileNumber:'1234567890'
        }
        api.addUser(data).then(res => {
            console.log(res)
        }, res => {
            console.log(111)
            console.log(res)
        })
    },
    getUser({commit}) {
        api.getUser().then(res => {
            if(res.ok){
                console.log(res.data)
                commit('GET_USER_LIST',res.data)
            }
        }, res => {
            console.log(111)
            console.log(res)
        })
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store