<template>
  <div class="home-advantages__card">
    <slot />
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  setup() {
    return { }
  },
})
</script>