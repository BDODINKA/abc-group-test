<template>
  <div :class="$style['container']">
    <label
        :class="$style['color_btn']"
        v-for="color in colors"
        :key="color"
        :style="{background:`${color}`}"
    >
      <input type="radio"
             :class="$style['radio']"
             name="color"
             :value="color"
             @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {PropType} from "vue";

import type {ISelectColor} from "@/interface/ISelectColor";

export default defineComponent({
  name: "VSelectColor",
  props: {
    colors: {
      type: Array as PropType<ISelectColor>
    }
  }
})
</script>

<style module lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 75px);
  grid-template-rows: repeat(3, 75px);
  grid-column-gap: 21px;
  grid-row-gap: 21px;

  .color_btn {
    width: 100%;
    height: 100%;
    cursor: pointer;

    .radio {
      display: block;
      opacity: 0;
    }

    &:has(.radio:checked) {
      border: 3px solid #FFC700;
    }
  }
}

</style>