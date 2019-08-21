export const actions = {
  async create({commit}, payload) {
    try{
      return await this.$axios.$post(`/api/comment`, payload)
    } catch(err){
      console.log(err)
      throw new Error(err)
    }
  }
}