<template>
  <div class="main-container">
    <Breadcrumb>Profile</Breadcrumb>
    <div class="profile-wrapper">
      <ProfileUser/>
      <ProfilePurchases />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return { }
  },
})
</script>
