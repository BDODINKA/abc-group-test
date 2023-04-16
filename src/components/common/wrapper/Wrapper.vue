<template>
  <section :class="$style.wrapper">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VWrapper"
})
</script>

<style module lang="scss">
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
}

</style>