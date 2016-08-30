import api from '../api'
export const addUser = ({commit}) => {
    let data = {
        username: '王五',
        password: 'abc123',
        mobileNumber: '1234567890'
    }
    api.addUser(data).then(res => {
        console.log(res)
    }, res => {
        console.log(111)
        console.log(res)
    })
}
export const getUser = ({commit}) => {
    api.getUser().then(res => {
        if (res.ok) {
            console.log(res.data)
            commit('GET_USER_LIST', res.data)
        }
    }, res => {
        console.log(111)
        console.log(res)
    })
}