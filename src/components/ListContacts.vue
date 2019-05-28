<template>
  <div class="col-10">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Site</th>
          <th>Company</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(contact, index) in contacts"
          :key="index"        
        >
          <td>{{ contact.name }}</td>
          <td>{{ contact.phone[0] }}</td>
          <td>{{ contact.email[0] }}</td>
          <td>{{ contact.birthday }}</td>
          <td>{{ contact.site }}</td>
          <td>{{ contact.company }}</td>
          <td  class="d-flex justify-content-between">
            <button class="btn" @click="contactId(index)"><img src="../assets/info.svg" alt="info"></button>
            <router-link
              :to="`/contact/${index}`"
              class="btn" 
              tag="button"
            >
              <img src="../assets/edit.svg" alt="info">
            </router-link>
            <button class="btn" @click="deleteContact(index)"><img src="../assets/delete.svg" alt="delete"></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListConatcts',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('contacts', [
      'contacts'
    ])
  },
  methods: {
    ...mapActions('contacts', [
      'inShowContact',
      'deleteContact'
    ]),
    contactId(index) {
      this.inShowContact(index)
    }
  }
}
</script>

<style>
</style>
