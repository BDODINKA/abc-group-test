<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VTitle",
})
</script>

<style scoped>
.title {
  font-family: 'Yeseva One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFC700;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

</style>