export default {
  namespaced: true,
  state: {
    contactId: 0,
    showContact: false,
    contacts: []
  },
  getters: {
    contacts(state) {
      return state.contacts
    },
    contactId(state) {
      return state.contactId
    },
    showContact(state) {
      return state.showContact
    }
  },
  mutations: {
    inShowContact(state, index) {
      state.showContact = true
      state.contactId = index
    },
    outShowContact(state, index) {
      state.showContact = false
      state.contactId = index
    },
    addContact(state, payload) {
      state.contacts.push({
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        birthday: payload.birthday,
        site: payload.site,
        company: payload.company,
        group: payload.group
      })
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    editContact(state, payload) {
      state.contacts[payload.id] = {
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        birthday: payload.birthday,
        site: payload.site,
        company: payload.company,
        group: payload.group
      }
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    deleteContact(state, index) {
      state.contacts.splice(index, 1)
    },
    setContactsOfLocalStore(state, payload) {
      state.contacts = payload
    }
  },
  actions: {
    inShowContact(store, index) {
      store.commit('inShowContact', index)
    },
    outShowContact(store) {
      store.commit('outShowContact', 0)
    },
    addContact(store, payload) {
      store.commit('addContact', payload)
    },
    editContact(store, payload) {
      store.commit('editContact', payload)
    },
    deleteContact(store, index) {
      store.commit('deleteContact', index)
    },
    setContactsOfLocalStore(store, payload) {
      store.commit('setContactsOfLocalStore', payload)
    }

  }
}
