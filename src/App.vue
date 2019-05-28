<template>
  <div id="app">
    <nav class="navbar navbar-light bg-primary">
      <a class="navbar-brand" href="/">
        <img src="./assets/contact.svg" width="30" height="30" class="d-inline-block align-top" alt="logo">
        Contacts
      </a>
    </nav>
    <div class="row m-5">
      <!-- Start Menu -->
      <div class="list-group col-2 munu">
        <router-link
          v-for="(item, index) in menu"
          :key="index"
          :to="item.url"
          tag="a"
          class="list-group-item list-group-item-action"
          active-class="active"
          exact
        >
          {{ item.text }}
        </router-link>
      </div>
      <!-- End menu -->
      <!-- Start main -->
      <router-view/>
      <!-- Ens main -->
      <ViewContact
        v-show="showContact"
        :item="contacts[contactId]"
      >
      </ViewContact>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ViewContact from '@/components/ViewContact'

export default {
  components: { ViewContact },
  name: 'App',
  beforeMount() {
    let contactsLocalstore = JSON.parse(localStorage.getItem('contacts') || '[{"name":"Рома","phone":["+380713860162","+780713860162"],"email":["kamrom4@gmail.com"],"birthday":"1976-10-01","site":"","company":"IronFloor","group":""},{"name":"Аня","phone":["+380713860161"],"email":["ajnura13@gmail.com"],"birthday":"1972-05-01","site":"","company":"","group":""},{"name":"Артур","phone":["+380713860165"],"email":["artykamenev@gmail.com","artkam799@gmail.com"],"birthday":"1999-12-17","site":"github/yourchester","company":"","group":""}]')
    let groupLocalstore = JSON.parse(localStorage.getItem('groups') || '["Friends","Colegs","Children"]')
    this.setContactsOfLocalStore(contactsLocalstore)
    this.setGroupsOfLocalstore(groupLocalstore)
  },
  computed: {
    ...mapGetters('menu', [
      'menu'
    ]),
    ...mapGetters('contacts', [
      'contacts',
      'contactId',
      'showContact'
    ])
  },
  methods: {
    ...mapActions('contacts', [
      'setContactsOfLocalStore'
    ]),
    ...mapActions('group', [
      'setGroupsOfLocalstore'
    ]),
  }
}
</script>

<style>
  .munu {
    z-index: 0;
  }

  .color {
    color: white;
  }
</style>
