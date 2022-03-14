import {createApp} from 'vue'
import App from './App.vue'
import Router from './config/router';
import NaverMaps from "vue3-naver-maps";
import Antd from 'ant-design-vue';
import VueClipboard from 'vue3-clipboard'
import 'ant-design-vue/dist/antd.css';
import "animate.css";
import "./assets/css/style.css"

createApp(App)
    .use(Router)
    .use(NaverMaps, {clientId: "s3ee9cvo5x", category: "ncp"})
    .use(Antd)
    .use(VueClipboard, {
        autoSetContainer: true,
        appendToBody: true,
    })
    .mount('#app')


