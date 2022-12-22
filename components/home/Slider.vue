<template>
  <div 
    class="home-slider" 
  >
    <div class="home-slider__controls">
      <HomeSliderControl 
        v-for="(slide, index) in slides"
        :key="index"
        :fill="active == index ? slideExpiration / MAX_SLIDE_EXPIRATION * 100 : 0"
      />
    </div>
    <div class="home-slider__controls-toggle-left" @click="prevSlide()">
      <IconArrowCircleRight style="transform: rotate(180deg);" />
    </div>
    <div class="home-slider__controls-toggle-right" @click="nextSlide()">
      <IconArrowCircleRight />
    </div>
    <div class="home-slider__slides">
      <HomeSliderSlide 
        v-for="(slide, index) in slides"
        :key="index"
        :data="slide"
        :style="{ marginLeft: index == 0 ? `${active * -100}%` : 0 }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const slides = [
      {
        banner: '/images/banners/game.jpg',
        title: 'Ring-1: call of duty',
        text: 'Up to 50% off through September 27',
        price: 20
      },
      {
        banner: '/images/banners/game.jpg',
        title: 'Ring-2: call of duty',
        text: 'Up to 70% off through September 29',
        price: 50
      },
      {
        banner: '/images/banners/game.jpg',
        title: 'Ring-3: call of duty',
        text: 'Up to 1000% off through September 30',
        price: 100
      }
    ]

    const MAX_SLIDE_EXPIRATION = 5000

    const stopSlider = ref(false)
    const active = ref(0)
    const slideExpiration = ref(0)

    const prevSlide = () => {
      if (active.value - 1 > -1)
        active.value--
      else
        active.value = slides.length - 1
      slideExpiration.value = 0
    }
    const nextSlide = () => {
      if (active.value + 1 < slides.length)
        active.value++
      else
        active.value = 0
      slideExpiration.value = 0
    }

    setInterval(() => {
      if (stopSlider.value) return

      if (slideExpiration.value >= MAX_SLIDE_EXPIRATION) nextSlide()
      else slideExpiration.value += 100
    }, 100)

    return { slides, active, slideExpiration, stopSlider, MAX_SLIDE_EXPIRATION, prevSlide, nextSlide }
  },
})
</script>