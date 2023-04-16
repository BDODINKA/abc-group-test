<template>
  <v-wrapper :class="$style['wrapper']">
    <p :class="$style['description']">
      Также по результатам теста
      вы получите подробные советы по определению наиболее перспективной для вашего типа интеллекта сферы деятельности,
      которая принесет вам скорейший финансовый результат.
    </p>
    <v-button
        styleBtn="colored"
        :class="$style['btn']"
    >Пройти тест
    </v-button>
  </v-wrapper>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VAdvice",
  components: {}

})
</script>

<style module lang="scss">
.wrapper {
  padding: 45px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white url("src/assets/brain2.png") no-repeat 50% 256px;

  .description {
    font-family: 'PT Serif', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;

    color: #272727;
  }

  .btn {
    margin-top: 209px;
  }
}

</style>