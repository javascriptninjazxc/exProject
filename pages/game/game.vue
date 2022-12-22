<template>
  <div class="main-container">

    <div class="main-breadcrumb">
      <NuxtLink to="/">Home</NuxtLink>
      > 
      <span>{{name}}</span>
    </div>

    <GameHeader :data="header" />

    <GameCategory
      v-for="(category, categoryIndex) in categories"
      :key="categoryIndex"
      :data="category"
    >
      <ProductCard 
        v-for="(game, gameIndex) in category.games"
        :key="gameIndex"
        :data="game"
      />
    </GameCategory>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      name: "Call Of Duty: Series"
    }
  },
  setup() {
    const header = [{
        icon: '/images/games/cod_icon.png',
        title: 'Call Of Duty: Series',
        type: 'Gaming Software',
    }]
    const categories = [
      {
        icon: '/images/games/cod_icon.png',
        title: 'Gaming Soft',
        games: [
          {
            image: '/images/products/1.png',
            type: 'Type Product',
            name: 'Name Game',
            count: 500,
            price: 100,
            discount: 0,
            bestseller: 1,
          },
          {
            image: '/images/products/2.png',
            type: 'Type Product',
            name: 'Name Game',
            count: 500,
            price: 100,
            discount: 25,
          },
          {
            image: '/images/products/3.png',
            type: 'Type Product',
            name: 'Name Game',
            count: 500,
            price: 100,
            discount: 25,
          },
          {
            image: '/images/products/4.png',
            type: 'Type Product',
            name: 'Name Game',
            count: 500,
            price: 100,
            discount: 25,
          },
          {
            image: '/images/products/5.png',
            type: 'Type Product',
            name: 'Name Game',
            count: 500,
            price: 100,
            discount: 25,
          },
          {
            image: '/images/products/6.png',
            type: 'Type Product',
            name: 'Name Game',
            count: 500,
            price: 100,
            discount: 25,
          }
        ]
      },
      {
        icon: '/images/games/cod_icon.png',
        title: 'Utilities',
        games: [
          {
            image: '/images/products/7.png',
            type: 'Type Product',
            name: 'Name Game',
            count: 500,
            price: 100,
            discount: 25,
          },
          {
            image: '/images/products/8.png',
            type: 'Type Product',
            name: 'Name Game',
            count: 500,
            price: 100,
            discount: 25,
          },
        ]
      },
      {
        icon: '/images/games/cod_icon.png',
        title: 'Utilities',
        games: [
          {
            image: '/images/products/9.png',
            type: 'Type Product',
            name: 'Nemesis.Technology',
            count: 500,
            price: 100,
            discount: 25
          },
        ]
      }
    ]
    return { header, categories }
  },
})
</script>
