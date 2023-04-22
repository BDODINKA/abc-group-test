<template>
  <v-header
      :showBrain="true"
      :title="'Готово!'"
  />
  <main>
    <v-result/>
  </main>
  <v-footer/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ResultPage",

})
</script>
