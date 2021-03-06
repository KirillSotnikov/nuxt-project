<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>{{post.title}}</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          {{ post.date | date }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          {{post.views}}
        </small>
      </div>
      <div class="post-image">
        <img 
        :src="post.imageUrl" 
        alt="">
      </div>
    </header>
    <main class="post-content">
      <vue-markdown>{{post.text}}</vue-markdown>
    </main>
    <footer>
      <!-- FORM -->
      <app-comment-form 
      :postId="post._id" 
      v-if="canAddComment" 
      @created="createCommentHandler" />
      <div class="comments" v-if="post.comments.length">
        <app-comment 
          v-for="comment in post.comments" 
          :key="comment._id"
          :comment="comment"></app-comment>
      </div>
      <div class="text-center" v-else>There are not comments! :(</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
  head() {
    return {
      title: `${this.post.title} | ${process.env.appName}`
    }
  },
  components: {
    AppComment,
    AppCommentForm
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', post)
    return {
      post: {
        ...post,
        views: ++post.views
      }
    }
  },
  data() {
    return {
      canAddComment: true
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  methods: {
    createCommentHandler(comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .post{
    max-width: 600px;
    margin: 0 auto;
    &-header{
      margin-bottom: 1.5rem;
    }
    &-title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 24px;
    }
    &-info{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .5rem;
    }
    &-image{
      img{
        width: 100%;
      }
    }
    &-content{
      margin-bottom: 2rem;
    }
  }
</style>