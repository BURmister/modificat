<script setup>
import { ref, onMounted } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';
import { useElementSize, useWindowSize } from '@vueuse/core';

import { useGsap } from '/src/hooks/useGsap.js';
import { getRandom } from '/src/hooks/useMath.js';

import aButton from './ui/aButton.vue';
import aButtonLarge from './ui/aButtonLarge.vue';
import productCard from './ui/product.vue';
import reviewCard from './ui/review.vue';
import Form from './ui/form.vue';
import Modal from './ui/modal.vue';
import ModalBuy from './ui/modal-buy.vue';

// import AnimA from '../assets/anim/anim-1.json';
import AnimB from '../assets/anim/anim-2.json';
import AnimC from '../assets/anim/anim-3.json';

const TITLE_LIST = ref([
   'Сколько стоит?',
   'Что выбрать?',
   'Какие есть способы<br> замешивания?',
   'Что такое смесь?',
   'В чем смысл жизни?',
   'Как мешать?',
   'Можно оптом?',
   'Какую смесь приготовить<br> для штукатурки глиной?',
]);

const props = defineProps(['REVIEW_LIST', 'PRODUCT_LIST', 'OZON_LINK', 'YMARKET_LINK']);

const mainSection = ref(null);
const featureSection = ref(null);
const exampleSection = ref(null);
const aboutSection = ref(null);
const reviewSection = ref(null);
const questionSection = ref(null);

// СОБИРАЕМ ЭЛЕМЕНТЫ ДЛЯ АНИМАЦИИ
let animTitleList = [];
const animTitleOverlay = ref(null);

const gsap = useGsap();
const { width } = useWindowSize();
const OVERLAY_PARAMETERS = useElementSize(animTitleOverlay);

const setAnimTitle = (item) => {
   if (item) animTitleList.push(item);
};

onMounted(() => {
   gsap.from(mainSection.value, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      // delay: 1,
   });

   gsap.from(featureSection.value, {
      scrollTrigger: {
         trigger: mainSection.value,
         start: `80% 70%`,
         markers: false,
         end: `85% 60%`,
         // scrub: 1,
      },
      // x: '-5%',
      opacity: 0,
      scale: 0.95,
      duration: 1,

      // rotation: 2,
   });

   gsap.from(exampleSection.value, {
      scrollTrigger: {
         trigger: featureSection.value,
         start: `80% 70%`,
         markers: false,
         end: `85% 60%`,
         // scrub: 1,
      },
      // x: '-5%',
      opacity: 0,
      scale: 0.95,
      duration: 1,

      // rotation: 2,
   });

   gsap.from(aboutSection.value, {
      scrollTrigger: {
         trigger: exampleSection.value,
         start: `90% 70%`,
         markers: false,
         end: `95% 60%`,
         // scrub: 1,
      },
      // x: '-5%',
      opacity: 0,
      scale: 0.95,
      duration: 1,

      // rotation: 2,
   });

   gsap.from(reviewSection.value, {
      scrollTrigger: {
         trigger: aboutSection.value,
         start: `80% 70%`,
         markers: false,
         end: `85% 60%`,
         // scrub: 1,
      },
      // x: '-5%',
      opacity: 0,
      scale: 0.95,
      duration: 1,

      // rotation: 2,
   });

   gsap.from(questionSection.value, {
      scrollTrigger: {
         trigger: reviewSection.value,
         start: `80% 70%`,
         markers: false,
         end: `95% 60%`,
         // scrub: 1,
      },
      // x: '-5%',
      opacity: 0,
      scale: 0.95,
      duration: 1,

      // rotation: 2,
   });

   animTitleList.forEach((item) => {
      const offsetY = OVERLAY_PARAMETERS.height.value + (item.offsetHeight + item.offsetWidth) * 2;
      // const index = item.dataset.itemIndex;

      let duration = getRandom(6, 10);
      if (width < 480) duration = getRandom(9, 13);

      gsap.to(item, {
         y: offsetY,
         rotation: getRandom(-60, 60),
         duration: duration,
         delay: getRandom(0, 8),
         repeat: -1,
         ease: `power${getRandom(1, 4)}.in`,
      });
   });
});
</script>

