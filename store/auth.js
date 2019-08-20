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
  },
  logout({commit}) {
    this.$axios.setToken(false)
    commit('clearToken')
  },
  async createUser({commit}, payload) {
    try{
      await this.$axios.$post('/api/auth/admin/create', payload)
    } catch(err) {
      console.error(err)
      throw err
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