<template>
  <el-card
    class="comment"
  >
    <div class="comment-header">
      <span>{{comment.name}}</span>
      <span>
        <i class="el-icon-time"></i>
        {{ comment.data | date }}
      </span>
    </div>
    <div class="comment-text">
      <p>{{comment.text}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment{
    margin-bottom: 1rem;
    &-header{
      display: flex;
      justify-content: space-between;
      margin-bottom: .5rem;
      font-size: .8rem;
    }
    &-text{
      white-space: pre-line;
    }
  }
</style>