<template>
   <main id="main">
      <h1>МОДИФИКАТ - ПРОДАЖА СТРОИТЕЛЬНЫХ СМЕСЕЙ</h1>

      <!-- Первый блок -->
      <div ref="mainSection" class="content-wrapper">
         <section id="main" class="land-section block_main-wrapper">
            <div class="_block_rounded _block_grey block_main block_main-1 flex flex-col justify-between">
               <h2 class="caption-60">Продажа строительных смесей</h2>
               <p class="text-20 font-normal">Наши специалисты всегда готовы помочь вам выбрать наиболее подходящий продукт для вашего проекта.</p>
            </div>
            <div class="_block_rounded _block_pink-gr block_main block_main-4 flex">
               <div class="_block_content flex">
                  <h2 class="caption-32">Мы есть на <span class="highlight">Ozon</span></h2>
                  <p class="text-20 text-blue font-semibold">Покупайте продукцию с удовольствием и выгодой на маркетплейсах!</p>
                  <aButton :href="OZON_LINK" />
               </div>
               <div class="json-animation">
                  <img class="json-animation_img" src="../assets/ozon-react.png" />
                  <Vue3Lottie animation-link="https://co71945-bitrix-nvmby.tw1.ru/upload/json/anim-1.json" />
               </div>
            </div>
            <div class="block_main-container">
               <div class="_block_rounded _block_grey block_main block_main-2 flex flex-col justify-between">
                  <h2 class="caption-20nn text-blue">Консультация профессионалов</h2>
                  <p class="text-16nn font-normal">По подбору строительных смесей в зависимости от типа выполняемых работ и условий эксплуатации.</p>
                  <Modal :showOpenButton="true"><Form checkId="12181" canShowSuccess="true">Консультация профессионалов</Form></Modal>
               </div>
               <img src="./../assets/stroitelsha.png" class="_block_rounded block_main block_main-3" />
            </div>
         </section>
      </div>

      <!-- Второй блок | Мы - лучшие -->
      <div ref="featureSection" id="features" class="content-wrapper">
         <h2 class="caption-100">
            В этом <br />
            мы – <span class="highlight-gradient">лучшие</span>
         </h2>
         <section class="land-section block_best-wrapper">
            <div class="_block_rounded block_best block_best-1">
               <div class="block_content">
                  <h2 class="caption-32">Широкий<br />ассортимент</h2>
                  <p class="text-20">
                     Мы предлагаем широкий ассортимент строительных смесей для всех видов строительных и отделочных работ: штукатурки, шпатлевки, клеи
                     для плитки и обоев, наливные полы, грунтовки и многое другое.
                  </p>
               </div>
               <div class="best_story-list">
                  <span class="best_story">
                     <img src="../assets/story-1.png" />
                  </span>
                  <span class="best_story">
                     <img src="../assets/story-2.png" />
                  </span>
                  <span class="best_story">
                     <img src="../assets/story-3.png" />
                  </span>
               </div>
            </div>
            <div class="_block_rounded _block_grey block_best block_best-2">
               <h2 class="caption-32 text-white">Устойчивость к внешним воздействиям</h2>
               <div class="rounded-title_list flex flex-col">
                  <p class="rounded-title text-16">Долговечность</p>
                  <p class="rounded-title text-16">Противостояние погодным условиям</p>
               </div>
            </div>
            <div class="_block_rounded _block_grey block_best block_best-3">
               <h2 class="caption-32">Отзывы о нас в Ozon</h2>
               <div class="json-animation">
                  <Vue3Lottie :animationData="AnimB" />
                  <p class="json-animation-msg text-16 text-white font-bold _block_blue">
                     Время мешать!
                     <svg class="corner-vector" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <path d="M0.287532 14.0639L6.12281 0.11981L15.2811 12.1453L0.287532 14.0639Z" fill="#4328EB" />
                     </svg>
                  </p>
               </div>
               <aButton :href="OZON_LINK" />
            </div>
            <div class="_block_rounded _block_blue block_best block_best-4">
               <h2 class="caption-32 text-white">Индивидуальные решения</h2>
               <p class="text-20 text-white">Подберём смесь под ваш запрос.</p>
               <Modal buttonWhiteStyle="true" buttonBottomStyle="true" :showOpenButton="true"><Form checkId="127351" canShowSuccess="true">Индивидуальные решения</Form></Modal>
            </div>
            <div class="block_best-container">
               <div class="_block_rounded block_best block_best-5 _block_grey">
                  <h2 class="caption-32">Мы есть на Яндекс Маркете</h2>
                  <img class="ymarket-logo" src="../assets/ymarket-logo.png" width="119" height="118" />
                  <!-- <svg class="coin-vector" xmlns="http://www.w3.org/2000/svg" width="119" height="118" viewBox="0 0 119 118" fill="none">
                     <circle cx="59.5" cy="59" r="58.5" stroke="#172026" />
                     <g clip-path="url(#clip0_258_1266)">
                        <path
                           d="M102.5 59C102.5 82.7483 83.2483 102 59.5 102C46.9809 102 35.7113 96.6504 27.8538 88.1119C25.7836 85.8631 23.958 83.401 22.4077 80.7668C18.6535 74.3817 16.5 66.9418 16.5 59C16.5 35.2517 35.7517 16 59.5 16C67.4436 16 74.8835 18.1535 81.2668 21.9094C83.9012 23.4586 86.3629 25.2843 88.6101 27.3555C97.1487 35.2096 102.5 46.4809 102.5 59Z"
                           fill="#F0CD00"
                        />
                        <path d="M102.5 59.0004C102.5 82.2134 84.1084 101.13 61.1008 101.971C38.0931 101.13 19.7014 82.2134 19.7014 59.0004C19.7014 35.7875 38.0931 16.871 61.1008 16.0303C84.1084 16.871 102.5 35.7875 102.5 59.0004Z" fill="#FFDE50" />
                        <path
                           d="M88.6102 27.3553L27.8538 88.1116C25.7836 85.8629 23.958 83.4007 22.4077 80.7665L81.2668 21.9092C83.9012 23.4583 86.3629 25.284 88.6102 27.3553ZM99.5339 43.2793L43.7778 99.0354C39.862 97.495 36.1938 95.3874 32.8909 92.7802L93.2805 32.3906C95.8882 35.6936 97.9952 39.3625 99.5339 43.2793Z"
                           fill="#FFEA94"
                        />
                        <path
                           d="M92.9137 58.9996C92.9137 77.4527 77.9532 92.4132 59.5001 92.4132C53.0729 92.4132 47.0704 90.5984 41.9754 87.4533C39.7605 86.0864 37.7126 84.466 35.8729 82.625C34.5204 81.274 33.2861 79.8095 32.1837 78.2478C30.6521 76.0792 29.3853 73.7353 28.4102 71.266C26.957 67.589 26.1391 63.5909 26.0899 59.4103C26.0864 59.2734 26.0864 59.1365 26.0864 58.9996C26.0864 40.5464 41.0452 25.5859 59.5001 25.5859C59.637 25.5859 59.7756 25.5859 59.9125 25.5894C64.0932 25.6386 68.0895 26.4582 71.7665 27.9097C74.2355 28.8855 76.5793 30.1522 78.7483 31.6832C80.3121 32.7889 81.7758 34.0227 83.1255 35.3724C84.9669 37.2117 86.5873 39.2597 87.9538 41.4749C91.0989 46.5699 92.9137 52.5724 92.9137 58.9996Z"
                           fill="#FAA300"
                        />
                        <path
                           d="M83.1255 35.3724L35.8729 82.625C34.5204 81.274 33.2861 79.8095 32.1837 78.2478C30.6521 76.0792 29.3853 73.7353 28.4102 71.266C26.957 67.589 26.1391 63.5909 26.0899 59.4103C26.0864 59.2734 26.0864 59.1365 26.0864 58.9996C26.0864 40.5464 41.0452 25.5859 59.5001 25.5859C59.637 25.5859 59.7756 25.5859 59.9125 25.5894C64.0932 25.6386 68.0895 26.4582 71.7665 27.9097C74.2355 28.8855 76.5793 30.1522 78.7483 31.6832C80.3121 32.7889 81.7758 34.0227 83.1255 35.3724Z"
                           fill="#FFBD00"
                        />
                        <path
                           d="M92.9127 58.9996C92.9127 77.4527 77.9522 92.4132 59.499 92.4132C58.8654 92.4132 58.2371 92.3956 57.6123 92.3605C75.1879 91.383 89.1374 76.8191 89.1374 58.9996C89.1374 41.18 75.1879 26.6162 57.6123 25.6386C58.2371 25.6035 58.8654 25.5859 59.499 25.5859C77.9522 25.5859 92.9127 40.5464 92.9127 58.9996Z"
                           fill="#F68E00"
                        />
                        <path
                           d="M61.2212 66.2064C69.967 66.2064 77.0822 59.0911 77.0822 50.3454C77.0822 41.5997 69.9668 34.4844 61.2212 34.4844H43.7242C41.7855 34.4844 40.214 36.0559 40.214 37.9946V59.186H37.8232C35.8845 59.186 34.313 60.7576 34.313 62.6962C34.313 64.6349 35.8845 66.2064 37.8232 66.2064H40.214V70.2437H37.8232C35.8845 70.2437 34.313 71.8152 34.313 73.7539C34.313 75.6926 35.8845 77.2641 37.8232 77.2641H40.214V80.8512C40.214 82.7899 41.7855 84.3614 43.7242 84.3614C45.6629 84.3614 47.2344 82.7899 47.2344 80.8512V77.2641H59.5122C61.4509 77.2641 63.0224 75.6926 63.0224 73.7539C63.0224 71.8152 61.4509 70.2437 59.5122 70.2437H47.2344V66.2064H61.2212ZM47.2344 41.5048H61.2212C66.096 41.5048 70.0618 45.4706 70.0618 50.3454C70.0618 55.22 66.096 59.186 61.2212 59.186H47.2344V41.5048Z"
                           fill="#F68E00"
                        />
                        <path
                           d="M65.6093 66.2064C74.3552 66.2064 81.4704 59.0911 81.4704 50.3454C81.4704 41.5997 74.355 34.4844 65.6093 34.4844H48.1124C46.1737 34.4844 44.6022 36.0559 44.6022 37.9946V59.186H42.2114C40.2727 59.186 38.7012 60.7576 38.7012 62.6962C38.7012 64.6349 40.2727 66.2064 42.2114 66.2064H44.6022V70.2437H42.2114C40.2727 70.2437 38.7012 71.8152 38.7012 73.7539C38.7012 75.6926 40.2727 77.2641 42.2114 77.2641H44.6022V80.8512C44.6022 82.7899 46.1737 84.3614 48.1124 84.3614C50.0511 84.3614 51.6226 82.7899 51.6226 80.8512V77.2641H63.9004C65.8391 77.2641 67.4106 75.6926 67.4106 73.7539C67.4106 71.8152 65.8391 70.2437 63.9004 70.2437H51.6226V66.2064H65.6093ZM51.6226 41.5048H65.6093C70.4841 41.5048 74.45 45.4706 74.45 50.3454C74.45 55.22 70.4841 59.186 65.6093 59.186H51.6226V41.5048Z"
                           fill="#FFEA94"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_258_1266">
                           <rect width="86" height="86" fill="white" transform="translate(16.5 16)" />
                        </clipPath>
                     </defs>
                  </svg> -->
                  <div class="rounded-title_list">
                     <p class="rounded-title text-16">Доступные цены</p>
                     <p class="rounded-title text-16">Быстрая доставка</p>
                     <p class="rounded-title text-16">Качественные материалы</p>
                  </div>
               </div>
               <div class="_block_rounded block_best block_best-6 _block_grey">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                     <rect x="0.5" width="57" height="57" rx="28.5" fill="white" />
                     <path
                        d="M24.2396 23.8266C24.2995 23.9691 24.3577 24.1132 24.4176 24.2557C24.8501 25.29 25.2875 26.3227 25.7134 27.3587C25.8897 27.7862 26.1891 28.0795 26.5982 28.2673C26.886 28.3997 27.1887 28.4668 27.5081 28.4651C28.6608 28.4617 29.8151 28.4701 30.9678 28.4617C31.8328 28.455 32.7476 29.02 33.1351 29.7224C33.4878 30.3594 33.857 30.988 34.218 31.62C34.2379 31.6536 34.2579 31.6871 34.2812 31.7256C34.3793 31.7055 34.4774 31.677 34.5772 31.667C34.7136 31.6536 34.85 31.6469 34.9864 31.6552C35.1328 31.6636 35.2626 31.729 35.3773 31.8245C35.7033 32.1011 35.9944 32.4146 36.2689 32.7432C36.866 33.4523 37.3916 34.2151 37.884 35.0013C38.5859 36.1244 39.213 37.2862 39.7303 38.5083C39.9864 39.1117 40.211 39.7253 40.3657 40.364C40.4289 40.6289 40.4771 40.8971 40.4971 41.1703C40.5154 41.4302 40.4472 41.6682 40.3158 41.8895C40.1893 42.1024 40.023 42.2784 39.8284 42.4276C39.4774 42.6975 39.0949 42.9003 38.6541 42.9758C38.2765 43.0412 37.9289 42.9775 37.6145 42.7444C37.2652 42.4846 36.9508 42.1862 36.6581 41.8643C36.0776 41.229 35.5703 40.5383 35.0979 39.8192C34.2146 38.4747 33.4512 37.0666 32.8324 35.5779C32.7775 35.4472 32.731 35.3131 32.6761 35.184C32.6295 35.0717 32.7243 34.9895 32.8158 34.9979C33.2033 35.0382 33.5793 34.9795 33.9485 34.8638C34.5357 34.6794 35.053 34.3743 35.5021 33.9519C35.6568 33.806 35.6983 33.6132 35.6168 33.4406C35.4937 33.1807 35.1711 33.112 34.9498 33.2981C34.8118 33.4137 34.6771 33.5344 34.5307 33.6367C34.1614 33.8932 33.7556 34.0675 33.3098 34.1312C33.1252 34.1581 32.9389 34.1614 32.7542 34.1212C32.716 34.1128 32.6794 34.1027 32.6428 34.091C32.2885 33.9653 32.1371 33.6551 32.2536 33.2931C32.3184 33.0936 32.4399 32.9293 32.5796 32.7767C32.6145 32.7382 32.6511 32.6996 32.6894 32.6594C32.6744 32.6309 32.6628 32.6041 32.6494 32.5806C32.2785 31.9335 31.9109 31.2848 31.535 30.6394C31.4186 30.4399 31.2306 30.3259 31.0044 30.3208C30.4738 30.3091 29.9432 30.3175 29.4109 30.3175C29.3943 30.3175 29.376 30.3208 29.3527 30.3225C29.2795 30.4533 29.2063 30.5857 29.1332 30.7181C28.052 32.6778 26.9708 34.6375 25.8913 36.5972C25.7732 36.8118 25.6551 37.0247 25.5054 37.2174C25.3557 37.4102 25.1861 37.5846 24.9865 37.7271C24.3927 38.1529 23.6741 38.1596 23.0736 37.7421C22.7875 37.5443 22.5663 37.2845 22.385 36.9895C22.1172 36.5536 21.9492 36.0775 21.8594 35.5746C21.7446 34.9409 21.6448 34.3039 21.54 33.6686C21.4452 33.1019 21.3504 32.537 21.2573 31.9704C21.1408 31.2646 21.0244 30.5589 20.9063 29.8531C20.8132 29.2915 20.72 28.7283 20.6252 28.1667C20.5071 27.4576 20.3907 26.7485 20.2726 26.0394C20.1794 25.4778 20.0846 24.9145 19.9915 24.353C19.895 23.7763 19.8002 23.1996 19.7037 22.6246C19.5873 21.9222 19.4692 21.2198 19.3528 20.5191C19.2297 19.7815 19.1082 19.0456 18.9868 18.3079C18.8704 17.6022 18.7506 16.8964 18.6342 16.1907C18.5909 15.9292 18.5427 15.6677 18.5128 15.4028C18.4729 15.0575 18.5244 14.7239 18.6974 14.4171C18.7706 14.2897 18.8654 14.1807 18.9918 14.1036C19.2413 13.9527 19.4891 13.9728 19.7287 14.1237C20.0746 14.3416 20.4156 14.5663 20.7599 14.7876C23.6209 16.6316 26.4818 18.4739 29.3427 20.3179C29.687 20.5392 30.0264 20.7672 30.3757 20.9784C30.8031 21.2366 31.1075 21.6037 31.3271 22.0463C31.545 22.4838 31.6731 22.9498 31.7496 23.4326C31.8278 23.9322 31.8527 24.4334 31.8128 24.938C31.7729 25.456 31.688 25.9656 31.4768 26.4434C31.387 26.6462 31.2705 26.839 31.1674 27.0352C31.1375 27.0921 31.0909 27.1156 31.0294 27.1139C31.0011 27.1139 30.9728 27.1139 30.9445 27.1139C29.8234 27.1139 28.7007 27.1106 27.5796 27.1173C27.3434 27.1173 27.1388 27.0502 26.9459 26.9212C26.8045 26.8256 26.6814 26.7099 26.5716 26.5792C25.8131 25.6756 25.0547 24.772 24.2962 23.8668C24.2829 23.85 24.2679 23.8349 24.2546 23.8199C24.2496 23.8232 24.2446 23.8249 24.238 23.8282L24.2396 23.8266Z"
                        fill="#4328EB"
                     />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                     <rect x="0.5" width="57" height="57" rx="28.5" fill="white" />
                     <g clip-path="url(#clip0_258_1284)">
                        <path
                           d="M42.4556 21.8731C42.4406 21.7012 42.3889 21.5341 42.3036 21.3825C42.2184 21.2308 42.1014 21.0978 41.9602 20.9918C41.819 20.8859 41.6565 20.8092 41.483 20.7668C41.3096 20.7244 41.1288 20.717 40.9523 20.7452C40.9458 20.7452 40.1617 20.8664 39.0045 20.8664C36.8273 20.8664 32.8331 20.4267 30.5354 17.479C30.0468 16.8507 28.9531 16.8507 28.4645 17.479C26.1668 20.4267 22.1714 20.8664 19.9955 20.8664C18.8382 20.8664 18.0554 20.7465 18.0476 20.7452C17.8711 20.717 17.6904 20.7244 17.5169 20.7668C17.3434 20.8092 17.1809 20.8859 17.0397 20.9918C16.8985 21.0978 16.7815 21.2308 16.6963 21.3825C16.611 21.5341 16.5593 21.7012 16.5443 21.8731C16.5314 22.0329 15.3223 37.9168 29.128 41.9087C29.3705 41.9795 29.6294 41.9795 29.8719 41.9087C43.6777 37.9168 42.4685 22.0329 42.4556 21.8731ZM34.952 27.2314L28.4723 33.4765C28.3522 33.5929 28.2094 33.6853 28.0522 33.7483C27.8949 33.8113 27.7263 33.8438 27.556 33.8438C27.3857 33.8438 27.2171 33.8113 27.0599 33.7483C26.9026 33.6853 26.7599 33.5929 26.6398 33.4765L24.0479 30.9785C23.9241 30.8632 23.8254 30.7254 23.7575 30.573C23.6896 30.4206 23.6538 30.2567 23.6523 30.0909C23.6508 29.9251 23.6836 29.7606 23.7488 29.6071C23.8139 29.4536 23.9102 29.3141 24.0318 29.1969C24.1535 29.0796 24.2982 28.9868 24.4575 28.924C24.6167 28.8612 24.7874 28.8296 24.9595 28.8311C25.1315 28.8325 25.3016 28.867 25.4597 28.9324C25.6178 28.9979 25.7608 29.093 25.8804 29.2123L27.556 30.8273L33.1195 25.4653C33.2391 25.346 33.3821 25.2508 33.5402 25.1854C33.6983 25.1199 33.8684 25.0854 34.0404 25.084C34.2125 25.0826 34.3832 25.1142 34.5424 25.177C34.7017 25.2398 34.8464 25.3325 34.9681 25.4498C35.0898 25.5671 35.186 25.7065 35.2512 25.86C35.3163 26.0135 35.3491 26.178 35.3476 26.3438C35.3461 26.5097 35.3104 26.6736 35.2424 26.826C35.1745 26.9783 35.0758 27.1162 34.952 27.2314Z"
                           fill="#4328EB"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_258_1284">
                           <rect width="26" height="25" fill="white" transform="translate(16.5 17)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                     <rect x="0.5" width="57" height="57" rx="28.5" fill="white" />
                     <g clip-path="url(#clip0_258_1289)">
                        <path
                           d="M37.6653 23.5794C39.462 25.3763 40.4736 27.8119 40.4787 30.353C40.4839 32.894 39.4821 35.3337 37.6928 37.1379C35.6755 32.472 32.08 28.5746 27.5925 26.2554C31.4658 29.5327 34.0804 34.0537 34.9893 39.0454C31.4213 40.7334 27.0298 40.1158 24.0794 37.1653C19.3037 32.3897 18.5215 18.0215 18.5215 18.0215C18.5215 18.0215 32.8896 18.8037 37.6653 23.5794Z"
                           fill="#4328EB"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_258_1289">
                           <rect width="22" height="22" fill="white" transform="matrix(-1 0 0 1 40.5 18)" />
                        </clipPath>
                     </defs>
                  </svg>
               </div>
            </div>
         </section>
      </div>

      <!-- Третий блок | Примеры товаров -->
      <div ref="exampleSection">
         <div id="examples" class="content-wrapper">
            <h2 class="caption-100">Примеры <br /><span class="highlight-gradient">продукции</span></h2>
         </div>
         <section class="land-section block_products-wrapper flex flex-col">
            <div class="product-list content-wrapper">
               <productCard v-for="(product, index) in PRODUCT_LIST.data" :key="index" :product="product"/>
            </div>
            <div class="content-wrapper">
               <Modal buttonLarge="true" buttonTitle="Заказать смесь" :showOpenButton="true"><ModalBuy :OZON_LINK="OZON_LINK" :YMARKET_LINK="YMARKET_LINK">Заказать смесь</ModalBuy></Modal>
            </div>
         </section>
      </div>

      <!-- Четвертый блок | О нас -->
      <div ref="aboutSection" id="about" class="content-wrapper">
         <h2 class="caption-100">
            Немного <br />
            о <span class="highlight-gradient">нас</span>
         </h2>
         <section class="land-section block_about-wrapper">
            <div class="_block_rounded _block_blue block_about block_about-1">
               <h3 class="caption-32 text-white">Продажа высококачественных и экологически чистых строительных смесей</h3>
            </div>
            <div class="_block_rounded _block_pink block_about block_about-2">
               <div class="content_title">
                  <h3 class="caption-32">Сертификаты и лицензии</h3>
                  <div class="rounded-title_list">
                     <div class="rounded-title text-16">Экологично</div>
                     <div class="rounded-title text-16">Сертифицированно</div>
                     <div class="rounded-title text-16">Одобрено профессионалами</div>
                  </div>
               </div>
               <div class="content_img">
                  <svg class="cup-vector" xmlns="http://www.w3.org/2000/svg" width="237" height="236" viewBox="0 0 237 236" fill="none">
                     <path
                        d="M210.278 26.2222H184.056V0H52.9444V26.2222H26.7222C12.3 26.2222 0.5 38.0222 0.5 52.4444V65.5556C0.5 98.9889 25.6733 126.26 58.0578 130.324C66.3178 149.991 84.0178 164.807 105.389 169.133V209.778H52.9444V236H184.056V209.778H131.611V169.133C152.982 164.807 170.682 149.991 178.942 130.324C211.327 126.26 236.5 98.9889 236.5 65.5556V52.4444C236.5 38.0222 224.7 26.2222 210.278 26.2222ZM26.7222 65.5556V52.4444H52.9444V102.529C37.7356 97.0222 26.7222 82.6 26.7222 65.5556ZM210.278 65.5556C210.278 82.6 199.264 97.0222 184.056 102.529V52.4444H210.278V65.5556Z"
                        fill="#4328EB"
                     />
                  </svg>
               </div>
               <div class="content_desc">
                  <p class="text-20 text-blue">
                     Компания «Модификат» имеет все необходимые сертификаты и лицензии, подтверждающие высокое качество нашей продукции. Мы постоянно
                     совершенствуем наши технологии и следим за новыми тенденциями в строительной отрасли, чтобы предлагать нашим клиентам самые
                     лучшие решения для их проектов.
                  </p>
               </div>
            </div>
            <div class="_block_rounded _block_grey block_about block_about-3">
               <div class="rounded-title_list">
                  <div class="rounded-title text-16">Безопасное производство</div>
                  <div class="rounded-title text-16">Многолетний опыт</div>
               </div>
            </div>
            <div class="_block_rounded _block_grey block_about block_about-4">
               <h3 class="caption-32">Экологичность</h3>
               <p class="text-20">
                  Мы заботимся о здоровье наших клиентов и окружающей среде, поэтому наша продукция не содержит вредных веществ и не вызывает
                  аллергических реакций.
               </p>
            </div>
         </section>
      </div>

      <!-- Пятый блок | Отзывы -->
      <div ref="reviewSection" id="reviews" class="content-wrapper">
         <h2 class="caption-100"><span class="highlight-gradient">Отзывы</span></h2>
         <section class="land-section block_review-wrapper flex flex-col">
            <div class="review-list">
               <reviewCard v-for="(review, index) in REVIEW_LIST.data" :key="index" :review="review"/>
            </div>
            <aButtonLarge :href="OZON_LINK" title="Смотреть на Ozon" pinkStyle="true" />
         </section>
      </div>

      <!-- Шестой блок | Вопросы -->
      <div ref="questionSection" class="content-wrapper">
         <section ref="animTitleOverlay" class="land-section _block_rounded _block_blue-gr-radiant block-questions_wrapper">
            <div class="block_questions">
               <Form checkId="13126" :successBlank="true">Засыпьте нас<br />вопросами</Form>
               <Vue3Lottie :animationData="AnimC" />
            </div>
            <div class="questions_overlay">
               <p
                  v-for="(title, index) in TITLE_LIST"
                  class="rounded-title anim-title white-style"
                  :class="[`anim-title-${index + 1}`]"
                  :key="index"
                  :ref="setAnimTitle"
                  v-html="title"
                  :data-item-index="index"
               ></p>
            </div>
         </section>
      </div>
   </main>
