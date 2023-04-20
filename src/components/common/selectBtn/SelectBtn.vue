<template>
  <div :class="$style['container']">
    <label
        :class="$style['color_btn']"
        v-for="item in data"
        :key="item"
    >
      <input type="radio"
             :class="$style['radio']"
             name="color"
             @input="$emit('update:modelValue', $event.target.value)"
             :value="item"
      />
      <slot>{{ item }}</slot>
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

import type {PropType} from 'vue'

import type {ISelectBtn} from "@/interface/ISelectBtn";

export default defineComponent({
  name: "VSelectBtn",
  props: {
    withLine: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array as PropType<ISelectBtn>
    },
  },
})
</script>

<style module lang="scss">
.container {
  color: black;
  width: 100%;
  border-top: 4px solid rgba(242, 243, 243, 0.15);
  padding: 22px 0;
  display: flex;
  justify-content: space-evenly;

  .color_btn {
    width: 41px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    font-family: 'PT Serif', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 49px;

    text-transform: capitalize;

    color: #0D0C11;

    .radio {
      display: none;
    }

    &:has(.radio:checked) {
      border: 3px solid #FFC700;
    }
  }
}
</style>