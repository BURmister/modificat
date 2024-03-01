<script setup>
import { ref } from 'vue';

const hidden = ref(true);

</script>

<template>
   <section id="burger" class="burger">
      <div class="burger-line"></div>
      <div class="burger-toggle-wrapper">
         <svg class="burger-toggle-left" xmlns="http://www.w3.org/2000/svg" width="29" height="18" viewBox="0 0 29 18" fill="none">
            <path d="M0 4C18.8 4 26 12 29 18V0H0V4Z" fill="#172026"/>
         </svg>
         <button class="burger-toggle" type="button" @click="() => hidden = !hidden">
            <svg v-if="hidden" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M0 11C0 11.5523 0.447715 12 1 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H1C0.447716 10 0 10.4477 0 11ZM0 6C0 6.55228 0.447715 7 1 7H17C17.5523 7 18 6.55228 18 6C18 5.44772 17.5523 5 17 5H1C0.447716 5 0 5.44772 0 6ZM1 0C0.447716 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H17C17.5523 2 18 1.55228 18 1C18 0.447715 17.5523 0 17 0H1Z"
                  fill="#F0C6FB"
               />
            </svg>
            <svg v-else width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M17.0936 2.71929C17.5942 2.21868 17.5942 1.40703 17.0936 0.906428C16.593 0.405822 15.7813 0.405822 15.2807 0.906428L9 7.18714L2.71929 0.906429C2.21868 0.405822 1.40703 0.405822 0.906428 0.906428C0.405822 1.40703 0.405822 2.21868 0.906428 2.71929L7.18714 9L0.906429 15.2807C0.405822 15.7813 0.405822 16.593 0.906428 17.0936C1.40703 17.5942 2.21868 17.5942 2.71929 17.0936L9 10.8129L15.2807 17.0936C15.7813 17.5942 16.593 17.5942 17.0936 17.0936C17.5942 16.593 17.5942 15.7813 17.0936 15.2807L10.8129 9L17.0936 2.71929Z" fill="#F0C6FB"/>
            </svg>
         </button>
         <svg class="burger-toggle-right" xmlns="http://www.w3.org/2000/svg" width="29" height="18" viewBox="0 0 29 18" fill="none">
            <path d="M29 4C10.2 4 3 12 0 18V0H29V4Z" fill="#172026"/>
         </svg>
      </div>
      <div class="burger-list-wrapper" :class="{'hidden-block': hidden}">
         <ul class="burger-list">
            <li>
               <a class="burger-list_btn burger-list_btn-1 text-16 font-bold" href="#main"><p class="text-16 font-bold">Главная</p></a>
            </li>
            <li>
               <a class="burger-list_btn burger-list_btn-2 text-16 font-bold" href="#features"><p class="text-16 font-bold">Преимущества</p></a>
            </li>
            <li>
               <a class="burger-list_btn burger-list_btn-3 text-16 font-bold" href="#examples"><p class="text-16 font-bold">Примеры продукции</p></a>
            </li>
            <li>
               <a class="burger-list_btn burger-list_btn-4 text-16 font-bold" href="#about"><p class="text-16 font-bold">О нас</p></a>
            </li>
            <li>
               <a class="burger-list_btn burger-list_btn-5 text-16 font-bold" href="#reviews"><p class="text-16 font-bold">Отзывы</p></a>
            </li>
            <li>
               <a class="burger-list_btn burger-list_btn-6 text-16 font-bold" href="#contacts"><p class="text-16 font-bold">Контакты</p></a>
            </li>
         </ul>
      </div>
   </section>
</template>