</template>

<style scoped lang="scss">
.block_main-wrapper {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 510px 270px;
   column-gap: 30px;
   row-gap: 30px;

   .block_main-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
   }

   .block_main {
      position: relative;
      padding: 40px;

      &-1,
      &-2 {
         gap: 20px;
      }

      &-3 {
         padding: unset;
      }

      &-4 {
         flex-direction: column;
         max-height: 810px;
         grid-row: span 2;

         ._block_content {
            flex-direction: column;
            gap: 27px;
         }
      }

      .json-animation {
         margin-bottom: 37px;
         flex: 1;
         display: flex;
         align-items: flex-end;
         justify-content: center;

         &_img {
            position: relative;
            width: auto;
            height: 570px;
            object-fit: contain;
            transform: translateX(75px);
            z-index: 2;
         }

         .lottie-animation-container {
            position: relative;
            margin: unset;
            width: auto;
            height: 431px;
            width: 308px;
            transform: translateX(-15px);
            z-index: 1;
         }
      }
   }

   @media (max-width: 1919px) {
      grid-template-rows: 362px 280px;

      .block_main {
         &-4 {
            max-height: 672px;
         }

         .json-animation {
            margin-bottom: 49px;

            &_img {
               height: 392px;
               transform: translateX(44px);
            }

            .lottie-animation-container {
               height: 296px;
               width: 212px;
               transform: translateX(-15px);
            }
         }
      }
   }

   @media (max-width: 1439px) {
      grid-template-rows: repeat(2, 1fr);

      .block_main-container {
         grid-template-columns: 1fr;
      }

      .block_main {
         padding: 30px;

         &-3 {
            display: none;
         }

         &-4 {
            max-height: 539px;
         }

         .json-animation {
            margin-bottom: 16px;

            &_img {
               height: 288px;
               transform: translateX(32px);
            }

            .lottie-animation-container {
               width: 165px;
               height: 230px;
            }
         }
      }
   }

   @media (max-width: 1279px) {
      grid-template-columns: 1fr;
      grid-template-rows: 160px 200px 1fr;

      .block_main-container {
         order: 2;
         grid-template-columns: repeat(2, 1fr);
         grid-template-rows: 200px;
      }

      .block_main {
         &-1 {
            order: 1;
         }

         &-3 {
            object-position: 50% 20%;
            padding: unset;
            display: block;
         }

         &-4 {
            order: 3;
            max-height: 353px;

            flex-direction: row;
            justify-content: space-between;

            ._block_content {
               flex: 1;
               gap: 20px;
            }
         }

         .json-animation {
            flex: 1;
            margin-bottom: unset;
         }
      }
   }

   @media (max-width: 999px) {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .block_main-container {
         display: block;
      }

      .block_main {
         width: 100%;

         &-3 {
            display: none;
         }

         &-4 {
            max-height: 344px;
         }
      }
   }

   @media (max-width: 719px) {
      .block_main {
         padding: 20px;

         &-4 {
            max-height: unset;
            flex-direction: column;
            gap: 15px;

            ._block_content {
               flex: unset;
               gap: 15px;

               .text-20 {
                  padding-right: 60px;
               }
            }
         }

         .json-animation {
            justify-content: center;

            &_img {
               height: 240px;
               transform: translateX(22px);
            }

            .lottie-animation-container {
               height: 200px;
               width: 143px;
            }
         }
      }
   }

   @media (max-width: 479px) {
      row-gap: 14px;

      .block_main {
         &-2 {
            .caption-20nn {
               max-width: 340px;
            }
         }

         &-4 {
            max-height: 382px;

            ._block_content {
               gap: 15px;
            }

            .text-20 {
               font-size: 12px;
            }
         }
      }
   }
}

