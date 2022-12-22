import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  expires_at: '',
  started_at: '',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  licensed: (state) => state.expires_at !== '' && state.started_at !== '',
  expires: (state) => state.expires_at,
  started: (state) => state.started_at,
}

export const mutations: MutationTree<RootState> = {
  reset(state) {
    state.expires_at = ''
    state.started_at = ''
  },
  UPDATE_LICENSE(state, payload: typeof state) {
    state.expires_at = payload.expires_at
    state.started_at = payload.started_at
  },
}

export const actions: ActionTree<RootState, RootState> = {
  update({ commit }) {
    return new Promise((resolve: (value?: unknown) => void, reject) => {
      this.$axios
        .get('/v1/licenses/')
        .then((response) => {
          if (response.status === 200) {
            commit('UPDATE_LICENSE', response.data)
          } else {
            commit('UPDATE_LICENSE', {
              expires_at: '',
              started_at: '',
            })
          }
          resolve()
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
  activate({ commit }, code: string) {
    return new Promise((resolve: (value?: unknown) => void, reject) => {
      this.$axios
        .put(`/v1/licenses/`, { code })
        .then((response) => {
          if (response.status === 200) {
            commit('UPDATE_LICENSE', response.data.license_data)
            resolve(true)
          } else {
            resolve(false)
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
}
