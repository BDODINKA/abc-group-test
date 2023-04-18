<template>
  <div :class="$style['wrapper']">
    <div
        :class="$style['progress']"
        :style="className"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VProgressBar",
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    className() {
      return {width:`${this.progress}%`}
    }
  }
})
</script>

<style module lang="scss">
.wrapper{
  max-width: 90%;
  width: 100%;
  height: 11px;
  border-radius: 20px;
  background: grey;
  overflow: hidden;
  .progress{
    background: #3BDE7C;
    height: 100%;
  }
}
</style>