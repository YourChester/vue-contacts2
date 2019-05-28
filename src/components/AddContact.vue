<template>
  <div class="col col-10">
    <form class="col col-6"> 
      <div class="d-flex justify-content-between">
        <div class="form-group col-6">
          <label for="Name">Name</label>
          <input type="text" class="form-control" id="Name" placeholder="Name" name="name" v-model="name">
        </div>
        <div class="form-group col-6">
          <label for="birthday">Birthday</label>
          <input type="date" class="form-control" id="birthday" name="birthday" v-model="birthday">
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="form-group col-6">
          <label for="phone">Phone</label><button class="btn btn-primary ml-3" @click.prevent="addPhone()">+</button>
          <input
            v-for="(item, index) in phone"
            :key="index"
            type="text" 
            class="form-control mt-2" 
            id="phone" 
            placeholder="Phone"
            v-model="phone[index]"
          >
        </div>
        <div class="form-group col-6">
          <label for="email">Email</label><button class="btn btn-primary ml-3" @click.prevent="addEmail()">+</button>
          <input
            v-for="(item, index) in email"
            :key="index"
            type="text" 
            class="form-control mt-2" 
            id="email" 
            placeholder="Email"
            v-model="email[index]"
          >
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="form-group col-6">
          <label for="site">Site</label>
          <input type="text" class="form-control" id="site" placeholder="Site" name="site" v-model="site">
        </div>
        <div class="form-group col-6">
          <label for="email">Company</label>
          <input type="text" class="form-control" id="company" placeholder="Company" name="company" v-model="company">
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="form-group col-6">
          <label for="group">Group</label>
          <select class="form-control" id="group" v-model="group">
            <option
              v-for="(item, index) in groups"
              :key="index"
            >{{ item }}</option>
          </select>
        </div>
      </div>
      <button
        class="btn btn-primary ml-3"
        @click.prevent="saveContact()"
      >
        Save contact
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'AddContact',
  data() {
    return {
      name: '',
      phone: [''],
      email: [''],
      birthday: '',
      site: '',
      company: '',
      group: '',
      countPhone: 1,
      countEmail: 1
    }
  },
  computed: {
    ...mapGetters('group', [
      'groups'
    ])
  },
  methods: {
    ...mapActions('contacts', [
      'addContact'
    ]),
    addPhone() {
      if(this.countPhone == 4) {
        return 0
      }
      else {
        this.countPhone++
        this.phone.push('')
      }
    },
    addEmail() {
      if(this.countEmail == 4) {
        return 0
      }
      else {
        this.countEmail++
        this.email.push('')
      }
    },
    saveContact() {
      this.addContact({
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
      this.countPhone = 1
      this.countEmail = 1
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .form-group > .btn {
    padding: 0;
    height: 30px;
    width: 30px;
  }
</style>
