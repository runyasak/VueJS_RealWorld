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
    <div class="ui segment"v-for="tweet in list">
      <img class="ui tiny circular image" v-if="tweet.user" :src="tweet.user.photo">
      <span v-if="tweet.user">{{ tweet.user.name }} </span> <br>
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
    users: {}
  }),
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
    User.list((list) => {
      this.users = list
      this.users = list.reduce((p, v, k) => {
        console.log(v)
        p[v.$id] = v
        return p
      }, {})
      console.log(this.users)
    })
  },
  computed: {
    list () {
      return this.tweets.map((tweet) => {
        /* LONG TERM */
        // return Object.assign({}, tweet, {user: this.users[tweet.owner]})
        return {
          ...tweet,
          user: this.users[tweet.owner]
        }
      })
    }
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