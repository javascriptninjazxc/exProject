<template>
  <div class="main-container">
    <Breadcrumb>My Account > Order #222</Breadcrumb>
    <div class="payment-wrapper">
      <div class="payment-center">
        <div class="payment-block">
          <div class="payment-block-top">
            <div class="payment-block-top-image"></div>

            <h3 class="payment-block-top-header">Order Delivered, <span>#222</span></h3>

            <div class="payment-block-top-tariff">
              <div class="payment-block-top-tariff-name">
                Nemesis.Technology
                <span class="payment-block-top-tariff-name-badge payment-block-top-tariff-name-badge-success">Success</span>
              </div>

              <div class="payment-block-top-tariff-price">
                $33.32
                <div class="payment-block-top-tariff-price-per">
                  /Day
                </div>
              </div>
            </div>

            <div class="payment-block-key">
              <div class="payment-block-key-input">
                <div class="payment-block-key-input-icon">
                  <IconKey />
                </div>
                <div class="payment-block-key-input-input">
                  <input v-model="message" type="text" value="8N67H-M3CY9-QT7C4-2TR7M-TXYCV" readonly />
                </div>
                <div class="payment-block-key-input-button">
                  <button  v-clipboard:copy="message">Copy</button>
                </div>
              </div>

              <div class="payment-block-key-buttons">
                <button class="btn btn-primary">Download Loader</button>
                <button class="btn btn btn-secondary">View Instructions</button>
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
  data: () => {
    return {
      message: "8N67H-M3CY9-QT7C4-2TR7M-TXYCV"
    }
  },
  setup() {
    return { }
  },
})
</script>
