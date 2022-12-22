<template>
  <div class="game-category">
    <div class="game-category__head">
      <div class="game-category__name">
        <img :src="data.icon" alt="">
        <h3>{{ data.title }}</h3>
      </div>
      <ButtonSecondary v-if="data.path">See All</ButtonSecondary>
    </div>
    <div class="game-category__items">
      <slot />
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