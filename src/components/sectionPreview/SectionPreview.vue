<template>
  <v-wrapper :class="$style['wrapper']">
    <p :class="$style['title']">Пройдите точный и быстрый</p>
    <v-title>Тест на определение iq</v-title>
    <V-Button
        styleBtn="colored"
        :class="$style['btn']"
        @click.prevent="$router.push( '/question')"
    >
      Пройти тест
    </V-Button>
    <p :class="$style['description']">
      И получите рекомендации
      по развитию своего интеллекта
      и улучшению финансового благосостояния и личной жизни
    </p>
    <V-ScrollBtn :class="$style['scroll_btn']">Подробнее</V-ScrollBtn>
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
  background: url("src/assets/Bg1.webp") no-repeat 50% 40px;
  background-size: cover;
  padding: 40px 20px 11px;

  .title {
    padding: 27px 0 0;
    font-family: 'PT Serif', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .btn {
    margin-top: 150px;
  }

  .description {
    padding-top: 22px;
    font-family: 'PT Serif', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
  }

  .scroll_btn {
    padding-top: 20px;
  }
}
</style>