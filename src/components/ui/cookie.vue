<script setup>
import aButtonLarge from './aButtonLarge.vue';
import { ref, onMounted } from 'vue';

const show = ref(false);

function getCookie(name) {
   const value = `; ${document.cookie}`;
   const parts = value.split(`; ${name}=`);
   if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
   const d = new Date();
   d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
   document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

function acceptCookies() {
   setCookie('cookie_accepted', 'true', 14);
   show.value = false;
}

onMounted(() => {
   if (!getCookie('cookie_accepted')) {
      show.value = true;
   }
});
</script>

<template>
   <div v-if="show" class="messages-wrapper">
      <div class="Popup">
         <div class="content-wrapper Popup-Content">
            <p class="Popup-P text-16 text-white">
               Нажимая «Хорошо» или&nbsp;продолжая работу на&nbsp;сайте, вы&nbsp;соглашаетесь с&nbsp;
               <a href="/politics" style="text-decoration: underline">условиями</a> обработки cookie и&nbsp;ваших данных о&nbsp;поведении
               на&nbsp;сайте, необходимых для&nbsp;аналитики. Запретить обработку cookie вы&nbsp;можете через&nbsp;браузер.
            </p>
            <aButtonLarge class="Popup-Action" @handle-click="acceptCookies" :pink-style="true" title="Хорошо" />
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.Popup {
   position: fixed;
   left: 0;
   bottom: 0;

   padding: 20px 0;
   width: 100%;
   height: auto;

   background-color: var(--black-bg);
   border-radius: 30px 30px 0 0;
   z-index: 100;

   @media (max-width: 719px) {
      padding: 12px 10px 10px 10px;
      border-radius: 20px 20px 0 0;
   }
}

.Popup-Content {
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 40px;

   @media (max-width: 719px) {
      flex-direction: column;
      gap: 20px;
   }
}

.Popup-Action {
   min-width: 180px;
   max-width: 180px;
   height: 60px;
   font-size: 16px;
   border-radius: 12px;

   @media (max-width: 1023px) {
      min-width: 132px;
      max-width: 132px;
      height: 46px;
      font-size: 14px;
   }

   @media (max-width: 719px) {
      width: 100%;
      max-width: unset;
      height: 52px;
   }
}
</style>
