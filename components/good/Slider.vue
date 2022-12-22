<template>
  <div class="good-slider">
    <div class="good-slider__title">
      call of duty series
    </div>
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
        <GoodSliderSlide 
          v-for="(slide, index) in slides"
          :key="index"
          :data="slide"
          :style="{ marginLeft: index == 0 ? `${active * -100}%` : 0 }"
        />
      </div>
    </div>
  </div>
</template>
<style>
  .home-slider__controls-toggle-left,
  .home-slider__controls-toggle-right {
    bottom: 50%;
    transform:  traslateY(50%);
  }
  .home-slider {
    height: 600px;
  }
  .good-slider {
    box-sizing: border-box;
    padding: 20px;
    background: #13151D;
  }
  .good-slider__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #F3F3F3;
    margin-bottom: 20px;
  }
</style>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const slides = [
      {
        banner: '/images/good/1.png',
      },
      {
        banner: '/images/good/1.png',
      },
      {
        banner: '/images/good/1.png',
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