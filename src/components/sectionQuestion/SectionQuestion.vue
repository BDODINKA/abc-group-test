<template>
  <v-wrapper
      :class="$style['wrapper']"
      v-for="quest in questionData"
      :key="quest.question"
  >
    <v-progress-bar v-bind:progress="question*10"/>
    <p>{{ quest.question }}</p>
    <v-select
        v-if="typeof quest.answers[0] ===  'string' && quest.answers[0].indexOf('#')"
        :answers="[...quest.answers]"
    />
    <v-select-color
        v-if="!quest.answers[0].indexOf('#')"
        :colors="[...quest.answers]"
    />
    <v-select-btn
        v-else-if="typeof quest.answers[0] ===  'number'"
        :withLine="true"
        :data="[...quest.answers]"
    />


    <v-button
        v-bind:isDisabled="true"
        :class="$style['btn']"
    >Далее
    </v-button>
  </v-wrapper>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {questions} from "@/api/mocData/questions";


export default defineComponent({
  name: "VQuestion",
  data() {
    return {
      questions: questions,
      question: 0,
      quest: {},
      answers: []
    }
  },
  methods: {},
  computed: {
    questionData() {
      return this.questions.filter((value, index) => index === this.question)
    }
  }
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