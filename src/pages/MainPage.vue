<template>
  <v-header/>
  <main>
    <v-preview></v-preview>
    <v-quotes></v-quotes>
    <v-advice></v-advice>
    <v-recommendations></v-recommendations>
  </main>
  <v-footer/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ResultPage"
})
</script>

<style scoped>

</style>