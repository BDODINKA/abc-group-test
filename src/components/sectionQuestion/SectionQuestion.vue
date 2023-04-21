<template>
  <v-wrapper
      :class="$style['wrapper']"
      v-if="wait"
  >
    <v-spinner/>
  </v-wrapper>
  <v-wrapper
      :class="$style['wrapper']"
      v-for="quest in questionData"
      :key="quest.question"
      v-else
  >
    <v-progress-bar v-bind:progress="progress"/>
    <p>{{ quest.question }}</p>
    <img
        v-if="quest.img"
        :src="quest.img"
        alt="www"
    />
    <v-select
        v-if="typeof quest.answers[0] ===  'string' && quest.answers[0].indexOf('#')"
        :answers="[...quest.answers]"
        @update:model-value="radioValue"
    />

    <v-select-btn
        v-else-if="typeof quest.answers[0] ===  'number'"
        :withLine="true"
        :data="[...quest.answers]"
        @update:model-value="radioValue"
    />
    <v-select-color
        v-else
        :colors="[...quest.answers]"
        @update:model-value="radioValue"
    />

    <div>PICKED:{{ input }}</div>
    <v-button
        v-bind:isDisabled="!input"
        :class="$style['btn']"
        :style-btn="'colored'"
        @click="nextQuestion"
    >Далее
    </v-button>
  </v-wrapper>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {questions} from "@/api/mocData/questions";
import router from "@/router";
import VSpinner from "@/components/common/spinner/Spinner.vue";


export default defineComponent({
  name: "VQuestion",
  components: {VSpinner},
  data() {
    return {
      questions: questions,
      currentQuestion: 0,
      quest: {},
      answers: [] as Array<string>,
      input: '',
      wait: false,
    }
  },
  methods: {
    radioValue(e: any) {
      this.input = e
    },
    nextQuestion() {
      if (this.questions.length - 1 !== this.answers.length) {
        this.answers.push(this.input)
        this.input = ''
        this.currentQuestion++
      } else {
        this.answers.push(this.input)
        this.wait = true
        setTimeout(() => {
          router.push('/result')
        }, 6000)
      }
    },
  },
  computed: {
    questionData() {
      return this.questions.filter((value, index) => index === this.currentQuestion)
    },
    progress() {
      return this.currentQuestion * 10
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