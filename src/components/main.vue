<script setup>
import { ref } from 'vue';
import BlueAkor from './ui/blueAkor.vue';

import { Vue3Lottie } from 'vue3-lottie'
import AnimA from '../assets/anim/anim-1.json';

</script>

<template>
   <main class="content-wrapper">
      <h1>МОДИФИКАТ - ПРОДАЖА СТРОИТЕЛЬНЫХ СМЕСЕЙ</h1>

      <!-- Первый блок -->
      <section class="land-section _block_main-wrapper">
         <div class="_block_rounded _block_grey _block_main _block_main-1 flex flex-col justify-between">
            <h2 class="caption-60">Продажа строительных смесей</h2>
            <p class="text-20 font-normal">Наши специалисты всегда готовы помочь вам выбрать наиболее подходящий продукт для вашего проекта.</p>
         </div>
         <div class="_block_rounded _block_pink-gr _block_main _block_main-4 flex">
            <div class="_block_content flex">
               <h2 class="caption-32">Мы есть на <span class="highlight">Ozon</span></h2>
               <p class="text-20 text-blue font-semibold">Покупайте продукцию с удовольствием и выгодой на маркетплейсах!</p>
               <BlueAkor href="/" />
            </div>
            <div class="json-animation">
               <img class="json-animation_img" src="../assets/ozon-react.png">
               <Vue3Lottie :animationData="AnimA" />
            </div>
         </div>
         <div class="_block_main-container">
            <div class="_block_rounded _block_grey _block_main _block_main-2 flex flex-col justify-between">
               <h2 class="caption-20nn text-blue">Консультация профессионалов</h2>
               <p class="font-normal">По подбору строительных смесей в зависимости от типа выполняемых работ и условий эксплуатации.</p>
               <BlueAkor href="/" />
            </div>
            <img src="./../assets/stroitelsha.png" class="_block_rounded _block_main _block_main-3" />
         </div>
      </section>

      <!-- Второй блок | Мы - лучшие -->
      <h2 class="caption-100">В этом <br> мы – <span class="highlight-gradient">лучшие</span></h2>
      <section class="land-section _block_best-wrapper">
         <div class="_block_rounded _block_best _block_best-1"></div>
         <div class="_block_rounded _block_best _block_best-2"></div>
         <div class="_block_rounded _block_best _block_best-3"></div>
         <div class="_block_rounded _block_best _block_best-4"></div>
         <div class="_block_rounded _block_best _block_best-5"></div>
      </section>

      <!-- Третий блок | Примеры товаров -->
      <h2 class="caption-100">Примеры <br><span class="highlight-gradient">продукции</span></h2>
      <section class="land-section"></section>

      <!-- Четвертый блок | О нас -->
      <h2 class="caption-100">Немного <br> о <span class="highlight-gradient">нас</span></h2>
      <section class="land-section"></section>

      <!-- Пятый блок | Отзывы -->
      <h2 class="caption-100"><span class="highlight-gradient">Отзывы</span></h2>
      <section class="land-section"></section>
   </main>
</template>

<style scoped lang="scss">
._block_main-wrapper {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 510px 270px;
   column-gap: 30px;
   row-gap: 30px;

   ._block_main-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
   }

   ._block_main {
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
            transform: translateX(-15px);
            z-index: 1;
         }
      }
   }

   @media (max-width: 1919px) {
      grid-template-rows: 362px 280px;

      ._block_main {
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
               transform: translateX(-15px);
            }
         }
      }
   }

   @media (max-width: 1439px) {
      grid-template-rows: repeat(2, 1fr);

      ._block_main-container {
         grid-template-columns: 1fr;
      }

      ._block_main {
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
               height: 230px;
            }
         }
      }
   }

   @media (max-width: 1279px) {
      grid-template-columns: 1fr;
      grid-template-rows: 160px 200px 1fr;

      ._block_main-container {
         order: 2;
         grid-template-columns: repeat(2, 1fr);
         grid-template-rows: 200px;
      }

      ._block_main {
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

      ._block_main-container {
         display: block;
      }

      ._block_main {
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
      ._block_main {
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
            }
         }
      }
   }

   @media (max-width: 479px) {
      row-gap: 14px;

      ._block_main {
         padding: 20px;

         &-4 {
            max-height: 382px;
            
            ._block_content {
               gap: 15px;
            }
         }
      }
   }
}
</style>
