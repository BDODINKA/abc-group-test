<template>
  <div :class="$style['wrapper']"></div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "QuestionPage"
})
</script>

<style module lang="scss">
.wrapper {
  background: white;
  height: 100vh;
  width: 100vw;
}
</style>