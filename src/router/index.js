import Vue from 'vue'
import Router from 'vue-router'
import ListContacts from '@/components/ListContacts'
import AddContact from '@/components/AddContact'
import EditContact from '@/components/EditContact'
import BirthdayContact from '@/components/BirthdayContact'
import GroupContact from '@/components/GroupContact'
import AddGroup from '@/components/AddGroup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListContacts',
      component: ListContacts
    },
    {
      path: '/contact/:id',
      name: 'EditContact',
      component: EditContact
    },
    {
      path: '/add',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/addgroup',
      name: 'AddGroup',
      component: AddGroup
    },
    {
      path: '/group',
      name: 'GroupContact',
      component: GroupContact
    },
    {
      path: '/birthday',
      name: 'BirthdayContact',
      component: BirthdayContact
    }
  ],
  mode: 'history'
})
