import { createApp } from 'vue';
import Vue3Lottie from 'vue3-lottie';
import { VueRecaptchaPlugin } from 'vue-recaptcha/head';
import App from './App.vue';
import './style.scss';

createApp(App)
   .use(VueRecaptchaPlugin, {
      v3SiteKey: import.meta.env.VITE_RECAPTCHA_KEY,
   })
   .use(Vue3Lottie)
   .mount('#app');
