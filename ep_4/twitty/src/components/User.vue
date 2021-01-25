<template>
  <div class="ui segment">
    User {{ $route.params.id }}
    <profile-detail v-if="data" :profile="data"></profile-detail>
  </div>
</template>

<script>
import { User } from '../services'
import ProfileDetail from './ProfileDetail'

export default {
  components: {
    ProfileDetail
  },
  data () {
    return {
      data: null
    }
  },
  created () {
    this.reload()
  },
  watch: {
    $route: 'reload'
  },
  methods: {
    reload () {
      console.log('test')
      User.subscribe(this.$route.params.id, (data) => {
        this.data = data
      })
      console.log(this.data)
    }
  }
}
</script>