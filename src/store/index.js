import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/store/modules/menu'
import contacts from '@/store/modules/contacts'
import group from '@/store/modules/group'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    menu,
    contacts,
    group
  }
})
