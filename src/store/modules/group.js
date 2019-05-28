export default {
  namespaced: true,
  state: {
    groups: []
  },
  getters: {
    groups(state) {
      return state.groups
    }
  },
  mutations: {
    addGroup(state, name) {
      state.groups.push(name)
      localStorage.setItem('groups', JSON.stringify(state.groups))
    },
    setGroupsOfLocalstore(state, payload) {
      state.groups = payload
    }
  },
  actions: {
    addGroup(store, name) {
      store.commit('addGroup', name)
    },
    setGroupsOfLocalstore(store, payload) {
      store.commit('setGroupsOfLocalstore', payload)
    }
  }
}
