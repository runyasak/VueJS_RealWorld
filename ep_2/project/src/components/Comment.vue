<template lang="html">
  <div class="box column is-6 is-offset-3">
    <article class="media">
      <div class="media-left">
        <avatar :avatar_size="64"></avatar>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{user_name}}</strong> <small>@{{user_name.toLowerCase()}}</small> <small>{{timeStamp}}m</small>
            <br>
              {{text}}
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            <a class="level-item">
              <span class="salmon icon is-small"><i class="fa fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="salmon icon is-small"><i class="fa fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="salmon icon is-small"><i class="fa fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  props: [ 'user_name', 'text', 'timeStamp' ],
  components: { Avatar }
}
</script>

<style lang="scss" scoped>
  .salmon {
    color: salmon;
  }
</style>
