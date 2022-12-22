<template>
  <div class="main-container">
		<PaymentHeader></PaymentHeader>

		<div class="payment-crypto">

			<div class="payment-back">
				<ButtonSecondary>
					<i><IconBack /></i>
					<span>Back</span>
				</ButtonSecondary>
			</div>

			<div class="payment-center" style="margin: 50px 0; flex-direction: column;">
				<IconQr />

				<div class="payment-crypto-inputs">
				
	        <div class="payment-crypto-key">
						<label for="">Wallet Address</label>
		        <div class="payment-crypto-key-input">
		          <div class="payment-crypto-key-input-input">
		            <input type="text" value="3KFwaaYH75ij2GTGaZwwuWXEd7Uoq8bCBm" readonly />
		          </div>
		          <div class="payment-crypto-key-input-button">
		            <button v-clipboard:copy="message">Copy</button>
		          </div>
		        </div>
		      </div>

	        <div class="payment-crypto-key">
						<label for="">SUM</label>
		        <div class="payment-crypto-key-input">
		          <div class="payment-crypto-key-input-input">
		            <input type="text" value="0.00007912" readonly />
		          </div>
		          <div class="payment-crypto-key-input-button">
		            <button v-clipboard:copy="message">Copy</button>
		          </div>
		        </div>
		      </div>

				</div>

				<div class="payment-crypto-course">The course is fixed for <span>20 minutes</span></div>

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
