import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface IUser {
  id: number
  // eslint-disable-next-line camelcase
  created_at: string
  email: string
}

export const state = () => ({
  token: null,
  needBuySub: false,
  wasRegistered: false,
  user: {
    id: -1,
    created_at: '',
    email: '',
  } as IUser,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  token: (state) => {
    return state.token
  },
  isAuth: (state) => {
    return !!state.token
  },
  user: (state) => {
    return state.user! as IUser
  },
  needBuySub: (state) => {
    return state.needBuySub
  },
  isReg: (state) => {
    return state.wasRegistered
  },
}

export const mutations: MutationTree<RootState> = {
  SET_TOKEN(state, payload) {
    state.token = payload
    state.user.id = -1
  },
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_BUY(state, value) {
    state.needBuySub = value
  },
  SET_REGISTERED(state, value) {
    state.wasRegistered = value
  },
}

export interface IAuthRequest {
  captcha?: string
  email: string
  code?: number
  password?: string
}

export const actions: ActionTree<RootState, RootState> = {
  send({ commit }, email: string) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/v1/account/auth', {
          email,
          captcha: '',
          code: 0,
        })
        .then((response) => {
          if (response.status === 200) {
            commit('SET_REGISTERED', response.data.me.was_registered)
          }
          resolve(response)
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
  tokenPassword({ commit }, payload: IAuthRequest) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/v1/account/auth', payload)
        .then((response) => {
          if (response.status === 200) {
            commit('SET_TOKEN', response.data.access_token.code)
            commit('SET_USER', response.data.me.user)
          }
          resolve(response)
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
  token({ commit }, payload: IAuthRequest) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/v1/account/auth', payload)
        .then((response) => {
          if (response.status === 200) {
            commit('SET_TOKEN', response.data.access_token.code)
            commit('SET_USER', response.data.me.user)
          }
          resolve(response)
        })
        .catch((e) => {
          reject(e)
        })
    })
  },
  update({ commit, getters }) {
    return new Promise((resolve: (value?: unknown) => void, reject) => {
      if (getters.isAuth) {
        this.$axios
          .get('/v1/account/@me')
          .then((response) => {
            if (response.status === 200) {
              commit('SET_USER', response.data)
            }
            resolve()
          })
          .catch((e) => {
            reject(e)
          })
      } else {
        resolve()
      }
    })
  },
  logout({ commit }) {
    commit('SET_TOKEN', null)
  },
}
