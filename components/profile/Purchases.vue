<template>
	<div class="profile-purchases">
	  <div class="profile-purchases-title">
	  	<i><IconPayment /></i>
	  	<span>My Purchases</span>
	  </div>
	  <div class="profile-purchases-games">

	  	<ProfilePurchase />
	  	<ProfilePurchase />
	  	<ProfilePurchase />
	  	<ProfilePurchase />
	  	<ProfilePurchase />
	  	<ProfilePurchase />
	  	<ProfilePurchase />
	  	<ProfilePurchase />

	  </div>
		<div class="page-about-reviews-paginate">
      <ButtonPaginate
      		:class="{active: (this.pageNumber == 0)}"
          >
          1
      </ButtonPaginate>
      <ButtonPaginate 
      		:class="{active: (this.pageNumber == 1)}"
          >
          2
      </ButtonPaginate>
      </div>
    </div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
	data: {
		pageNumber: 0
	},
  setup() {
    
  },
})
</script>