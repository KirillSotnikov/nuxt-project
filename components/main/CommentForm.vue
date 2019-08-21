<template>
    <el-form 
      :model="controls" 
      :rules="rules" 
      @submit.native.prevent="onSubmit"
      ref="form"
    >
      <h1>Add Comment</h1>
      <el-form-item label="Your name" prop="name">
        <el-input v-model="controls.name" />
      </el-form-item>
      <el-form-item label="Comment text" prop="text">
        <el-input type="textarea" v-model="controls.text" resize="none" :rows="2" />
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >
          Add comment
        </el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: 'Name must not be empty!', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Please enter your comment.', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  methods: {
    onSubmit() {
       this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          
          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: this.postId
          }
          try{
              const newComment = await this.$store.dispatch('comment/create', formData)
              this.$message.success('Comment was added')
              this.$emit('created', newComment)
          } catch(err) {
            this.loading = false
            throw new Error(err)
          }
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>