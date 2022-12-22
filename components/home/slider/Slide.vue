<template>
  <div
    :style="{ backgroundImage: `url('${data.banner}')` }"
    class="home-slider__slide"
  >
    <div class="home-slider__slide-data">
      <h2>{{ data.title }}</h2>
      <p class="text">{{ data.text }}</p>
      <div class="price">
        <p class="price-value">{{ data.price }}$<span>/Day</span></p>
        <ButtonSecondary>Buy Now</ButtonSecondary>
      </div>
    </div>
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