<script setup>
import { ref, onMounted } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useRecaptchaProvider } from 'vue-recaptcha/head';

import { useGsap } from '/src/hooks/useGsap.js';
import { getData } from './hooks/useAxios';

import Burger from './components/burger.vue';
import Header from './components/header.vue';
import Main from './components/main.vue';
import Footer from './components/footer.vue';

const SERVER_PROTOCOL = import.meta.env.VITE_SERVER_PROTOCOL;
const SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;
const API_PREFIX = import.meta.env.VITE_API_PREFIX;


const FOOTER = ref(null);
const FOOTER_PARAMETERS = useElementSize(FOOTER);

const gsap = useGsap();

// КОНТАКТНЫЕ ДАННЫЕ
const CONTACTS_DATA = ref({
   data: {
      NAME: "Основная информация",
      PHONE_COMPANY: "+7 (926) 073-23-73",
      EMAIL_COMPANY: "modifikat@inbox.ru",
      ADDRESS_MAP_COMPANY: "Московская область, г. Орехово-Зуево, Малодубенское шоссе д. 3",
      INN_COMPANY: "5034066048",
      KPP_COMPANY: "503401001",
      OGRN_COMPANY: "1235000109244",
      OKPO_COMPANY: "49728606",
      RAS_SCHET_COMPANY: "40702810440000018316",
      BANK_COMPANY: "ПАО СБЕРБАНК",
      COR_SCHET_COMPANY: "30101810400000000225",
      BIK_COMPANY: "044525225",
      GEN_DIR_COMPANY: "Шишов Юрий Викторович ",
      PHONE_ORG_COMPANY: "+7 (917) 517-87-13",
      OKWED_COMPANY: "46.73 Торговля оптовая лесоматериалами, строительными материалами и санитарно-техническим оборудованием",
      UR_ADDRESS_COMPANY: "142608. Московская область, г. Орехово-Зуево, Малодубенское шоссе д.3",
      ADDRESS_YAMAP_LINK: "https://yandex.ru/maps/-/CDQfVGph"
   },
   status: "ok"
});
const PHONE = ref('');
const OZON_LINK = ref('');
const YMARKET_LINK = ref('');
const WB_LINK = ref('');

const REVIEW_LIST = ref([]);
const PRODUCT_LIST = ref([]);

onMounted(async () => {
   const FOOTER_HEIGHT = FOOTER_PARAMETERS.height.value;

   // gsap.to('#main', {
   //    scrollTrigger: {
   //       trigger: '#contacts',
   //       start: `0% 100%`,
   //       markers: false,
   //       end: `100% 80%`,
   //       scrub: 1,
   //    },
   //    y: FOOTER_HEIGHT, 
   //    delay: 0,
   //    // opacity: 0.8,
   //    // scale: 0.9,
   // });
   
   try {
      const contactsData = await getData(SERVER_PROTOCOL + SERVER_DOMAIN + API_PREFIX + "company/info");
      CONTACTS_DATA.value = contactsData;
      PHONE.value = contactsData.data.PHONE_COMPANY;
      OZON_LINK.value = contactsData.data.OZON_LINK;
      YMARKET_LINK.value = contactsData.data.YA_MARKET_LINK;
      WB_LINK.value = contactsData.data.WB_LINK;

      const reviewsData = await getData(SERVER_PROTOCOL + SERVER_DOMAIN + API_PREFIX + "company/reviews");
      REVIEW_LIST.value = reviewsData;

      const productsData = await getData(SERVER_PROTOCOL + SERVER_DOMAIN + API_PREFIX + "catalog/getItems");
      PRODUCT_LIST.value = productsData;
   } catch (error) {
      console.error(error);
   } finally {}
});

useRecaptchaProvider()
</script>

<template>
   <div class="page-wrapper">
      <Burger :PHONE="PHONE"/>
      <Header :PHONE="PHONE"/>
      <Main :REVIEW_LIST="REVIEW_LIST" :PRODUCT_LIST="PRODUCT_LIST" :OZON_LINK="OZON_LINK" :YMARKET_LINK="YMARKET_LINK" :WB_LINK="WB_LINK"/>
      <Footer ref="FOOTER" :CONTACTS_DATA="CONTACTS_DATA" />
   </div>
</template>

<style scoped lang="scss"></style>
