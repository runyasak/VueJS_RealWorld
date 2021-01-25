<template>
  <div>
    <img v-if="profile.photo" :src="profile.photo" class="ui small circular image">
    <h4>Name:</h4> {{ profile.name | upper }}
    <h4>Description:</h4> {{ profile.description }}
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>

<style scoped>
  img.circular.image {
    width: 120px;
    height: 120px;
  }
</style>
