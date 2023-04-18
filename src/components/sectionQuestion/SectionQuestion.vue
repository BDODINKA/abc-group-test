<template>
  <v-wrapper :class="$style['wrapper']">
    <v-progress-bar progress="10"/>
    <v-select>Вариант</v-select>
    <v-button
        isDisabled="true"
        :class="$style['btn']"
    >Далее
    </v-button>
  </v-wrapper>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: "VQuestion",

})
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background: url("src/assets/bg2.webp") no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;

  .btn {

  }
}
</style>