<style scoped lang="scss">
.burger {
   position: fixed;
   top: 0;
   left: 0;

   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;

   // overflow: hidden;
   pointer-events: none;
   z-index: 10;

   --line-height: 12px;

   &-line {
      width: 100%;
      height: var(--line-height);
      background-color: var(--black-bg);
      pointer-events: auto;
   }

   &-toggle-wrapper {
      position: relative;
      display: flex;

      --toggle-width: 112px;
      --toggle-padding: 19px;

      width: var(--toggle-width);
      height: calc(var(--toggle-width) / 2 - var(--line-height));

      .burger-toggle {
         position: absolute;
         padding: var(--toggle-padding);
         width: var(--toggle-width);
         height: var(--toggle-width);

         display: flex;
         justify-content: center;
         align-items: flex-end;

         border-radius: calc(var(--toggle-width) / 2);
         background-color: var(--black-bg);
         transform: translateY(calc(-50% - var(--line-height)));

         pointer-events: auto;

         &-left {
            position: absolute;
            top: -4px;
            right: calc(100% - 7px);
         }

         &-right {
            position: absolute;
            top: -4px;
            left: calc(100% - 7px);
         }
      }
   }

   .burger-list-wrapper {
      .burger-list {
         margin-top: 36px;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-wrap: wrap;
         gap: 30px;
   
         &_btn {
            position: relative;
            padding: 17px 30px;
            display: block;
   
            border-radius: 20px;
            background-color: var(--black-bg);
            
            opacity: 1;
            transform: translateY(0px) scale(1);
            
            pointer-events: auto;
            
            p {
               text-align: center;
               color: var(--white);
               transition: all 0.2s ease-in-out;
            }
   
            &:hover {
               background-color: var(--pink);
               
               p {
                  color: var(--black);
               }
            }

            &:active {
               opacity: 0.8;

               p {
                  transform: scale(0.9);
               }
            }
   
            &-1 {
               transition: all 0.2s ease-in-out, transform 0.2s 0s ease-in-out, opacity 0.2s 0s ease-in-out;
            }
   
            &-2 {
               transition: all 0.2s ease-in-out, transform 0.2s 0.1s ease-in-out, opacity 0.2s 0.1s ease-in-out;
            }
            
            &-3 {
               transition: all 0.2s ease-in-out, transform 0.2s 0.2s ease-in-out, opacity 0.2s 0.2s ease-in-out;
            }
            
            &-4 {
               transition: all 0.2s ease-in-out, transform 0.2s 0.3s ease-in-out, opacity 0.2s 0.3s ease-in-out;
            }
   
            &-5 {
               transition: all 0.2s ease-in-out, transform 0.2s 0.4s ease-in-out, opacity 0.2s 0.4s ease-in-out;
            }
   
            &-6 {
               transition: all 0.2s ease-in-out, transform 0.2s 0.5s ease-in-out, opacity 0.2s 0.5s ease-in-out;
            }
         }
      }

      &.hidden-block {
         .burger-list {
            &_btn {
               opacity: 0;
               transform: translateY(-25%) scale(1.05);
            }
         }
      }
   }

   @media (max-width: 1439px) {
      .burger-list-wrapper {
         .burger-list {
            margin-top: 30px;
            gap: 20px;
         }
      }
   }

   @media (max-width: 1279px) {
      .burger-list-wrapper {
         .burger-list {
            margin-top: 20px;
            max-width: 710px;
         }
      }
   }

   @media (max-width: 1279px) {
      .burger-list-wrapper {
         .burger-list {
            max-width: unset;
            flex-direction: column;

            &_btn {
               width: 242px;
            }
         }
      }
   }

   @media (max-width: 719px) {
      --line-height: 8px;

      &-toggle-wrapper {
         --toggle-width: 78px;
         --toggle-padding: 12px;

         .burger-toggle {
            &-left {
               position: absolute;
               top: -4px;
               right: calc(100% - 5px);

               width: 21px;
               height: 12px;
            }

            &-right {
               position: absolute;
               top: -4px;
               left: calc(100% - 5px);

               width: 21px;
               height: 12px;
            }
         }
      }
   }

   @media (max-width: 479px) {
      .burger-list-wrapper {
         // padding-top: 32px;
         // width: 100%;
         
         // background-color: var(--white);
         // transform: translateY(-32px);
         .burger-list {
            gap: 10px;
         }
      }
   }
}
</style>
