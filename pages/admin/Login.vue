<template>
  <el-card
    shadow="always"
    :style="{width:'500px'}"
  >
    <el-form 
      :model="controls" 
      :rules="rules" 
      @submit.native.prevent="onSubmit"
      ref="form"
    >
      <h2>Enter to admin panel</h2>
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
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout:'empty',
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
  mounted() {
    const {message} = this.$route.query

    switch (message) {
      case 'login' : {
        this.$message.info('You are not authorized!')
        break
      }
      case 'logout' : {
        this.$message.success('Logout success.')
        break
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
            
            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/admin/')
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