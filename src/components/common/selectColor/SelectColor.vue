<template>
  <div :class="$style['container']">
    <label :class="[$style['color_btn'],$style['grey']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
    <label :class="[$style['color_btn'],$style['blue']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
    <label :class="[$style['color_btn'],$style['green']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
    <label :class="[$style['color_btn'],$style['red']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
    <label :class="[$style['color_btn'],$style['yellow']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
    <label :class="[$style['color_btn'],$style['brown']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
    <label :class="[$style['color_btn'],$style['black']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
    <label :class="[$style['color_btn'],$style['violet']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
    <label :class="[$style['color_btn'],$style['sky']]">
      <input type="radio"
             :class="$style['radio']"
             name="color"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "VSelectColor"
}
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
    background: red;

    .radio {
      display: block;
      opacity: 0;
    }

    &:has(.radio:checked) {
      border: 3px solid #FFC700;
    }

    &.grey {
      background: #A8A8A8;
    }

    &.blue {
      background: #0000A9;
    }

    &.green {
      background: #00A701;
    }

    &.red {
      background: #F60100;
    }

    &.yellow {
      background: #FDFF19;
    }

    &.brown {
      background: #A95403;
    }

    &.black {
      background: #000000;
    }

    &.violet {
      background: #850068;
    }

    &.sky {
      background: #46B3AC;
    }
  }
}

</style>