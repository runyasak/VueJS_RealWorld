<template>
  <div class="ui basic segment">
    <div class="ui segment">
      <form class="ui form" @submit.prevent="post">
        <div class="field">
          <textarea v-model.trim="input">
        </div>
        <button class="ui blue button" :class="{'loading disabled': posting}">
          Post
        </button>
      </form>
    </div>
    <div class="ui segment"v-for="tweet in tweets">
      <img class="ui tiny circular image" v-if="findUserPhoto(tweet.owner)" :src="findUserPhoto(tweet.owner)">
      {{ findUserName(tweet.owner) }} <br>
      {{ tweet.content }} {{ tweet.timestamp | fromNow }}
    </div>
  </div>
</template>

<script>
import { Tweet, User } from '../services'

export default {
  data: () => ({
    input: '',
    posting: false,
    tweets: [],
    users: []
  }),
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
    User.list((list) => {
      this.users = list
    })
  },
  methods: {
    post () {
      if (!this.input) return
      this.posting = true
      Tweet.post(this.input)
        .then(() => {
          this.input = ''
          this.posting = false
        })
    },
    findUserName (id) {
      const x = this.users.find((it) => it.$id === id)
      console.log(x)
      return x ? x.name : ''
    },
    findUserPhoto (id) {
      const x = this.users.find((it) => it.$id === id)
      console.log(x)
      return x ? x.photo : ''
    }
  }
}
</script>

<style>
  .circular.image {
    width: 32px;
    height: 32px;
  }
</style>