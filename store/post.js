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
  async fetchAdmin({commit}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 500)
    })
  },
  async remove({commit}, payload) {
    
  },
  async fetchAdminById({commit}, payload){
    // console.log(payload)
    return await new Promise(resolve => {
      setTimeout(() => {
        let post = posts.find(item => {
          return item._id == payload
        })
        resolve(post)
      }, 500)
    })
  },
  async update({commit}, payload) {

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
