<template>
  <div
    :style="{ backgroundImage: `url('${data.banner}')` }"
    class="home-slider__slide"
  >
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { }
  },
})
</script>