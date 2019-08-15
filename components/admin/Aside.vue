<template>
  <el-menu
    :style="{height:'100%'}"
    :default-active="$route.path"
    router
  >
    <el-menu-item index="/admin">
      <i class="el-icon-data-analysis"></i>
      <span>Analythic</span> 
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline"></i>
      <span>Create</span> 
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-postcard"></i>
      <span>Posts</span> 
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Users</span> 
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-s-fold"></i>
      <span>Exit</span> 
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>