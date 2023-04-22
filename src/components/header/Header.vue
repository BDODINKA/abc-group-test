<template>
  <header :class="$style['header']">
    <div :class="$style['wrapper']">
      <img
          src="src/assets/logoBrain.png"
          alt="logo"
          :class="$style['logo']"
          v-show="showBrain"
      />
      <h1 :class="$style['title']"
          v-if="title"
      >{{ title }}</h1>
      <input
          id="menu_toggle"
          type="checkbox"
      />
      <label :class="$style['menu_btn']"
             for="menu_toggle">
        <span></span>
      </label>
      <nav :class="$style['nav_items']">
        <router-link
            to="/"
            :class="$style['nav_item']">Главная
        </router-link>
        <router-link
            to="/"
            :class="$style['nav_item']">Информация о тесте
        </router-link>
        <router-link
            to="/"
            :class="$style['nav_item']">пройти тест
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VHeader",
  props: {
    showBrain: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
    }
  },
  computed: {}
})
</script>

<style module lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: 10;

  .wrapper {
    height: 46px;
    background: #181818;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    padding: 15px;

    .logo {
      width: 48px;
      height: 48px;
      position: absolute;
      left: 60px;
      top: 0;
    }

    .title {
      font-family: 'Yeseva One', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      position: absolute;
      left: 120px;
      color: #FFC700;
    }

    input[id='menu_toggle'] {
      display: none;
    }

    .menu_btn {
      display: flex;
      position: absolute;
      z-index: 10;
      bottom: 10px;
      align-items: center;
      width: 24px;
      height: 24px;
      cursor: pointer;

      > span {
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        background: #696969;
        transition: 0.3s;

        &:before, &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          background: #696969;
          transition: 0.3s;
        }

        &:before {
          content: "";
          top: -8px;
        }

        &:after {
          content: "";
          top: 8px;
        }
      }

      &:hover {
        > span {
          background: #F4CE0C;

          &:before, &:after {
            background: #F4CE0C;
          }
        }
      }
    }

    input[id='menu_toggle'] {
      display: block;
      position: fixed;
      opacity: 0;

      &:checked ~ .menu_btn {
        right: 13px;
        top: 18px;
        width: 28px;
        height: 28px;

        > span {
          transform: rotate(45deg);


          &:before {
            top: 0;
            transform: rotate(0);
          }

          &:after {
            top: 0;
            transform: rotate(90deg);
          }
        }

      }

      &:checked ~ .nav_items {
        visibility: visible;
        display: flex;
        padding: 110px 20px 0;

        .nav_item {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 22px;
          text-transform: uppercase;
          color: #FFFFFF;
          text-decoration: none;

          &:hover {
            color: #F4CE0C;
          }
        }
      }

    }

    .nav_items {
      flex-direction: column;
      visibility: hidden;
      position: fixed;
      justify-content: space-evenly;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background: black;
      z-index: 1;
    }
  }
}
</style>