import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

export default defineNuxtMiddleware(({ isDev, error }) => {
  if (!isDev) {
    error({ statusCode: 404, message: 'This page could not be found' })
  }
})
