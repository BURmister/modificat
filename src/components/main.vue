<script setup>
import { ref } from 'vue';
import BlueAkor from './ui/blueAkor.vue';
</script>

<template>
   <main>
      <h1>МОДИФИКАТ - ПРОДАЖА СТРОИТЕЛЬНЫХ СМЕСЕЙ</h1>
      <section class="content-wrapper land-section _block_main-wrapper">
         <div class="_block_rounded _block_grey _block_main _block_main-1 flex flex-col justify-between">
            <h2 class="caption-60">Продажа строительных смесей</h2>
            <p class="text-20 font-normal">Наши специалисты всегда готовы помочь вам выбрать наиболее подходящий продукт для вашего проекта.</p>
         </div>
         <div class="_block_rounded _block_pink _block_main _block_main-4 flex flex-col">
            <h2 class="caption-32">Мы есть на <span class="highlight">Ozon</span></h2>
            <p class="text-20 text-blue font-semibold">Покупайте продукцию с удовольствием и выгодой на маркетплейсах!</p>
            <BlueAkor href="/" />
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
         grid-row: span 2;
         gap: 27px;
      }
   }

   @media (max-width: 1919px) {
      grid-template-rows: 362px 280px;
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
            gap: 20px;
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
      }
   }

   @media (max-width: 719px) {
      ._block_main {
         &-4 {
            gap: 15px;
         }
      }
   }

   @media (max-width: 479px) {
      row-gap: 14px;

      ._block_main {
         padding: 20px;
      }
   }
}
</style>
