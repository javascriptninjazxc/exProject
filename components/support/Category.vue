<template>
	<div class="page-support__category">
		<div class="page-support__category__title">
			{{data.title}}
		</div>
		<div class="page-support__category__content">
			<slot />
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