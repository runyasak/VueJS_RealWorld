<template lang="html">
  <div class="columns is-multiline is-mobile">
    <div class="profile-detail box column is-8 is-offset-2">
      <div class="columns is-multiline is-mobile">
        <label-text :text="'Username'"></label-text>
        <field-text :text="'runyasak'"></field-text>
        <label-text :text="'Name'"></label-text>
        <field-text :text="'Runyasak Chaengnaimuang'"></field-text>
        <label-text :text="'Email'"></label-text>
        <field-text :text="'world@jadi.com'"></field-text>
        <label-text :text="'Birthday'"></label-text>
        <field-text :text="'29.10.1994'"></field-text>
        <label-text :text="'Phone Number'"></label-text>
        <field-text :text="'086-000-0000'"></field-text>
        <div class="column is-2 is-offset-5">
          <a class="button is-success is-outlined column">
            Update
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FieldText from './FieldText'
import LabelText from './LabelText'

export default {
  components: { FieldText, LabelText }
}
</script>

<style lang="scss" scoped>
  .profile-detail.box {
    padding: 40px 0;
  }
  .button {
    padding: 4px 0px;
    width: 80px;
    margin: 0 auto;
  }
</style>
