<template>
  <div>
    <input type="radio"/>
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VSelect"
})
</script>

<style module lang="scss">

</style>