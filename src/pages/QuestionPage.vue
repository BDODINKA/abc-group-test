<template>
  <v-header
      :showBrain="true"
      :title="'тест на определение IQ'"
  />
  <main>
    <v-question/>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "QuestionPage",
})
</script>
