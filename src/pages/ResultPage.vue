<template>
  <v-header
      :showBrain="true"
      :title="'Готово!'"
  />
  <main>
    <v-result :time="10"/>
  </main>
  <v-footer :copyright="false"/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ResultPage",
})
</script>
