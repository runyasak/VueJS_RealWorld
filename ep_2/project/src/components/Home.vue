<template lang="html">
  <div class="comment-list columns is-multiline ">
      <comment v-for="(text, index) in textList"
              :user_name="user_name"
              :text="text"
              :timeStamp="timeStamp[index]"
      ></comment>
  </div>
</template>

<script>
import Comment from './Comment'

export default {
  props: [ 'user_name' ],
  components: { Comment },
  data () {
    return {
      textList: ['I love Vue.js.', 'This is my Twitty page'],
      timeStamp: [31, 55]
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment-list {
    margin: 0;
  }

  @media screen and (max-width:460px) {
    .comment-list {
      padding: 15px;
    }
  }
</style>
