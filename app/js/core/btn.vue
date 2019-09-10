<template>
  <div :class="[btnClass, cname]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      btnClass: 'btn'
    }
  }
}
</script>
<style lang="scss">
@import "../../css/elements.scss";
.btn {
  @include btn
}
</style>
