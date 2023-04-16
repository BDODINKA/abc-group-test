<template>
  <footer :class="$style['footer']">
    <div :class="$style['wrapper']">
      <p :class="$style['copyright']">
        2019
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VFooter"
})
</script>

<style module lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;


  .wrapper {
    padding: 13px 130px;


    .copyright {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 10px;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.05em;
      color: rgba(255, 255, 255, 0.5);
      position: relative;
      left: 0;

      &:before {
        content: "\00a9";
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>