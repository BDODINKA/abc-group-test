<template>
  <button
      class="default"
      :class="className"
      :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {PropType} from 'vue'

import type {IBtn} from "@/interface/IBtn";

export default defineComponent({
  name: "VButton",
  props: {
    styleBtn: {
      type: String as PropType<IBtn>,
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      switch (this.styleBtn) {
        case "colored": {
          return {colored: this.styleBtn}
        }
        case "transparent": {
          return {transparent: this.styleBtn}
        }
        default: {
          return {default: this.styleBtn}
        }
      }
    }
  }

})
</script>

<style scoped>
.default {
  width: 189px;
  height: 41px;
  border-radius: 20px;
  font-family: 'Merriweather', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0D0C11;
  cursor: pointer;
}

.colored {
  border: none;
  background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
}

.transparent {
  border: 1px solid #ffffff;
  color: #ffffff;;
  background: transparent;
}

.default:disabled {
  color: #8E8E8E;
  background: #DADADA;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.25);
}
</style>