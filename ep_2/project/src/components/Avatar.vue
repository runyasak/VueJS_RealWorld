<template lang="html">
  <img class="image avatar" :class="size" src="../assets/profile_avatar.jpg" alt="Image">
</template>

<script>
export default {
  props: ['avatar_size'],
  computed: {
    size () {
      return 'is-' + this.avatar_size + 'x' + this.avatar_size
    }
  }
}
</script>

<style lang="css" scoped>
  .nav-item img {
    max-height: initial;
  }
</style>
