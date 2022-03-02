import {createApp} from 'vue'
import App from './App.vue'
import Router from './config/router';
import NaverMaps from "vue3-naver-maps";
import VueEasyLightbox from 'vue-easy-lightbox'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "animate.css";
import "./assets/css/style.css"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


createApp(App)
    .use(Router)
    .use(NaverMaps, {clientId: "s3ee9cvo5x", category: "ncp"})
    .use(VueEasyLightbox)
    .use(Antd)
    .mount('#app')