.block_best-wrapper {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: 551px 667px;
   gap: 30px;

   .block_best {
      position: relative;
      padding: 40px;

      &-1 {
         padding: 60px 0;
         display: flex;
         flex-direction: column;
         justify-content: space-between;

         .block_content {
            display: flex;
            flex-direction: column;
            gap: 20px;
         }

         .best_story-list {
            display: flex;
            gap: 24px;

            .best_story {
               padding: 14px;
               width: 118px;
               height: 118px;

               display: block;

               border: 1px solid var(--black);
               border-radius: 50%;

               overflow: hidden;

               img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
               }
            }
         }
      }

      &-2 {
         grid-column: span 2;

         display: flex;
         flex-direction: column;
         justify-content: space-between;

         background-image: url('../assets/horizon-man.png');
         background-repeat: no-repeat;
         background-size: cover;
         background-position: center;

         .caption-32 {
            max-width: 430px;
         }

         .rounded-title_list {
            gap: 10px;
         }
      }

      &-3 {
         display: flex;
         flex-direction: column;
         justify-content: space-between;

         .json-animation {
            position: relative;
            display: flex;
            justify-content: flex-start;

            .lottie-animation-container {
               position: relative;
               margin: unset;
               width: auto;
               height: 430px;
               z-index: 1;
               transform: scale(-1, 1);
            }

            &-msg {
               position: absolute;
               top: -20px;
               right: 0;

               padding: 18px 22px;
               border-radius: 30px;

               .corner-vector {
                  position: absolute;
                  bottom: 3px;
                  left: -3px;
               }
            }
         }
      }

      &-4 {
         background-image: url('../assets/mr. brightside.png');
         background-repeat: no-repeat;
         background-position: 13% calc(100% + 3px);

         .text-20 {
            padding-top: 20px;
         }
      }

      &-5 {
         flex: 1;
         display: flex;
         flex-direction: column;
         justify-content: space-between;

         .coin-vector {
            position: absolute;
            top: 45%;
            right: 64px;
         }

         .ymarket-logo {
            position: absolute;
            top: 35%;
            right: 60px;

            width: 120px;
            height: 120px;
            object-fit: contain;
         }

         .rounded-title_list {
            display: flex;
            flex-direction: column;
            gap: 10px;
         }
      }

      &-6 {
         height: 230px;

         display: flex;
         align-items: flex-end;
         gap: 28px;

         background-image: url('../assets/cement.png');
         background-repeat: no-repeat;
         background-size: cover;
      }
   }

   .block_best-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
   }

   @media (max-width: 1919px) {
      grid-template-rows: 498px 522px;

      .block_best {
         &-1 {
            .text-20 {
               font-size: 16px;
            }

            .best_story-list {
               justify-content: space-between;
            }
         }

         &-3 {
            .caption-32 {
               max-width: 287px;
            }

            .json-animation {
               .lottie-animation-container {
                  height: 296px;
               }

               &-msg {
                  top: -40px;

                  .corner-vector {
                     bottom: 4px;
                  }
               }
            }
         }

         &-4 {
            background-size: 341px 331px;

            .caption-32 {
               font-size: 24px;
               font-family: 'Noto Sans';
               // color: var(--pink);
            }
         }

         &-6 {
            display: none;
         }
      }
   }

   @media (max-width: 1439px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 498px 522px auto;

      .block_best {
         padding: 30px;

         &-1 {
            padding: 60px 0;
            .best_story-list {
               justify-content: flex-start;
               gap: 42px;
            }
         }

         &-2 {
            grid-column: unset;
         }

         &-3 {
            .json-animation {
               .lottie-animation-container {
                  height: 347px;
               }

               &-msg {
                  right: 40px;
                  top: 48px;
               }
            }
         }

         &-4 {
            background-size: 319px 310px;
            background-position-x: center;

            .caption-32 {
               font-size: 32px;
               font-family: 'druk';
            }
         }

         &-5 {
            gap: 20px;

            .rounded-title_list {
               flex-direction: row;
               gap: 14px;
            }

            .coin-vector {
               top: 30px;
               right: 30px;

               width: auto;
               height: calc(100% - 60px);
               aspect-ratio: 1 / 1;
            }

            .ymarket-logo {
               top: 30px;
               right: 30px;

               width: auto;
               height: calc(100% - 60px);
               aspect-ratio: 1 / 1;
            }
         }
      }

      .block_best-container {
         grid-column: span 2;
      }
   }

   @media (max-width: 1279px) {
      grid-template-rows: 320px 406px auto;

      .block_best {
         &-1 {
            padding: 30px 0 0 0;

            .best_story-list {
               .best_story {
                  padding: 11px;
                  width: 88px;
                  height: 88px;
               }
            }
         }

         &-3 {
            .json-animation {
               .lottie-animation-container {
                  height: 247px;
               }

               &-msg {
                  right: 0px;
                  top: 8px;
               }
            }
         }

         &-4 {
            background-size: 276px 268px;
            background-position-x: 25px;

            .caption-32 {
               font-size: 32px;
               font-family: 'druk';
            }
         }

         &-5 {
            gap: 50px;

            .caption-32 {
               max-width: 722px;
            }
         }
      }
   }

   @media (max-width: 999px) {
      padding-top: 10px;
      grid-template-rows: auto 320px 406px auto;
      gap: 20px;

      .block_best {
         .caption-32 {
            font-size: 20px;
         }

         &-1 {
            grid-column: span 2;
            padding: unset;

            .best_story-list {
               display: none;
            }
         }

         &-2 {
            grid-column: span 2;
         }

         &-3 {
            .json-animation {
               .lottie-animation-container {
                  height: 226px;
               }

               &-msg {
                  top: -52px;
                  padding: 12px 16px;
                  font-size: 14px;
               }
            }
         }

         &-4 {
            .caption-32 {
               font-size: 20px;
            }
         }

         &-5 {
            gap: 24px;

            .caption-32 {
               max-width: 442px;
            }

            .rounded-title_list {
               gap: 10px;
               flex-direction: column;
            }
         }
      }
   }

   @media (max-width: 719px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto 320px 390px 406px auto;

      .block_best {
         padding: 20px;

         &-1 {
            padding: unset;
            grid-column: unset;
         }

         &-2 {
            grid-column: unset;
         }

         &-3 {
            .json-animation {
               .lottie-animation-container {
                  height: 272px;
               }

               &-msg {
                  top: 24px;
               }
            }
         }

         &-5 {
            // gap: 76px;

            .coin-vector {
               top: unset;
               right: 20px;
               bottom: 20px;
               height: 103px;
               width: 103px;
            }

            .ymarket-logo {
               top: unset;
               right: 20px;
               bottom: 20px;
               height: 103px;
               width: 103px;
            }
         }
      }

      .block_best-container {
         grid-column: unset;
      }
   }

   @media (max-width: 479px) {
      grid-template-rows: auto 320px 338px 295px auto;
      gap: 14px;

      .block_best {
         .caption-32 {
            font-size: 16px;
         }

         &-1 {
            .text-20 {
               font-size: 14px;
            }
         }

         &-2 {
            background-position-x: 65%;
         }

         &-3 {
            .caption-32 {
               max-width: 155px;
            }

            .json-animation {
               .lottie-animation-container {
                  height: 212px;
               }

               &-msg {
                  top: -30px;
                  right: -10px;
               }
            }
         }

         &-4 {
            background-size: 206px 200px;
            background-position-x: center;

            .text-20 {
               font-size: 12px;
            }
         }

         &-5 {
            gap: 40px;

            .coin-vector {
               height: 70px;
               width: 70px;
            }

            .ymarket-logo {
               height: 70px;
               width: 70px;
            }
         }
      }

      .block_best-container {
         grid-column: unset;
      }
   }
}

