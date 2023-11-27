<template>
  <div>
    <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect" router>
      <el-menu-item v-for="(item, index) in routes" :key="index" :index="item.path" route>{{ item.meta.title }} </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
  import { constantRoutes } from '../../router/root.js';
  const router = useRouter();
  const route = useRoute();
  const routes = computed(() => constantRoutes[0].children);
  const activeIndex = ref('all');
  const handleSelect = (name) => {
    console.log('name', name);
    activeIndex.value = name;
    router.replace({ name });
  };
  // onBeforeRouteUpdate((to,from)=>{
  //   activeIndex.value = to.name
  // })
</script>

<style lang="less" scoped>
  .menu {
    width: 100%;
    justify-content: center;
    border: none !important;
  }
  :deep(.el-menu--horizontal > .el-menu-item.is-active) {
    border: none !important;
  }
  :deep(.el-menu--horizontal > .el-menu-item) {
    position: relative;
    border: none !important;
    background-color: transparent !important;
    &:hover {
      background-color: transparent !important;
    }
    &::after {
      content: ' ';
      width: 1px;
      height: 30%;
      background-color: #ccc;
      position: absolute;
      right: 0px;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
  .box {
    background-color: transparent;
  }
</style>
