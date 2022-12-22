<template>
  <div class="home-trands">
    <div class="home-trands__title">
      <IconStar />
      <p>Tranding Game Hacks</p>
    </div>

    <div class="home-trands__trands">
      <div class="home-trands__trands-image" 
        v-for="(trand, index) in trands">
        <img 
          :key="index"
          :src="`/images/games/${trand}.png`" 
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const trands = [
      'apex_icon',
      'blackops_icon',
      'cod_icon',
      'dead_icon',
      'overwatch_icon',
      'r6_icon',
      'rust_icon',
      'tarkov_icon',
      'valorant_icon',
      'warface_icon',
      'cod_icon',
    ]
    return { trands }
  },
})
</script>