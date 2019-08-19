<template>
  <div>
    <el-form 
      :model="controls" 
      :rules="rules" 
      @submit.native.prevent="onSubmit"
      ref="form"
    >
      <h1>Create new post</h1>
      <el-form-item label="Title" prop="title">
        <el-input v-model.trim="controls.title" />
      </el-form-item>
      <el-form-item label="Text in format .md or .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model.trim="controls.text" />
      </el-form-item>


      <el-form-item>
        <el-button 
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >
          Create post
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout:'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      loading: false,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        title: [
          { required: true, message: 'Please enter title.', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Please enter text.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if(valid) {
          this.loading = true
          const formData = {
            title: this.controls.title,
            text: this.controls.text
          }
          try{
            await this.$store.dispatch('post/create', formData)
            this.controls.title = ''
            this.controls.text = ''
            this.$message.success('Post was created.')
          } catch(err) {
            
          } finally {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  form{
    max-width: 600px;
  }
</style>