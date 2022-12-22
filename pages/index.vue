<template>
  <div class="main-container">
    <HomeSlider />
    <HomeTrands />
    <HomeGames />
    <HomeAdvantages />
    <HomeCategories />
    <HomePayment />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return { }
  },
})
</script>
