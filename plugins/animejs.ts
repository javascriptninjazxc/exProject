import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import anime, { AnimeParams, AnimeInstance } from 'animejs'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $anime: (params: AnimeParams) => AnimeInstance
  }
  interface Context {
    $anime: (params: AnimeParams) => AnimeInstance
  }
}
declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $anime: (params: AnimeParams) => AnimeInstance
  }
}

export default defineNuxtPlugin((_, inject) => {
  inject('anime', anime)
})
