<template>
  <v-wrapper :class="$style['wrapper']">
    <h3 :class="$style['title']">
      Ваш результат рассчитан:
    </h3>
    <p :class="$style['description']">
      вы относитесь к 3% респондентов,
      чей уровень интеллекта более чем на
      15 пунктов отличается от среднего в
      большую или меньшую сторону! </p>
    <h3 :class="[$style['title'],$style['title_colored']]">
      Скорее получите свой результат!
    </h3>
    <div :class="$style['box_policy']">
      <p :class="$style['policy_description']">
        В целях защиты персональных
        данных результат теста, их подробная
        интерпретация и рекомендации доступны
        в виде голосового сообщения по звонку
        с
        вашего мобильного телефона
      </p>
    </div>
    <div :class="$style['box_count']">
      <p :class="$style['title_count']">
        Звоните скорее, запись доступна всего
      </p>
      <p :class="[$style['title_count'],$style['count']]">
        {{ count }}
      </p>
      <p :class="$style['title_count']">
        МИНУТ
      </p>
    </div>
    <v-call-btn
        :class="$style['call_btn']"
        :isDisabled="stopCount"
    />
  </v-wrapper>
</template>

<script lang="ts">
import {defineComponent} from "vue";


export default defineComponent({
      name: "VResult",
      data() {
        return {
          count: `${this.time}:00`,
          timer: 0,
          stopCount: false,
        };
      },
      props: {
        time: {
          type: Number,
          default: 10
        }
      },
      methods: {
        counter() {
          let minutes = this.time
          let seconds = (minutes * 60) % 60
          this.timer = setInterval(() => {
            minutes = ((minutes * 60) - 1) / 60
            seconds = Math.floor((minutes * 60) % 60)
            this.count = seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds}`
          }, 1000)
        },
        stopTimer() {
          clearTimeout(this.timer)
        },
      },
      mounted() {
        this.counter()
      },
      watch: {
        count(value) {
          if (value === '0:00') {
            this.stopCount = true
            this.stopTimer()
          }
        }
      }
    }
)
</script>
<style module lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: url("src/assets/bg2.webp") no-repeat;
  padding: 64px 11px 0;
  background-size: cover;
  min-height: 100vh;

  .title {
    font-family: 'PT Serif', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .title_colored {
    padding: 22px 11px 12px;
    font-size: 18px;
    line-height: 22px;
    color: #3BDE7C;
  }

  .description {
    padding: 13px 10px 0;
    font-family: 'PT Serif', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .box_policy {
    background: #1C2741;
    border-radius: 6px;
    padding: 15px 12px 11px;

    .policy_description {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 8px;
      line-height: 14px;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #FFFFFF;
    }
  }

  .box_count {
    padding: 2px 25px 6px;

    .title_count {
      font-family: 'PT Serif', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #3BDE7C;
    }

    .count {
      font-size: 42px;
    }
  }

  .call_btn {
    margin-bottom: 20px;
  }
}
</style>