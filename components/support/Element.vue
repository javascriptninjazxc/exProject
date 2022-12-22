<template>
	<div class="page-support__element">
		<div class="info">
			<div class="icon">
				<img :src="data.icon" alt="">
			</div>
			<div class="text">
				<span class="title">{{data.title}}</span>
				<span v-if="data.status == 1" class="status online">Online</span>
				<span v-if="data.status == 0" class="status offline">Offline</span>
				<span v-if="data.description" class="description">{{data.description}}</span>
			</div>
		</div>
		<div class="buttons">
			<ButtonSecondary v-if="data.button">
				{{data.button}}
			</ButtonSecondary>
			<ButtonOutline v-if="data.button_outline">
				{{data.button_outline}}
			</ButtonOutline>
		</div>
	</div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { }
  },
})
</script>