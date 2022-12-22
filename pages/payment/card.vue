<template>
  <div class="main-container">
  	<Breadcrumb>My Account > Pay</Breadcrumb>
		<PaymentHeader></PaymentHeader>

		<div class="payment-card">

			<div class="payment-back">
				<NuxtLink to="/payment/select" style="text-decoration: none;">
				<ButtonSecondary>
					<i><IconBack /></i>
					<span>Back</span>
				</ButtonSecondary>
				</NuxtLink>
			</div>

			<div class="payment-center" style="margin: 50px 0; flex-direction: column;">

				<div class="payment-crypto-inputs">
				
	        <div class="payment-crypto-key">
						<label for="">Card Information</label>
		        <div class="payment-crypto-key-input">
              <div class="payment-crypto-key-input-icon">
                <IconVisa />
              </div>
		          <div class="payment-crypto-key-input-input">
		            <input type="text" value="" v-mask="'#### #### #### ####'" v-model="inputPhoneModel" placeholder="1234 1234 1234 1234" />
		          </div>
		        </div>
		      </div>

	        <div class="payment-crypto-keys">
		        <div class="payment-crypto-keys-key payment-crypto-key">
			        <div class="payment-crypto-key-input">
			          <div class="payment-crypto-key-input-input">
			            <input type="text" v-mask="'##/##'" v-model="inputDateExpired" placeholder="MM/YY" maxlength="5"/>
			          </div>
			        </div>
			      </div>

		        <div class="payment-crypto-keys-key payment-crypto-key">
			        <div class="payment-crypto-key-input">
			          <div class="payment-crypto-key-input-input">
			            <input type="counter" value="" placeholder="CVC" maxlength="3"/>
			          </div>
			        </div>
			      </div>
		      </div>
				
	        <div class="payment-crypto-key">
						<label for="">Name On Card</label>
		        <div class="payment-crypto-key-input">
		          <div class="payment-crypto-key-input-input">
		            <input type="text" value="IVAN PAVLOV" />
		          </div>
		        </div>
		      </div>

	        <div class="payment-crypto-key">
						<label for="">Country Or Region</label>
	          <Select2 v-model="selectCountry" :options="selectOptions" placeholder="Select Country" />
		      </div>

				</div>

				<div class="payment-crypto-course">
					<Button>Pay $33.32</Button>
				</div>

			</div>
		</div>
	</div>
</template>

<style>
	.btn i {
		margin-left: 5px;
		margin-right: 15px;
	}

	.select2 {
		width: 100% !important;
	}
	.select2-container--default .select2-selection--single {
		background: rgba(19, 21, 29, 0.48);
    border: 1px solid #1D2029;

    border-radius: 5px;
    padding: 15px 20px 41px 20px;
    box-sizing: border-box;
	}
	.select2-container--default .select2-selection--single .select2-selection__rendered {
		color: #fff;
		padding-left: 0 !important;
	}
	.select2-container--default .select2-selection--single .select2-selection__arrow {
		top: 50%;
    transform: translateY(-50%);
    right: 10px;
	}
	.select2-dropdown {
		background: #13151D;
		color: #fff;
    border-color: #1D2029;
    padding: 10px 0;
	}
	.select2-dropdown input {
		background: rgba(19, 21, 29, 0.48);
		color: #fff;
		font-size: 12px !important;
    border: 1px solid #1D2029 !important;
    padding: 5px 10px !important;
    margin-bottom: 5px;
	}
	.select2-container--default .select2-results__option[aria-selected=true] {
		background: rgba(255,255,255, 0.05);
	}
</style>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      inputDateExpired: '',
      inputPhoneModel: '',
      selectCountry: '',
      selectOptions: [
      	'Russia',
      	'USA',
      ]
    };
  },
  setup() {
    return { }
  },
})
</script>