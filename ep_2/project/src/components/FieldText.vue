<template lang="html">
  <div class="field-text column is-5">
    <div class="text">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'text' ]
}
</script>

<style lang="css" scoped>
  .field-text {
    text-align: start;
    font-size: 18px;
  }
  .text {
    border-bottom: 2px solid salmon;
    padding-left: 10px;
  }
</style>
