<template>
  <div :class="$style['box']">
    <button :class="$style['btn']">
      <i :class="[$style['arrow'],$style['up']]"></i>
    </button>
    <p :class="$style['title']">
      <slot></slot>
    </p>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VScrollBtn",
})
</script>

<style module lang="scss">
.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;

  .btn {
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
  }

  .title {
    font-family: 'PT Serif', sans-serif;
    font-weight: 400;
    font-size: 8px;
    line-height: 11px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .arrow {
    border: solid black;
    border-width: 0 1px 1px 0;
    display: inline-block;
    position: relative;
    left: 0;
    padding: 2px;

    &:after {
      content: "";
      position: absolute;
      background: #0D0C11;
      width: 1px;
      height: 7px;
      bottom: -2px;
      left: 2px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }

    &.up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
  }
}


</style>