<template>
  <div class="input__code" autofocus>
    <div v-for="idx in 6" :key="`${idx}-code-block`" class="box">
      {{ value.length >= idx ? value[idx - 1] : '-' }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  toRefs,
} from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { emit }) {
    const { value, enabled } = toRefs(props)
    const keyDown = (event: KeyboardEvent) => {
      /*if (!enabled.value) {
        return
      }*/
      if (value.value.length < 6) {
        if (event.key >= '0' && event.key <= '9') {
          emit('input', value.value + event.key)
        }
      }
      if (event.key === 'Backspace') {
        emit('input', value.value.slice(0, value.value.length - 1))
      }
    }
    const pasteEvent = (event: Event) => {
      /*if (!enabled.value) {
        return
      }*/
      const data = (event as ClipboardEvent)
        .clipboardData!.getData('text')
        .replace(/\s/g, '')
      if (/^\d+$/.exec(data)) {
        emit('input', (value.value + data).slice(0, 6))
      }
    }
    onMounted(() => {
      window.addEventListener('keydown', keyDown)
      window.addEventListener('paste', pasteEvent)
    })
    onUnmounted(() => {
      window.removeEventListener('keydown', keyDown)
      window.removeEventListener('paste', pasteEvent)
    })
    return {}
  },
})
</script>