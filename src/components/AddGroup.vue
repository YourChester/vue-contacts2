<template>
  <div class="col col-10">
    <form class="col col-6"> 
      <div class="d-flex justify-content-between">
        <div class="form-group col">
          <label for="Name">Name group</label>
          <input type="text" class="form-control" id="Name" placeholder="Name" name="name" v-model="name">
        </div>
      </div>
      <button
        class="btn btn-primary ml-3"
        @click.prevent="addNewGroup()"
      >
        Save group
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddGroup',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions('group', [
      'addGroup'
    ]),
    addNewGroup() {
      this.addGroup(this.name),
      this.name = ''
      this.$router.push('/group')
    }
  }
}
</script>

<style>
</style>
