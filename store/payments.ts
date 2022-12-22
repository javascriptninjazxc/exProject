import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface IPayment {
  id: number
  product: number
  product_title: string
  user_id: number
  gifted_by?: number
  payed: boolean
  crypto_amount: number
  provider: string
  wallet: string
}

export const state = () => ({
  items: [] as IPayment[],
  current: undefined as IPayment | undefined,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  items: (state) => {
    return state.items
  },
  current: (state) => state.current,
}

export const mutations: MutationTree<RootState> = {
  reset(state) {
    state.items = []
    state.current = undefined
  },
  setCurrent(state, payload: IPayment) {
    state.current = payload
  },
  SET_ITEMS(state, payload: IPayment[]) {
    state.items = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  current({ commit }, paymentId: number) {
    return new Promise((resolve: (value?: unknown) => void, reject) => {
      this.$axios
        .get(`/v1/payments/${paymentId}`)
        .then((response) => {
          if (response.status === 200) {
            commit('setCurrent', response.data)
            return resolve(true)
          }
          resolve(false)
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
  update({ commit }) {
    return new Promise((resolve: (value?: unknown) => void, reject) => {
      this.$axios
        .get('/v1/payments/')
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
}
