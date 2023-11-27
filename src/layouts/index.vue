<template>
  <div class="common-layout">
    <el-container style="width: 100%; height: 100%">
      <el-aside width="535px" style="border: 1px solid">Aside</el-aside>
      <el-container>
        <el-header style="border: 1px solid pink">
          <Header />
        </el-header>
        <el-main style="border: 1px solid red">
          <router-view  />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from '@/layouts/Header/index.vue'
</script>

<style lang="less" scoped>
  .common-layout {
    height: 100vh;
  }
</style>
