<template>
  <footer
      :class="$style['footer']"
      v-on:scroll="handleScroll"
  >
    <div :class="$style['wrapper']">
      <p :class="$style['copyright']" v-if="copyright">
        2019
      </p>
      <p :class="[$style['policy'],$style[`${className}`]]" v-else>
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI
        IMPLINITI,
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI
        IMPLINITI,
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI
        IMPLINITI,
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI
        IMPLINITI,
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI
        IMPLINITI,
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VFooter",
  data() {
    return {
      scroll: false,
      timeOut: 0
    }
  },
  props: {
    copyright: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    className() {
      return this.scroll && 'scroll'
    }
  },
  methods: {
    handleScroll() {
      if (this.scroll) return
      if ((window.scrollY + window.innerHeight) >= document.body.offsetHeight) {
        this.timeOut = setTimeout(() => {
          this.scroll = true
        }, 500)
      }
    },
    stopTimer() {
      clearTimeout(this.timeOut)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {
    scroll(value) {
      if (value) {
        this.stopTimer()
      }
    }
  }
})
</script>

<style module lang="scss">
.footer {
  .wrapper {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 13px 13px;

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

    .policy {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 7px;
      line-height: 9px;
      text-align: center;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.5);
      white-space: normal;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 100%;

      &.scroll {
        display: block;
        -webkit-line-clamp: none;
      }
    }
  }
}
</style>