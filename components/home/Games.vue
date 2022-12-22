<template>
  <div class="home-products">
    <GameCategory
      v-for="(category, categoryIndex) in categories"
      :key="categoryIndex"
      :data="category"
    >
        <GameCard
          v-for="(game, gameIndex) in category.games"
          :key="gameIndex"
          :data="game"
        />
    </GameCategory>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const categories = [
      {
        icon: '/images/games/cod_icon.png',
        title: 'Call Of Duty: Series',
        path: '/',
        games: [
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          }
        ]
      },
      {
        icon: '/images/games/cod_icon.png',
        title: 'Call Of Duty: Series',
        path: '/',
        games: [
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          },
          {
            image: '/images/games/product.png',
            type: 'Soft',
            name: 'Name Game',
            count: 500,
            price: 100
          }
        ]
      }
    ]
    return { categories }
  }
})
</script>