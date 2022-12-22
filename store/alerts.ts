import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface IAlert {
  status: number
  title: string
  text: string
  id: number
}

export const state = () => ({
  alerts: [] as IAlert[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  items: (state) => state.alerts,
}

export const mutations: MutationTree<RootState> = {
  PUSH_ALERT(state, payload: IAlert) {
    state.alerts.push(payload)
  },
  REMOVE_ALERT(state, payload: IAlert) {
    state.alerts.splice(state.alerts.indexOf(payload), 1)
  },
}

export const actions: ActionTree<RootState, RootState> = {
  push({ commit }, payload: IAlert) {
    payload.id = Date.now()
    commit('PUSH_ALERT', payload)
  },
  remove({ commit }, payload: IAlert) {
    commit('REMOVE_ALERT', payload)
  },
}
