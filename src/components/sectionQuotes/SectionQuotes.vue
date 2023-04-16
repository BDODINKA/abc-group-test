<template>
  <v-wrapper :class="$style.wrapper">
    <p :class="$style.description">
      Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
      но и выработать список рекомендаций для повышения этого показателя.
    </p>
  </v-wrapper>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VQuotes",

})
</script>

<style module lang="scss">
.wrapper {
  padding: 43px 29px 32px 24px;
  background: url("src/assets/image.webp") no-repeat;
  background-size: cover;

  .description {
    font-family: 'Yeseva One', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    position: relative;
    padding: 18px;

    &:before {
      content: open-quote;
      position: absolute;
      font-size: 80px;
      left: 0;
      top: 0;
    }

    &:after {
      content: close-quote;
      position: absolute;
      font-size: 80px;
      right: 0;
      bottom: 0;
    }

    quotes: '“' '“';
  }
}
</style>