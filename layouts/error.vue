<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">
        Error 404
      </h1>
      <nuxt-link to="/">Return to the Home Page</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error{
    &-title{
      color: rgb(180, 42, 42);
      margin-bottom: 1rem;
    }
    &-layout{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    &-content{
      flex-direction: column;
      display: flex;
      align-items: center;
      padding-top: 4rem;
    }
  }
</style>