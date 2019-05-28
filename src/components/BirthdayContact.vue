<template>
  <div class="col-10">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(contact, index) in sortBirthday()"
          :key="index"        
        >
          <td>{{ contact.name }}</td>
          <td>{{ contact.phone[0] }}</td>
          <td>{{ contact.email[0] }}</td>
          <td>{{ contact.birthday }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BirthdayContacts',
  computed: {
    ...mapGetters('contacts', [
      'contacts'
    ])
  },
  methods: {
    sortBirthday() {
      let date = new Date
      let day = date.getDate()
      let month = date.getMonth()
      let sortArr = this.contacts
      let buff
      let buffId, buffArr1, buffArr2
      for(let i = 0; i < sortArr.length-1; i++) {
        for(let j = 0; j < sortArr.length-1; j++) {
          let first = sortArr[j].birthday.split('-')
          let second = sortArr[j+1].birthday.split('-')
          if(+first[0] > +second[0]) {
            if(+first[1] > +second[1]) {
              buff = sortArr[j]
              sortArr[j] = sortArr[j+1]
              sortArr[j+1] = buff
            }
            else {
              continue
            }
          }
          else if(+first[0] < +second[0]) {
            if(+first[1] > +second[1]) {
              buff = sortArr[j]
              sortArr[j] = sortArr[j+1]
              sortArr[j+1] = buff
            }
            else {
              continue
            }
          }
        }
      }
      for(let i = 0; i < sortArr.length-1; i++) {
        let first = sortArr[i].birthday.split('-')
        if(+first[0] > +day) {
          if(+first[1] >= +month) {
            buffId = i+1
            break
          }
          else {
            continue
          }
        }
        else if(+first[0] < +day) {
          if(+first[1] > +month) {
            buffId = i+1
            break
          }
          else {
            continue
          }
        }
      }
      buffArr1 = sortArr.slice(0, buffId)
      buffArr2 = sortArr.slice(buffId, sortArr.length)
      sortArr = buffArr2.concat(buffArr1)
      return sortArr
    }
  }
}
</script>

<style>

</style>
