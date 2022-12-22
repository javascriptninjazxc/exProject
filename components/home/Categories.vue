<template>
  <div class="home-games__cols">
    <HomeGamesCol
      v-for="(category, categoryIndex) in categories"
      :key="categoryIndex"
      :data="category"
    >
      <ProductCardMini 
        v-for="(game, gameIndex) in category.games"
        :key="gameIndex"
        :data="game"
      />
    </HomeGamesCol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const categories = [
      {
        icon: '/images/games/cod_icon.png',
        title: 'Test',
        games: [
          {
            image: '/images/games/game.png',
            type: 'Soft',
            name: 'Escape From Tarkov',
            count: 10,
            price: 50
          },
          {
            image: '/images/games/game.png',
            type: 'Soft',
            name: 'Escape From Tarkov',
            count: 10,
            price: 50
          },
          {
            image: '/images/games/game.png',
            type: 'Soft',
            name: 'Escape From Tarkov',
            count: 10,
            price: 50
          }
        ]
      },
      {
        icon: '/images/games/cod_icon.png',
        title: 'Test',
        games: [
          {
            image: '/images/games/game.png',
            type: 'Soft',
            name: 'Escape From Tarkov',
            count: 10,
            price: 50
          },
          {
            image: '/images/games/game.png',
            type: 'Soft',
            name: 'Escape From Tarkov',
            count: 10,
            price: 50
          },
          {
            image: '/images/games/game.png',
            type: 'Soft',
            name: 'Escape From Tarkov',
            count: 10,
            price: 50
          }
        ]
      }
    ]
    return { categories }
  },
})
</script>