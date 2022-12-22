import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface IProduct {
  id: number
  title: string
  price: number
  sale_price?: number
}

export const state = () => ({
  items: [] as IProduct[],
  selected: undefined as IProduct | undefined,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  items: (state) => state.items,
  selected: (state) => (state.selected ? state.selected : state.items[0]),
}

export const mutations: MutationTree<RootState> = {
  load(state, payload: IProduct[]) {
    state.items = payload
  },
  select(state, payload) {
    state.selected = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  update({ commit }) {
    return new Promise((resolve: (value?: unknown) => void, reject) => {
      this.$axios
        .get('/v1/products/')
        .then((response) => {
          if (response.status === 200) {
            commit('load', response.data)
          }
          resolve()
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
}
