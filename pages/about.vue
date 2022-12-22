<template>
	<div class="main-container">
		<div class="main-breadcrumb">
			<NuxtLink to="/">Home</NuxtLink>
			> 
			<span>{{name}}</span>
		</div>
		
		<div class="page-about">
			<div class="page-about-header">
				<div class="page-about-header-info">
					<h1>About Us</h1>
					<p>Diego, a hopeless romantic desperately trying to salvage his relationship with long time girlfriend Sofía, plans a beach getaway to propose and clear the air. A 'chance' encounter with Sofía's old friend Malena will cast doubts on his relationship and skewed understanding of love, quickly turning a perfect weekend in paradise into Diego's worst nightmare.</p>
					<div class="buttons">
						<button class="btn telegram">
							<IconAboutTelegram />
							<span>Telegram</span>
						</button>
						<button class="btn youtube">
							<IconAboutYoutube />
							<span>YouTube</span>
						</button>
						<button class="btn vk">
							<IconAboutVk />
							<span>Vkontakte</span>
						</button>
						<button class="btn discord">
							<IconAboutDiscord />
							<span>Discord</span>
						</button>
					</div>
				</div>
				<div class="page-about-header-icon">
					<IconAbout />
				</div>
			</div>

			<div class="page-about-otz">
				<div class="page-about-otz-title">
					They Talk About Us
				</div>
				<div class="page-about-otz-blocks">
					<AboutTalk />
					<AboutTalk />
					<AboutTalk />
					<AboutTalk />
				</div>
			</div>

			<div class="page-about-reviews">
				<div class="page-about-reviews-title">
					User Reviews
				</div>

				<div v-if="pageNumber == 0" class="page-about-reviews-blocks">
					<AboutReview />
					<AboutReview />
					<AboutReview />
					<AboutReview />
				</div>

				<div v-if="pageNumber == 1" class="page-about-reviews-blocks">
					<AboutReview />
					<AboutReview />
				</div>

				<div>
					 <div class="page-about-reviews-paginate">
		              <ButtonPaginate
		                  :disabled="pageNumber == 0" 
		                  @click="pageNumber = 0">
		                  1
		              </ButtonPaginate>
		              <ButtonPaginate 
		                  :disabled="pageNumber == 1" 
		                  @click="pageNumber = 1">
		                  2
		              </ButtonPaginate>
		              </div>
             	</div>

			</div>
		</div>
	</div>
</template>




  <script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data(){
    return {
      name: "About",
      link: "/about",

      pageNumber: 0,
      pageCount: 2,
    }
  },
  methods:{
      nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      }
  },
  setup() {

  }
})
</script>