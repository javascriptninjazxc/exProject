<template>
  <div class="home-payment">
    <IconMascot />
    <h2>Multiple payment<br> methods</h2>
    <p>The best private cheats for many popular games! We give a money-back guarantee if the product purchased on our site does not start or does not want to work.</p>
    <div class="home-payment__methods">
      <IconPaymentPayPal />
      <IconPaymentBitcoin />
      <IconPaymentVisa />
      <IconPaymentMasterCard />
      <IconPaymentEth />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return { }
  }
})
</script>