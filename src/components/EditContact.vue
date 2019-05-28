<template>
  <div class="col col-10">
    <form class="col col-6"> 
      <div class="d-flex justify-content-between">
        <div class="form-group col-6">
          <label for="Name">Name</label>
          <input
            v-model="name"
            type="text" class="form-control" 
            id="Name" 
            placeholder="Name" 
            name="name"
          >
        </div>
        <div class="form-group col-6">
          <label for="birthday">Birthday</label>
          <input
            v-model="birthday"
            type="date" 
            class="form-control" 
            id="birthday" 
            name="birthday" 
          >
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="form-group col-6">
          <label for="phone">Phone</label><button class="btn btn-primary ml-3" @click.prevent="addPhone()">+</button>
          <input
            v-for="(item, index) in phone"
            :key="index"
            v-model="phone[index]"
            type="text" 
            class="form-control mt-2" 
            id="phone" 
            placeholder="Phone"
          >
        </div>
        <div class="form-group col-6">
          <label for="email">Email</label><button class="btn btn-primary ml-3" @click.prevent="addEmail()">+</button>
          <input
            v-for="(item, index) in email"
            :key="index"
            v-model="email[index]"
            type="text" 
            class="form-control mt-2" 
            id="email" 
            placeholder="Email"
          >
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="form-group col-6">
          <label for="site">Site</label>
          <input 
            v-model="site"
            type="text" 
            class="form-control" 
            id="site" 
            placeholder="Site"
            name="site" 
          >
        </div>
        <div class="form-group col-6">
          <label for="email">Company</label>
          <input 
            v-model="company"
            type="text" 
            class="form-control" 
            id="company" 
            placeholder="Company" 
            name="company"
          >
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="form-group col-6">
          <label for="group">Group</label>
          <select 
            v-model="group"
            class="form-control" 
            id="group"
          >
            <option
              v-for="(item, index) in groups"
              :key="index"
            >{{ item }}</option>
          </select>
        </div>
      </div>
      <button
        class="btn btn-primary"
        @click.prevent="saveContact()"
      >
        Save contact
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EditContact',
  beforeMount() {
    this.name = this.contacts[this.$route.params.id].name,
    this.phone = this.contacts[this.$route.params.id].phone,
    this.email = this.contacts[this.$route.params.id].email,
    this.birthday = this.contacts[this.$route.params.id].birthday,
    this.site = this.contacts[this.$route.params.id].site,
    this.company = this.contacts[this.$route.params.id].company,
    this.group = this.contacts[this.$route.params.id].group,
    this.countPhone = this.contacts[this.$route.params.id].phone.length,
    this.countEmail = this.contacts[this.$route.params.id].email.length
  },
  data() {
    return {
      name: '',
      phone: [''],
      email: [''],
      birthday: '',
      site: '',
      company: '',
      group: '',
      countPhone: 0,
      countEmail: 0 
    }
  },
  computed: {
    ...mapGetters('contacts', [
      'contacts'
    ]),
    ...mapGetters('group', [
      'groups'
    ]),
    setPhone() {
      this.phone = this.contacts[this.$route.params.id].phone

    }
  },
  methods: {
    ...mapActions('contacts', [
      'editContact'
    ]),
    saveContact() {
      this.editContact({
        id: this.$route.params.id,
        name: this.name,
        phone: this.phone,
        email: this.email,
        birthday: this.birthday,
        site: this.site,
        company: this.company,
        group: this.group
      })
      this.name = ''
      this.phone = ['']
      this.email = ['']
      this.birthday = ''
      this.site = ''
      this.company = ''
      this.group = ''
      this.$router.push('/')
    },
    addPhone() {
      if(this.contacts[this.$route.params.id].phone.length == 4) {
        return 0
      }
      else {
        this.phone.push('')
      }
    },
    addEmail() {
      if(this.contacts[this.$route.params.id].email.length == 4) {
        return 0
      }
      else {
        this.email.push('')
      }
    },
    changeName() {
      this.name = event.target.value
    },
    changeBirthday() {
      this.birthday = event.target.value
    },
    changePhone(index) {
      this.phone[index] = event.target.value
    },
    changeEmail(index) {
      this.email[index] = event.target.value
    },
    changeCompany() {
      this.company = event.target.value
    },
    changeSite() {
      this.site = event.target.value
    },
    changeGroup() {
      this.group = event.target.value
    }
  }
}
</script>

<style>

</style>
