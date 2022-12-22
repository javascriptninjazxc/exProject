<template>
  <div class="main-container">
    <div class="payment-wrapper">
      <div class="payment-center">
        <div class="payment-block">
          <div class="payment-block-top">
            <div class="payment-block-top-image"></div>

            <h3 class="payment-block-top-header">Payment Fail</h3>

            <div class="payment-block-top-tariff">
              <div class="payment-block-top-tariff-name">
                Nemesis.Technology
                <span class="payment-block-top-tariff-name-badge payment-block-top-tariff-name-badge-fail">Fail</span>
              </div>
              <div class="payment-block-top-tariff-price">
                $33.32
                <div class="payment-block-top-tariff-price-per">
                  /Day
                </div>
              </div>
            </div>

            <div class="payment-block-bottom">
              <p class="payment-block-bottom-text">If you cannot cope with the launch / do not understand the instructions ?</p>              
              <NuxtLink to="/support" class="payment-block-bottom-link" style="text-decoration: none;">Go to support</NuxtLink>
            </div>
          </div>
        </div>
      </div>
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
