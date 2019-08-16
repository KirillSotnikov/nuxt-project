export const state = () => ({
  token : null
})

export const mutations = {
  setToken(state, payload) {
    state.token = payload
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
  }
}

export const getters = {
  isAuth(state) {
    return Boolean(state.token)
  }
}