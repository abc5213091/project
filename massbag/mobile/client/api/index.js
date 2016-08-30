import { User } from './resource'

export default {
    getUser(){
        return User.get()
    },
    addUser(data){
        return User.save(data)
    }
}