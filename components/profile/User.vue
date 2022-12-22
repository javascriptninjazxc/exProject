<template>
  <div class="profile">
    <div class="profile-info">
      <IconNoava />
      <span class="profile-info-name">My Account</span>
      <span class="profile-info-email">test@email.com</span>
      <div class="profile-socials">
        <a href="#">
          <i class="profile-socials-icon">
            <IconDiscord />
          </i>
          Pavlov#4504
        </a>
        <a href="#">
          <i class="profile-socials-icon">
            <IconTelegram />
          </i>
          Telegram Account
        </a>
      </div>
      <div class="profile-logout-button">
        <a href="#">
          <i><IconSignout /></i>
          Sign out
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    
  },
})
</script>