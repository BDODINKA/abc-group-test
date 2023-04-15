<template>
  <header>
    <div class='wrapper'>
      <img
          src="src/assets/logoBrain.png"
          alt="logo"
          class="logo"
      />
      <input
          id="menu_toggle"
          type="checkbox"
      />
      <label class="menu_btn"
             for="menu_toggle">
        <span></span>
      </label>
      <nav class="nav_items">
        <router-link
            to="/"
            class="nav-item">Главная
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VHeader",
  data() {
  },
  computed: {}
})
</script>

<style scoped lang="scss">


.wrapper {
  .logo {
    width: 50px;
    height: 50px;
  }

  padding: 15px;

  input[id='menu_toggle'] {
    display: none;
  }

  .menu_btn {
    display: flex;
    position: fixed;
    z-index: 2;
    align-items: center;
    right: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    background: white;

    > span {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: black;
      transition: 0.3s;

      &:before, &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: black;
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


</style>