.block_products-wrapper {
   gap: 60px;

   .product-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
   }

   @media (max-width: 1919px) {
      gap: 40px;
   }

   @media (max-width: 1279px) {
      gap: 30px;
   }

   @media (max-width: 999px) {
      .product-list {
         gap: 20px;
      }
   }

   @media (max-width: 719px) {
      .product-list {
         grid-template-columns: repeat(2, 1fr);
      }
   }

   @media (max-width: 479px) {
      gap: 10px;

      .product-list {
         padding-bottom: 20px;
         display: flex;
         overflow-x: scroll;
         scroll-snap-type: x mandatory;
      }
   }
}

.block_about-wrapper {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(3, 250px);
   gap: 30px;

   .block_about {
      position: relative;
      padding: 40px;

      &-1 {
         display: flex;
         align-items: center;

         background-image: url('../assets/leaf.png');
         background-repeat: no-repeat;
         background-size: 288px 288px;
         background-position: calc(100% + 13px) 0;

         .caption-32 {
            padding-right: 215px;
         }
      }

      &-2 {
         grid-row: span 2;

         display: grid;
         grid-template-columns: 1fr 236px;
         gap: 30px;

         .content_title {
            display: flex;
            flex-direction: column;
            gap: 30px;

            .rounded-title_list {
               display: flex;
               flex-wrap: wrap;
               gap: 18px;
            }
         }

         .content_img {
            width: 100%;
            .cup-vector {
               width: 100%;
               height: auto;
               aspect-ratio: 1 / 1;
            }
         }

         .content_desc {
            grid-column: span 2;
            align-self: end;
         }
      }

      &-3 {
         grid-row: span 2;

         background-image: url('../assets/helmet.png');
         background-repeat: no-repeat;
         background-size: cover;

         .rounded-title_list {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 18px;
         }
      }

      &-4 {
         display: flex;
         flex-direction: column;
         gap: 20px;
      }
   }

   @media (max-width: 1919px) {
      grid-template-rows: 180px 240px 220px;

      .block_about {
         &-1 {
            background-size: 210px 210px;
            background-position: calc(100% - 25px) -12px;

            .caption-32 {
               font-size: 20px;
            }
         }

         &-2 {
            grid-template-columns: 1fr 162px;

            .content_desc {
               .text-20 {
                  font-size: 16px;
               }
            }
         }

         &-3 {
            background-position: center;
         }
      }
   }

   @media (max-width: 1439px) {
      grid-template-rows: 180px 240px 220px;

      .block_about {
         padding: 30px;

         &-1 {
            background-size: 210px 210px;
            background-position: 100% -12px;
         }

         &-2 {
            grid-template-columns: 1fr;
            gap: 20px;

            .content_img {
               position: absolute;
               top: 30px;
               right: 30px;
               width: 69px;
            }

            .content_desc {
               grid-column: unset;
            }
         }

         &-3 {
            background-position: 65% center;
         }

         &-4 {
            .text-20 {
               font-size: 16px;
            }
         }
      }
   }

   @media (max-width: 1279px) {
      grid-template-rows: 150px 150px 200px;

      .block_about {
         padding: 30px;

         &-1 {
            background-size: 160px 160px;
            background-position: calc(100% + 7px) -3px;

            .caption-32 {
               padding-right: 115px;
               font-size: 16px;
            }
         }

         &-2 {
            gap: 30px;

            .content_title {
               .caption-32 {
                  max-width: 420px;
               }

               .rounded-title_list {
                  display: none;
               }
            }

            .content_img {
               width: 54px;
            }
         }

         &-3 {
            background-position: center;
         }

         &-4 {
            gap: 20px;
         }
      }
   }

   @media (max-width: 999px) {
      gap: 20px;

      .block_about {
         padding: 20px;

         &-1 {
            background-image: unset;

            .caption-32 {
               padding-right: unset;
            }
         }

         &-2 {
            gap: 20px;

            .content_title {
               .caption-32 {
                  max-width: 210px;
                  font-size: 20px;
               }
            }

            .content_img {
               top: 20px;
               right: 20px;
            }

            .content_desc {
               .text-20 {
                  font-size: 14px;
               }
            }
         }

         &-4 {
            gap: 14px;

            .caption-32 {
               font-size: 20px;
            }

            .text-20 {
               font-size: 14px;
            }
         }
      }
   }

   @media (max-width: 719px) {
      display: flex;
      flex-direction: column;

      .block_about {
         padding: 20px;

         &-1 {
            order: 1;

            background-image: url('../assets/leaf.png');
            background-size: 160px 160px;
            background-position: calc(100% + 4px) center;

            .caption-32 {
               padding-right: 140px;
            }
         }

         &-2 {
            order: 3;
            gap: 20px;
         }

         &-3 {
            order: 2;
            min-height: 210px;

            .rounded-title_list {
               gap: 14px;
            }
         }

         &-4 {
            order: 4;
            gap: 14px;
         }
      }
   }

   @media (max-width: 479px) {
      gap: 14px;

      .block_about {
         &-1 {
            background-image: unset;

            .caption-32 {
               padding-right: unset;
               font-size: 14px;
            }
         }

         &-2 {
            gap: 14px;

            .content_title {
               .caption-32 {
                  font-size: 16px;
               }
            }

            .content_img {
               width: 38px;
            }
         }

         &-3 {
            .rounded-title_list {
               gap: 7px;
            }
         }

         &-4 {
            .caption-32 {
               font-size: 16px;
            }
         }
      }
   }
}

