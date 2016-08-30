import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API_ROOT = 'http://localhost:3000/api/'

export const User = Vue.resource(API_ROOT + 'user{/id}')