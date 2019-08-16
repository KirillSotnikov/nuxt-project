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
    const token = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('mock-token')
      }, 2000)
    })
    dispatch('setToken', token)
  },
  setToken({commit}, payload) {
    commit('setToken', payload)
  },
  logout({commit}) {
    commit('clearToken')
  },
  async createUser({commit}, payload) {
    try{
      console.log('createUser', payload)
    } catch(err) {
      console.log(err)
      throw new Error(err)
    }
  }
}

export const getters = {
  isAuth(state) {
    return Boolean(state.token)
  }
}