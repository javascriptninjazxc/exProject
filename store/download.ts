import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface IDownload {
  id: number
  title: string
  description: string
  url?: string
  file_id?: string
}

export const state = () => ({
  items: [] as IDownload[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  items: (state) => state.items,
}

export const mutations: MutationTree<RootState> = {
  SET_ITEMS(state, payload: IDownload[]) {
    state.items = payload
  },
  reset(state) {
    state.items = []
  },
}

export const actions: ActionTree<RootState, RootState> = {
  update({ commit }) {
    return new Promise((resolve: (value?: unknown) => void, reject) => {
      this.$axios
        .get('/v1/download/')
        .then((response) => {
          if (response.status === 200) {
            commit('SET_ITEMS', response.data)
          }
          resolve()
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
  download(_, payload) {
    return new Promise((resolve: (value?: unknown) => void, reject) => {
      this.$axios
        .get(`/v1/download/${payload.file_id}`, {
          responseType: 'blob',
          params: {
            token: payload.token,
          },
        })
        .then((response) => {
          resolve(response)
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
}
