<template>
  <div :class="$style['container']">
    <label :class="$style['color_btn']">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
      <slot>11</slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "VSelectBtn"
}
</script>

<style module lang="scss">
.container {
  color: black;


  width: 100%;
  height: 100%;

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