<template>
  <div class="home flex">
    <div class="left-fixed">
      <Tabs class="tabs-main absolute"/>
    </div>
    <div class="right">
      <ul class="indexmenu flex">
        <li class="item-li  justify-between" v-for="(item,index) in list" :key="index">
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Tabs from '@/components/tabs/index.vue';
  const list = ref([
    {
      title: '前言',
      desc: '',
    },
    {
      title: '第一部分',
      desc: '羊城',
    },
    {
      title: '第一部分',
      desc: '羊城',
    },
    {
      title: '第一部分',
      desc: '羊城',
    },
    {
      title: '第一部分',
      desc: '羊城',
    },
    {
      title: '第一部分',
      desc: '羊城',
    },
  ]);
 
  console.log('list', list.value);
  const onMouseover = (index) => {
    console.log('鼠标移入', index);
    initList(2)
  };
  const onMouseout = (e) => {
    console.log('鼠标移出');
    initList(3);
  };
</script>

<style lang="less" scoped>
.home{
  height: 100vh;
  overflow: hidden;
  .left-fixed{
    flex: 0 0 25%;
    height: 100%;
    border: 1px solid red;
    flex-shrink: 0;
    position: relative;
    .tabs-main{
      width: 100%;
      bottom: 10%;
      padding: 0 10%;
    }
  }
  .right{
    flex: 1;
    border: 1px solid blue;
    .indexmenu{
      height: 100%;
     
      .item-li{
        margin-right: 10px;
        height: 100%;
        width: 100%;
        border: 1px solid ;
        transition: all .3s cubic-bezier(.165,.84,.44,1);
        &:hover{
          width: 120% !important;
      }
      }
      .item-li:last-child{
        margin-right: 0 !important;
      }
    }
  }
}
</style>
