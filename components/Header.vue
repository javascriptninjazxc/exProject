<template>
  <div class="header">

    <transition name="fade">
      <HeaderProductsModal 
        v-if="isOpenProductsModal" 
        @close="isOpenProductsModal = false" 
      />
    </transition>

    <div class="header-container main-container">

      <div class="header-left">
        <div class="header-logo">
          <NuxtLink to="/">
            <span @click="isOpenProductsModal = false"><IconLogo /></span>
          </NuxtLink>
        </div>
        <div class="header-nav">
          <NuxtLink to="/" class="header-nav__link" :class="[($nuxt.$route.path == '/') ? 'active' : '']">
            <span @click="isOpenProductsModal = false">Home</span>
          </NuxtLink>
          <div class="header-nav__link" @mouseover="isOpenProductsModal = true">
            Our Cheats
            <IconMiniArrowBottom />
          </div>
        </div>

        <NuxtLink to="/about" class="header-nav__link" @click="isOpenProductsModal = false" :class="[($nuxt.$route.path == '/about') ? 'active' : '']">
          <span @click="isOpenProductsModal = false">Reviews & About Us</span>
        </NuxtLink>
      </div>

      <div class="header-buttons">

        <NuxtLink to="/support" style="text-decoration: none;">
          <ButtonSecondary @click="isOpenProductsModal = false">Online Support</ButtonSecondary>
        </NuxtLink>

        <NuxtLink to="/profile" style="text-decoration: none;">
          <Button @click="isOpenProductsModal = false">
            <IconProfile />
            My Account
          </Button>
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isOpenProductsModal = ref(false)
    return { isOpenProductsModal }
  },
})
</script>
