import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import createPersistedState from 'vuex-persistedstate'
/* import * as Cookies from 'js-cookie'
import cookie from 'cookie' */
export default defineNuxtPlugin((ctx) => {
  createPersistedState({
    paths: ['auth.token', 'products.items', 'vars.reseller.country'],
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: (key) => localStorage.removeItem(key),
    },
  })(ctx.store)
  ctx.app.router!.beforeEach(async (to, _, next) => {
    if (!ctx.store.getters.clientInit) {
      await ctx.store.dispatch('nuxtClientInit')
      ctx.store.commit('CLIENT_INIT')
    }
    await ctx.store.dispatch('beforeRoute', {
      ctx,
      to,
    })
    next()
  })
  /* const store = ctx.store
  createPersistedState({
    paths: ['auth.token'],
    storage: {
      getItem: (key) => {
        if (process.server) {
          if (ctx.req.headers.cookie) {
            return cookie.parse(ctx.req.headers.cookie)[key]
          }
          return {}
        } else {
          return Cookies.get(key)
        }
      },
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 7, secure: false }),
      removeItem: (key) => Cookies.remove(key),
    },
  })(store) */
})
