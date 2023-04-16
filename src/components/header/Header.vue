<template>
  <header :class="$style['header']">
    <div :class="$style['wrapper']">
      <img
          src="src/assets/logoBrain.png"
          alt="logo"
          :class="$style['logo']"
          v-show="showBrain"
      />
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
    height: 40px;
    background: #181818;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;

    .logo {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 60px;
    }

    padding: 15px;

    input[id='menu_toggle'] {
      display: none;
    }

    .menu_btn {
      display: flex;
      position: absolute;
      z-index: 10;
      bottom: 10px;
      align-items: center;
      width: 20px;
      height: 20px;
      cursor: pointer;


      > span {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background: #696969;
        transition: 0.3s;

        &:before, &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
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
    }

    input[id='menu_toggle'] {
      display: block;
      position: fixed;
      opacity: 0;

      &:checked ~ .menu_btn {
        right: 0;

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
        right: 0;
      }
    }

    .nav_items {
      flex-direction: column;
      visibility: hidden;
      position: fixed;
      justify-content: space-evenly;
      top: 0;
      right: 0;
      max-width: 225px;
      width: 100%;
      height: 90vh;
      background: black;
      z-index: 1;
    }
  }
}
</style>