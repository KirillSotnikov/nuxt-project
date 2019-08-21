<template>
  <div>
    <el-table
      :data="posts"
      style="width: 100%"
    >
      <el-table-column
        prop="title"
        label="Name"
      >

      </el-table-column>
      <el-table-column
        label="Date"
      >
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">
        {{ date | date('date') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Views"
      >
        <template slot-scope="{row: {views}}">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">{{ views }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Comments"
      >
        <template slot-scope="{row: {comments}}">
          <i class="el-icon-s-comment"></i>
          <span style="margin-left: 10px">{{ comments.length }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="{ row }">
          <el-tooltip effect="dark" content="Edit post" placement="top">
            <el-button
            type="primary"
            circle
            icon="el-icon-edit"
              @click="open(row._id)"
            />
          </el-tooltip>
          <el-tooltip effect="dark" content="Delete post" placement="top">
            <el-button
            circle
            icon="el-icon-delete"
              type="danger"
              @click="remove(row._id)"
            />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `All posts | ${process.env.appName}`
    }
  },
  layout:'admin',
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdmin')
    return {posts}
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    async remove(id) {
      try{
        await this.$confirm(`Do you want to delete post #${id}?`, 'Warning!', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })
        await this.$store.dispatch('post/remove', id)

        this.posts = this.posts.filter(p => p._id !== id)

        this.$message.success('Post was deleted.')
      } catch(err) {

      }
    }
  }
}
</script>