.block_review-wrapper {
   gap: 40px;

   .review-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      // align-items: stretch;
      gap: 30px;
   }

   @media (max-width: 1919px) {
      .review-list {
         grid-template-columns: repeat(2, 1fr);

         > :nth-child(6),
         > :nth-child(5) {
            display: none;
         }
      }
   }

   @media (max-width: 1439px) {
      gap: 30px;
   }

   @media (max-width: 999px) {
      .review-list {
         display: flex;
         flex-direction: column;
         gap: 20px;

         > :nth-child(3) {
            display: none;
         }
      }
   }

   @media (max-width: 719px) {
      gap: 20px;

      .review-list {
         gap: 14px;
      }
   }
}

.block-questions_wrapper {
   position: relative;
   overflow: hidden;
   padding-top: 60px;

   .block_questions {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      z-index: 2;

      .lottie-animation-container {
         width: 352px;
         height: 290px;
      }
   }

   .questions_overlay {
      position: absolute;
      bottom: 100%;
      left: 0;

      padding: 30px;
      width: 100%;

      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      z-index: 1;

      .anim-title {
         // position: absolute;
         // bottom: 100%;
         // right: 0;

         // animation: dropQuestion 4s ease-in-out infinite;
      }

      @keyframes dropQuestion {
         from {
            transform: translateY(0%);
         }

         to {
            transform: translateY(100%);
         }
      }
   }

   @media (max-width: 1919px) {
   }

   @media (max-width: 1439px) {
   }

   @media (max-width: 1279px) {
      padding-top: 40px;

      .block_questions {
         .lottie-animation-container {
            width: 267px;
            height: 220px;
         }
      }
   }

   @media (max-width: 999px) {
      padding-top: 30px;

      .block_questions {
         gap: 30px;
      }
   }

   @media (max-width: 719px) {
      .block_questions {
         align-items: flex-end;

         .lottie-animation-container {
            margin: unset;
            width: 240px;
            height: 198px;
         }
      }
   }

   @media (max-width: 479px) {
      .block_questions {
         gap: 64px;
      }
   }
}
</style>
