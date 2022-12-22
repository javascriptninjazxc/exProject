<template>
  <div class="product-card__mini">
    <div 
      :style="{ backgroundImage: `url('${data.image}')` }"
      class="product-card__mini-image"
    />
    <div class="product-card__mini-data">
      <div class="product-card__mini-col">
        <p class="type">{{ data.type }}</p>
        <h4>{{ data.name }}</h4>
      </div>
      <div class="product-card__mini-col">
        <p class="label">Aviable</p>
        <p class="value">{{ data.count }}</p>
      </div>
      <div class="price-from">From ${{ data.price }}</div>
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