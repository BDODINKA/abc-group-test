<template>
  <v-header/>
  <main>
    <v-preview/>
    <v-quotes/>
    <v-advice/>
    <v-recommendations/>
  </main>
  <v-footer/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ResultPage"
})
</script>
