<template>
  <v-wrapper :class="$style['wrapper']">
    <h3 :class="$style['title']">Прохождение теста займет у вас не более 12 минут, а его результаты вы сможете
      использовать всю жизнь.
    </h3>
    <div :class="$style['description_box']">
      <p :class="$style['description']">
        Профессиональная интерпретация и детально проработанные рекомендации позволят вам качественно изменить все
        аспекты своей жизни: от финансового до любовного.
      </p>
    </div>
    <v-button
        styleBtn="transparent"
        :class="$style['btn']"
    >
      Пройти тест
    </v-button>
  </v-wrapper>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VRecommendations"
})
</script>

<style module lang="scss">
.wrapper {
  padding: 56px 10px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("src/assets/bg2.webp");
  position: relative;
  overflow: hidden;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 166px;
    height: 166px;
    background: url("src/assets/lighting.png") no-repeat;
  }

  &:before {
    top: 305px;
    left: -50px;
    transform: rotate(-25deg);
  }

  &:after {
    top: 88px;
    right: -50px;
    transform: rotate(25deg);
  }

  .title {
    font-family: 'Merriweather', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    text-align: left;
  }

  .description_box {
    margin-top: 14px;
    background: rgba(243, 243, 242, 0.8);
    border-radius: 20px;
    padding: 29px 14px;

    .description {
      font-family: 'Merriweather', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.05em;
      color: #181818;
    }
  }

  .btn {
    margin-top: 33px;
  }
}
</style>