<template>
  <div>
    <div class="ui segment">
      <h3 class="ui header">Edit Profile</h3>
      <profile-form v-model="profile" @save="save" @cancel="back"></profile-form>
      {{ profile }}
    </div>
  </div>
</template>

<script>
import ProfileForm from './ProfileForm'
import { Me } from '../services'

export default {
  components: {
    ProfileForm
  },
  data: () => ({
    profile: {
      name: '',
      description: ''
    }
  }),
  created () {
    Me.get()
      .then((data) => {
        this.profile = data
      })
  },
  methods: {
    save () {
      Me.set(this.profile)
        .then(() => {
          this.back()
        })
    },
    back () {
      this.$router.push('/profile')
    }
  }
}
</script>