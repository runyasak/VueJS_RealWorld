<template lang="html">
  <label class="text column is-3 is-offset-2">
    {{text.toUpperCase()}}
  </label>
</template>

<script>
export default {
  props: [ 'text' ]
}
</script>

<style lang="css" scoped>
  .text {
    font-size: 18px;
    text-align: end;
  }
</style>
