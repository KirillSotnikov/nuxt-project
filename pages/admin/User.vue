<template>
  <div>
    <el-form 
      :model="controls" 
      :rules="rules" 
      @submit.native.prevent="onSubmit"
      ref="form"
    >
      <h2>Add user</h2>
      <el-form-item label="Login" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="controls.password" />
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >
          Create
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
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Please enter your login.', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter your password.', trigger: 'blur' },
          { min: 6, message: 'Min 6 symbols!', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
       this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          
          try{
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }
            
            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('New user was created successfull')
            this.controls.login = ''
            this.controls.password = ''
            this.loading = false
          } catch(err) {
            this.loading = false
            throw new Error(err)
          }
        } else {
          return this.loading =false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-form{
    max-width: 500px;
  }
</style>