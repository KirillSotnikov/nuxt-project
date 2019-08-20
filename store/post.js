const posts = [
  {
    title: 'Post 1',
    date: new Date(),
    views: 22,
    comments: [1,2],
    _id: 'id1'
  },
  {
    title: 'Post 2',
    date: new Date(),
    views: 12,
    comments: [3,6,12],
    _id: 'id2'
  }
]

export const actions = {
  async fetch({commit}) {
    try{
      return await this.$axios.$get('/api/post')
    } catch(err) {
      throw new Error(err)
    }
  },
  async fetchById({commit}, payload) {
    try{
      return await this.$axios.$get(`/api/post/${payload}`)
    } catch(err) {
      throw new Error(err)
    }
  },
  async addView({commit}, {views, _id}) {
    try{
      return await this.$axios.$put(`/api/post/add/view/${_id}`, {views})
    } catch(err) {
      throw new Error(err)
    }
  },


  async fetchAdmin({commit}) {
    try{
      return await this.$axios.$get('/api/post/admin')
    } catch(err) {
      throw new Error(err)
    }
  },
  async remove({commit}, payload) {
    try{
      return await this.$axios.$delete(`/api/post/admin/${payload}`)
    } catch(err) {
      throw new Error(err)
    }
  },
  async fetchAdminById({commit}, payload){
    try{
      return await this.$axios.$get(`/api/post/admin/${payload}`)
    } catch(err) {
      throw new Error(err)
    }
  },
  async update({commit}, payload) {
    try{
      return await this.$axios.$put(`/api/post/admin/${payload.id}`, {text:payload.text})
    } catch(err) {
      throw new Error(err)
    }
  },
  async create({commit}, payload) {

    try{
      const formData = new FormData()

      formData.append('title', payload.title)
      formData.append('text', payload.text)
      formData.append('image', payload.image, payload.image.name)

      return await this.$axios.$post('/api/post/admin', formData)
    } catch(err) {
      console.log(err)
      throw new Error(err)
    }
  }
}
