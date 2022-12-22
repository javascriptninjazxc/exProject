<template>
  <div class="home-slider__control">
    <div class="home-slider__control-fill" :style="{ width: `${fill}%` }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    fill: {
      type: Number,
      default: 0
    }
  },
  setup() {
    return { }
  }
})
</script>