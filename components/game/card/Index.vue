<template>

      <nuxt-link to="/good/good" style="text-decoration: none;">
  <div class="game-card">
    <div 
      class="game-card__image"
      :style="{ backgroundImage: `url('${data.image}')` }"
    />
    <div class="game-card__data">
      <p class="type">{{ data.type }}</p>
      <h4>{{ data.name }}</h4>
      <div class="game-card__footer">
        <div class="game-card__count">
          <p>Aviable</p>
          <p>{{ data.count }}</p>
        </div>
        <div class="price-from">From ${{ data.price }}</div>
      </div>
    </div>
  </div>

      </nuxt-link>
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