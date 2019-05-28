<template>
  <div class="main">
    <div class="card showContact">
      <nav class="navbar navbar-light bg-primary">
        <div class="navbar-brand">
          <img src="../assets/person.png" width="30" height="30" class="d-inline-block align-top" alt="logo">
          {{ item.name }}
        </div>
        <div @click="outShowContact()" class="navbar-brand click">
          <img src="../assets/close.svg" width="30" height="30" class="d-inline-block align-top" alt="logo">
        </div>
      </nav>
      <div class="d-flex flex-column m-3">
        <div class="d-flex">
          <div class="m-2">Birthday: </div>
          <div class="m-2">
            <p>{{ item.birthday }}</p>
          </div>
        </div>
        <div class="d-flex">
          <div class="m-2">Phone: </div>
          <div class="m-2">
            <p
              v-for="(phone, index) in item.phone"
              :key="index"
            >
              {{ phone }}
            </p>
          </div>
        </div>
        <div class="d-flex">
          <div class="m-2">Email: </div>
          <div class="m-2">
            <p
              v-for="(email, index) in item.email"
              :key="index+1"
            >
              {{ email }}
            </p>
          </div>
        </div>
        <div class="d-flex">
          <div class="m-2">Site: </div>
          <div class="m-2">
            <p>{{ item.site }}</p>
          </div>
        </div>
        <div class="d-flex">
          <div class="m-2">Company: </div>
          <div class="m-2">
            <p>{{ item.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ViewContact',
  props: ['item', 'close'],
  methods: {
    ...mapActions('contacts', [
      'outShowContact'
    ])
  }
}
</script>

<style>
  .main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.39);
  }

  .showContact {
    position: absolute;
    width: 350px;
    top: 25%;
    left: 42%;
  }

  .click {
    cursor: pointer;
  }
</style>