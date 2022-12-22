<template>
	<div class="main-container">

		<modal name="example" width="1200" height="680" :adaptive="true">
			<GoodSlider />
		</modal>

		<div class="page-good">
			<div class="page-good-screenshots">
				<div class="main-screenshot">
					<img src="/images/3.png" alt="">
				</div>
				<div class="sub-screenshots">
					<div class="screenshot">
						<img src="/images/1.png" alt="">
					</div>
					<div class="screenshot">
						<img src="/images/2.png" alt="">
					</div>
				</div>
			</div>

			<div class="page-good-content">
				<div class="page-good-content-block">
					<div class="page-good-content-block-header">
						<div class="info">
							<div class="type">Game Soft</div>
							<div class="name">Accederz: CoD Warzone Lite</div>
						</div>
						<div class="game">
							<i><img src="/images/games/cod_icon.png" alt=""></i>
							<span>CoD: Warzone</span>
						</div>
					</div>
					<div class="page-good-content-block-content">
						<div class="badges">
							<span class="badge green">Undetected</span>
							<span class="badge">Special Features</span>
							<span class="badge">Player ESP</span>
							<span class="badge">Aimbot</span>
							<span class="badge">Screenshot Cleaner</span>
						</div>
						<div class="text">
							<p>Our Premium Counter-Strike: Global Offensive cheat is exactly what you need if you are looking for a highly customisable legit cheat, that also has a wide range of visual options, as well as exclusive features never seen before in other public cheats.</p>
						</div>
					</div>
				</div>
				<div class="page-good-content-block">

					<div class="page-good-content-block-header">
						<div class="title">
							<i><IconReceipt /></i>
							<span>Checkout</span>
						</div>
					</div>

					<div class="page-good-content-block-radios">
						<fieldset id="radio">
							<div class="form-radio" v-bind:class="{active: checkbox1}">
								<div class="radio-block">
									<input @click="checkbox1 = true; checkbox2 = false; checkbox3 = false;" id="radio-1" type="radio" name="radio">
									<label for="radio-1">For 1 Days</label>
									<span class="sales">
										-25% Off
									</span>
								</div>		
								<div class="prices">
									<span class="old-price">$4.32</span>
									<span class="price">$3.32</span>
								</div>		
							</div>
							<div class="form-radio" v-bind:class="{active: checkbox2}">
								<div class="radio-block">
									<input @click="checkbox1 = false; checkbox2 = true; checkbox3 = false;"  id="radio-2" type="radio" name="radio">
									<label for="radio-2">For 7 Days</label>
								</div>		
								<div class="prices">
									<span class="price">$3.32</span>
								</div>				
							</div>
							<div class="form-radio" v-bind:class="{active: checkbox3}">
								<div class="radio-block">
									<input @click="checkbox1 = false; checkbox2 = false; checkbox3 = true;"  id="radio-3" type="radio" name="radio">
									<label for="radio-3">For 30 Days</label>
								</div>	
								<div class="prices">
									<span class="old-price">$4.32</span>
									<span class="price">$3.32</span>
								</div>					
							</div>
						</fieldset>
					</div>

					<div class="page-good-content-block-pur">
						<div class="flex-between">
							<div class="page-good-content-block-purchase">
								<span class="open-sales">
									<i><IconGoodSales /></i>
									<span>Open Sales</span>
								</span>
								<p>To buy, you do not need to tie a Telegram or Discord.</p>
							</div>
							<div class="page-good-content-block-purchase">
								<Button>
									Purchase now $16.55
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div class="page-good-content-block">

						<div class="tabs">
							<li @click="tab1 = true; tab2 = false; tab3 = false;" v-bind:class="{active: tab1}">
								<i><IconGoodFunc /></i>
								<span>Functional</span>
							</li>
							<li @click="tab1 = false; tab2 = true; tab3 = false;" v-bind:class="{active: tab2}">
								<i><IconGoodSystem /></i>
								<span>System Requirements</span>
							</li>
							<li @click="tab1 = false; tab2 = false; tab3 = true;" v-bind:class="{active: tab3}">
								<i><IconGoodScreen /></i>
								<span>Screen & Video</span>
							</li>
						</div>

						<div class="tab" v-if="tab1">
							<div class="header-info">
								SPECIAL FEATURES
							</div>
							<div class="text-info">
								Unlock All Skins (NOTE: NOT STORE ITEMS) <br>
								Unlock All Weapons <br>
								Unlock All Attachments  <br>
							</div>
							<div class="header-info">
								SPECIAL FEATURES
							</div>
							<div class="text-info">
								Unlock All Skins (NOTE: NOT STORE ITEMS) <br>
								Unlock All Weapons <br>
								Unlock All Attachments  <br>
							</div>
							<div class="header-info">
								SPECIAL FEATURES
							</div>
							<div class="text-info">
								Unlock All Skins (NOTE: NOT STORE ITEMS) <br>
								Unlock All Weapons <br>
								Unlock All Attachments  <br>
							</div>
							<div class="header-info">
								SPECIAL FEATURES
							</div>
							<div class="text-info">
								Unlock All Skins (NOTE: NOT STORE ITEMS) <br>
								Unlock All Weapons <br>
								Unlock All Attachments  <br>
							</div>
						</div>

						<div class="tab" v-if="tab2">

								<div class="table-games">
									<div class="table-games__row" v-for="(req, reqIndex) in requirements">
										<span class="table-games__row__title">
											{{ req.title }}
										</span>
										<span class="table-games__row__value">
											{{ req.value }}
										</span>
									</div>
								</div>

						</div>

						<div class="tab" v-if="tab3">
							<div class="images">
								<div class="image_full">
									<div class="image_hover" @click="showModal()">
										<img src="/images/good/image.jpg" alt="">
										<div class="image_over">
											<IconGoodView />
										</div>
									</div>
								</div>

								<div class="images_row">
									<div class="image_part">
										<div class="image_hover" @click="showModal()">
											<img src="/images/good/image.jpg" alt="">
											<div class="image_over">
												<IconGoodView />
											</div>
										</div>
									</div>
									<div class="image_part">
									<div class="image_hover" @click="showModal()">
										<img src="/images/good/image.jpg" alt="">
										<div class="image_over">
											<IconGoodView />
										</div>
									</div>
									</div>
								</div>

								<div class="images_row">
									<div class="image_part">
									<div class="image_hover" @click="showModal()">
										<img src="/images/good/image.jpg" alt="">
										<div class="image_over">
											<IconGoodView />
										</div>
									</div>
									</div>
									<div class="image_part">
									<div class="image_hover" @click="showModal()">
										<img src="/images/good/image.jpg" alt="">
										<div class="image_over">
											<IconGoodView />
										</div>
									</div>
									</div>
								</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.images .image_hover {
		cursor: pointer;
		position: relative;
	}
	.images .image_hover .image_over {
		display: none;
		position: absolute; top: 0;
		width:  100%; height: calc(100% - 7px);
		transition:  all .2s ease-in-out;
	}
	.images .image_hover:hover .image_over {
		background: rgba(91, 112, 205, 0.48);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.images_row, .image_full {margin-bottom: 10px;}
	.images_row {display: flex; justify-content: space-between;}
	.images_row .image_part {
		width: 49%;
	}
	.images_row .image_part img {
		width: 100%;
	}

	.table-games {padding: 0 15px;}
	.table-games__row {
		border-bottom:  1px solid rgba(243, 243, 243, 0.02);
		display: flex;
		justify-content: space-between;
		padding: 15px 0;
	}
	.table-games .table-games__row:last-child {
		border:  none;
	}
	.table-games__row__title {
		color: #98A4B0;
		font-size: 13px;
		line-height: 22px;
	}
	.table-games__row__value {
		color: #F3F3F3;
		font-size: 13px;
		line-height: 22px;
	}

	.tabs {
		display: flex;
		justify-content: flex-start;
		list-style: none;
		border-bottom: 2px solid rgba(243, 243, 243, 0.05);
		height: 50px;
	}
	.tabs li i {
		position:  relative;
		top:  2px;
	}
	.tabs li span {
		margin-left:  10px;
	}
	.tabs li {
		margin-right:  10px;
		cursor: pointer;

		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: #F3F3F3;
		padding: 10px 15px 38px 15px;
		transition: color .2s ease-in-out;

		display:  flex;
		align-items: center;
	}
	.tabs li.active {
		color: #5B70CD;
		border-bottom: 2px solid #5B70CD;
	}
	.tabs li.active i svg path {
		fill: #5B70CD;
	}
	.tab {
		padding: 30px 0;
	}
</style>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  /*props: {
    data: {
      type: Object,
      required: true
    }
  },*/
  data() {
  	return {
  		requirements: [
  			{title: 'Game Client:', value: 'Steam'},
  			{title: 'Game Client:', value: 'Steam'},
  			{title: 'Game Client:', value: 'Steam'},
  			{title: 'Game Client:', value: 'Steam'},
  		],

  		checkbox1: false,
  		checkbox2: false,
  		checkbox3: false,

  		tab1: true,
  		tab2: false,
  		tab3: false,
  	}
  },
  methods: {
  	showModal() {
        this.$modal.show('example');
  	}
  }
})
</script>