const state = {
    list:{}
}

const mutations = {
    GET_USER_LIST(state,data){
        state.list = data
    }
}

export default {
    state,
    mutations
}