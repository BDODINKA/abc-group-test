<template>
  <v-wrapper :class="$style['wrapper']">
    <p :class="$style['title']">Пройдите точный и быстрый</p>
    <v-title>Тест на определение iq</v-title>
    <V-Button
        styleBtn="colored"
        isDisabled="true"
    >
      Пройти тест
    </V-Button>
    <p>
      И получите рекомендации
      по развитию своего интеллекта
      и улучшению финансового благосостояния и личной жизни
    </p>
    <V-ScrollBtn>Подробнее</V-ScrollBtn>
  </v-wrapper>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VPreview",

})
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("src/assets/Bg1.webp") no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 40px 25px 0;

  .title {
    font-family: 'PT Serif', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
}
</style>