<template>
  <div class="footer">
    <div class="footer-hint">
      <IconRadar />
      <p>In any game with any number, it is possible to get a block. Try to play as carefully as possible!</p>
    </div>
    <div class="footer-container main-container">
      <div class="footer-data">
        <IconLogo />
        <p>The best private cheats for all popular games such as Valorant, Call of Duty: WarZone, Apex, PUBG, PUBG Lite, Escape from Tarkov, Warface, Dota 2 and other popular games only with us.</p>
      </div>
      <div class="footer-links">
        <div class="footer-links__col">
          <p class="label">Navigation</p>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="">Our Cheats</NuxtLink></li>
            <li><NuxtLink to="/support">Support</NuxtLink></li>
            <li><NuxtLink to="/about">Reviews & About Us</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-links__col">
          <p class="label">Other</p>
          <ul>
            <li><NuxtLink to="/">Terms Of Service</NuxtLink></li>
            <li><NuxtLink to="/">Privacy Policy</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="footer-social">
        <p class="label">Social media</p>
        <div class="footer-social__links">
          <a href="">
            <IconSocialYouTube />
          </a>
          <a href="">
            <IconSocialTelegram />
          </a>
          <a href="">
            <IconSocialVK />
          </a>
        </div>
      </div>
    </div>
    <div class="footer-footer">
      <div class="main-container">
        <div class="footer-footer__copy">
          <p>© 2021 ALL RIGHTS RESERVED и All trademarks referenced here are the properties of their respective owners</p>
        </div>
        <div class="footer-footer__developed">
          <p>Design by: <a href="">Røtation.</a></p>
          <p>Developed by: <a href="">webitp.</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return { }
  },
})
</script>
