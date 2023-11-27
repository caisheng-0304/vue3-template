<template>
  <div class="tabs flex items-center justify-between">
      <router-link class="tab" v-for="(item, index) in tabsList" :key="index" :to="{name:item.name}" >{{ item.title }}</router-link>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    tabsList: {
      type: Array,
      default: () => [
        {
          title: '展品图库',
          name: 'all',
        },
        {
          title: '问卷调查',
          name: 'all',
        },
        {
          title: '趣味游戏',
          name: 'all',
        },
      ],
    },
  });
</script>

<style lang="less" scoped>
.tabs{
  .tab{
    width:70px;
    height:70px;
    border-radius: 50%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
