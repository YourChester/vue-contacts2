<template>
  <div class="col-10">
    <div
      v-for="(item, index) in groups"
      :key="index"
    >
      <small id="emailHelp" class="form-text text-muted">
        {{ item }}
      </small>
      <table class="table">
        <tbody>
          <tr
            v-for="(contact, index) in newContactsList(item)"
            :key="index"        
          >
            <td>{{ contact.name }}</td>
            <td>{{ contact.phone[0] }}</td>
            <td>{{ contact.email[0] }}</td>
            <td>{{ contact.birthday }}</td>
            <td>{{ contact.site }}</td>
            <td>{{ contact.company }}</td>
          </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GroupContact',
  computed: {
    ...mapGetters('group', [
      'groups'
    ]),
    ...mapGetters('contacts', [
      'contacts'
    ])
  },
  methods: {
    newContactsList(filters) {
      return this.contacts.filter(item => item.group === filters)
    }
  }
}
</script>

<style>

</style>
