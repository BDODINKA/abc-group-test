<template>
  <label
      :class="$style['label']"
      v-for="answer in answers"
      :key="answer"
  >
    <input
        type="radio"
        name="radio"
        :class="$style['input']"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="answer"
    />
    <slot>{{ answer }}</slot>
  </label>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {PropType} from "vue";

export default defineComponent({
  name: "VSelect",
  props: {
    answers: {
      type: Array as PropType<string[]>
    }
  },
  emits: ['update:modelValue'],
})
</script>

<style module lang="scss">


.label {
  display: flex;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;
  width: 100%;

  padding: 0 11%;
  gap: 39px;
  min-height: 50px;
  height: max-content;
  align-items: center;
  transition: 0.25s ease;
  background: rgba(242, 243, 243, 0.15);

  font-family: 'PT Serif', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;

  color: #FFFFFF;

  .input {
    display: none;
  }

  &:has(.input:checked) {
    background: #FFC700;

    &:before {
      box-shadow: inset 0 0 0 1px #272727;
      background: #2950C2;
    }
  }


  &:hover {
    background-color: #FFC700;
    color: #0D0C11;
    box-shadow: inset 0 0 0 0.125em black;
  }


  &:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.25s ease;
    box-shadow: inset 0 0 0 0.125em white;
  }
}

</style>