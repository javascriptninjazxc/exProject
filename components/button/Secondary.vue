<template>
  <Button 
    class="btn btn-secondary"
    @click="$emit('click')"
  >
    <slot />
  </Button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return { }
  },
})
</script>