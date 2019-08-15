<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>{{ new Date().toLocaleString() }}</small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img 
        src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
        alt="">
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta consequuntur id totam facilis quas perspiciatis. Sint quae odio perspiciatis illum corrupti minus non voluptatibus tenetur. Officia ullam sapiente ipsa.</p>
      <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta consequuntur id totam facilis quas perspiciatis. Sint quae odio perspiciatis illum corrupti minus non voluptatibus tenetur. Officia ullam sapiente ipsa.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta consequuntur id totam facilis quas perspiciatis. Sint quae odio perspiciatis illum corrupti minus non voluptatibus tenetur. Officia ullam sapiente ipsa.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta consequuntur id totam facilis quas perspiciatis. Sint quae odio perspiciatis illum corrupti minus non voluptatibus tenetur. Officia ullam sapiente ipsa.</p> -->
    </main>
    <footer>
      <!-- FORM -->
      <app-comment-form v-if="canAddComment" @created="createCommentHandler" />
      <div class="comments" v-if="true">
        <app-comment 
          v-for="comment in 4" 
          :key="comment"
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
  components: {
    AppComment,
    AppCommentForm
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
    createCommentHandler() {
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