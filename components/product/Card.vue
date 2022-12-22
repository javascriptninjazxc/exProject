<template>
  <nuxt-link to="/good/good" style="text-decoration: none;">
  <div class="product-card">
    <div class="product-card-image" :style="{backgroundImage: `url(${data.image})`}">
      <span v-if="data.bestseller" class="product-card-image-bestseller">Bestseller</span>
    </div>
    <div class="product-card-data">

      <div class="product-card-data-top">
        <div class="type">{{data.type}}</div>
        <div class="label">{{data.name}}</div>
      </div>

      <div class="product-card-data-info">
        <span class="green">Undetected</span>
        <span>ESP</span>
        <span>Aimbot</span>
        <span>HWID Spoofer</span>
      </div>

      <div class="product-card-data-button">

        <div v-if="data.discount > 0" class="product-card-data-button-price">
          <span class="old-price">$11.23</span>
          <span class="percent">-25%</span>
        </div>

        <div class="product-card-data-button-btn-full" v-if="data.discount == 0">
          <ButtonSecondary>From ${{data.price}}</ButtonSecondary>
        </div>
        <div class="product-card-data-button-btn" v-if="data.discount > 0">
          <ButtonSecondary>From ${{data.price}}</ButtonSecondary>
        </div>
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
  data() {
    return {
      inputPhoneModel: '',
    };
  },
  setup() {
    return { }
  },
})
</script>