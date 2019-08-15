<template>
  <el-card 
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
      <h3>Post title</h3>

      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img 
        src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
        alt="" 
        class="post-image">
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Open</el-button>
      <span>
        <i class="el-icon-s-comment"></i>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id'
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