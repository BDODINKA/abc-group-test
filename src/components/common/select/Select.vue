<template>
  <label :class="$style['label']">
    <input type="radio" name="radio" checked :class="$style['input']"/>
    <p :class="$style['text']">
      <slot></slot>
    </p>
  </label>

</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VSelect"
})
</script>

<style module lang="scss">


.label {
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;
  width: 100%;


  .input {
    position: absolute;
    left: -9999px;

    &:checked + .text {
      background-color: #FFC700;

      &:before {
        box-shadow: inset 0 0 0 1px #272727;
        background: #2950C2;
      }
    }
  }

  .text {
    width: 100%;
    padding: 0 11%;
    gap: 39px;
    display: flex;
    min-height: 50px;
    height: 10vw;
    align-items: center;
    transition: 0.25s ease;
    background: rgba(242, 243, 243, 0.15);


    font-family: 'PT Serif', sans-serif;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.05em;

    color: #FFFFFF;


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
}

</style>