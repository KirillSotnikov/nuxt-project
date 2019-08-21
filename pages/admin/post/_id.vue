<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/admin/list">Posts</el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form 
      :model="controls" 
      :rules="rules" 
      @submit.native.prevent="onSubmit"
      ref="form"
      style="margin-top: 2rem"
    >
      <!-- <h2>Enter to admin panel</h2> -->
      <el-form-item label="Text in format .md or .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model.trim="controls.text" />
      </el-form-item>

      <div class="mb">
        <small style="margin-right: 2rem">
          <i class="el-icon-time"></i>
          <span>
            {{ post.date | date }}
          </span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span>
            {{post.views}}
          </span>
        </small>
      </div>

      <el-form-item>
        <el-button 
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >
          Update
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout:'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Edit - ${this.post.title} | ${process.env.appName}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData( {store, params} ) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return {post}
  },
  data() {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Please enter text.', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.controls.text = this.post.text
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if(valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            id: this.post._id
          }

          try{
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Post was updated.')
            this.loading = false
          } catch(err) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrap{
  max-width: 600px;
}
.mb{
  margin-bottom: 1rem;
}
</style>