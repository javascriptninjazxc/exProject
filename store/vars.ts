import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface ICountry {
  key: string
  title: string
  image: string
}

export interface IAcceptConfig {
  visa: boolean
  mastercard: boolean
  paypal: boolean
  qiwi: boolean
  yoomoney: boolean
  webmoney: boolean
  crypto: boolean
  steam_skins: boolean
  alipay: boolean
  gift_cards: boolean
  bank_transfer: boolean
  paysafe: boolean
  skrill: boolean
  local_payments: boolean
}

export interface IContactConfig {
  telegram?: string
  discord?: string
  vk?: string
  website?: string
  qq?: string
  we_chat?: string
}

export interface ISeller {
  name: string
  avatar: string
  description: string
  automatic_payments: boolean
  accepting: IAcceptConfig
  languages: string[]
  contacts: IContactConfig
}

export const state = () => ({
  imagePreviewSrc: null,
  review: false,
  reseller: {
    country: {
      key: 'rus',
      title: 'Russia',
      image: '',
    },
  },
  forms: {
    gift: false,
    payment: {
      enabled: false,
      gift: 0,
    },
    login: {
      enabled: false,
      email: '',
    },
    password: false,
    country: false,
    seller: {
      enabled: false,
      card: {} as ISeller,
    },
  },
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  imagePreviewSrc: (state) => state.imagePreviewSrc,
  forms: (state) => state.forms,
  review: (state) => state.review,
  country: (state) => state.reseller.country,
}

export const mutations: MutationTree<RootState> = {
  SET_IMAGE_PREVIEW(state, src) {
    state.imagePreviewSrc = src
  },
  forms(state, obj) {
    Object.assign(state.forms, obj)
  },
  review(state, force = true) {
    state.review = force
  },
  country(state, country: ICountry) {
    state.reseller.country = country
  },
}

export const actions: ActionTree<RootState, RootState> = {}
