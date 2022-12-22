<template>
  <div class="header-modal">
    <div class="header-modal__container">
      <div @click="$emit('close')" class="header-overlay"></div>
      <div class="header-modal__products main-container">
        <p class="label">Our Cheats</p>
        <div class="header-modal__products-cols">
          <div 
            v-for="(col, colIndex) in Math.ceil(products.length / 8)"
            :key="colIndex"
            class="header-modal__products-col"
          >

            <NuxtLink to="/game/game" style="text-decoration: none;">
            <div 
              v-for="(product, productIndex) in products.slice(colIndex * 8, colIndex * 8 + 8)"
              :key="productIndex"
              class="header-modal__product"
            >

              <div class="header-modal__product-data">
                <div class="header-modal__product-icon">
                  <img :src="product.icon" alt="">
                </div>
                <p>{{ product.name }}</p>
              </div>
              <span>{{ product.count }}</span>
            </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const exampleProduct = {
      icon: '/images/games/apex_icon.png',
      name: 'Call of Duty: Warzone',
      count: 17
    }
    const products = []

    for (let i = 0; i < 24; ++i)
      products.push(exampleProduct)

    return { products }
  },
})
</script>