<template>
  <el-card 
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
      <h3>{{post.title}}</h3>

      <small>
        <i class="el-icon-time"></i>
        {{ new Date(post.date).toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img 
        :src="post.imageUrl" 
        alt="" 
        class="post-image">
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Open</el-button>
      <span>
        <i class="el-icon-s-comment"></i>
        {{post.comments.length}}
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost() {
      const id = this.post._id
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.post{
  margin-bottom: 1.5rem;
  &-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-image{
    width: 100%;
  }
  &-body{

  }
  &-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }
}
</style>