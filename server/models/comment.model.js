const {model, Schema} = require('mongoose')

const commentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  },
  postId: {
    ref: 'posts',
    type: Schema.Types.ObjectId
  }
})

module.exports = model('comments', commentSchema)