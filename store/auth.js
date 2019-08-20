import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export const state = () => ({
  token : null
})

export const mutations = {
  setToken(state, payload) {
    state.token = payload
  },
  clearToken(state){
    state.token = null
  }
}

export const actions = {
  async login({commit, dispatch}, payload) {
    try{
      const {token} = await this.$axios.$post('/api/auth/admin/login', payload)
      dispatch('setToken', token)
    } catch(err) {
      alert(err.response.data.message)
    }
  },
  setToken({commit}, payload) {
    this.$axios.setToken(payload, 'Bearer')
    commit('setToken', payload)
    Cookies.set('jwt-token', payload)
  },
  logout({commit}) {
    this.$axios.setToken(false)
    commit('clearToken')
    Cookies.remove('jwt-token')
  },
  async createUser({commit}, payload) {
    try{
      await this.$axios.$post('/api/auth/admin/create', payload)
    } catch(err) {
      console.error(err)
      throw err
    }
  },
  async autoLogin({commit, dispatch}) {
    const cookieStr = process.browser
      ? document.cookie 
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']

    if(isJWTValid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuth(state) {
    return Boolean(state.token)
  },
  token() {
    return state.token
  }
}

function isJWTValid(token){
  if(!token) {
    return false
  }

  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return (new Date().getTime() / 1000) < expires
}