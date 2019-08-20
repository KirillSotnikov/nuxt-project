export const state = () => ({
  token : true
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
      console.log('token', token)
      dispatch('setToken', token)
    } catch(err) {
      throw new Error(err)
    }
  },
  setToken({commit}, payload) {
    commit('setToken', payload)
  },
  logout({commit}) {
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
  }
}