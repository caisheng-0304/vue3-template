<template>
  <div>
     <div>
            num1:<input v-model.number="num1" style="width: 100px" />        <br />
            num2:<input v-model.number="num2" style="width: 100px" />    </div
    >
       <span>加法等于:{{ addNum }}</span>    <br />

    摩登生活1
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useAdd from '@/hooks/useAdd.js';

  const num1 = ref(2);
  const num2 = ref(1);
  const { addNum, addFn } = useAdd({ num1, num2 });
  addFn(num1.value, num2.value);
</script>

<style lang="less" scoped></style>
