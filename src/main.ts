import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import piniaStore from './store';

import '@/styles/index.less';
import '@/styles/reset.less';

import 'virtual:windi.css'

// 支持SVG
import 'virtual:svg-icons-register';
import '@arco-design/web-vue/dist/arco.css';


//vue3的挂载方式
const app = createApp(App);

app.use(router);
app.use(piniaStore);

app.mount('#app');
