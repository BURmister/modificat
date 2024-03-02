<script setup>
import { ref } from 'vue';
import { useIMask } from 'vue-imask';

import { getData } from '../../hooks/useAxios.js';

const props = defineProps(['title']);

const NAME = ref('');
const PHONE = ref('');
const EMAIL = ref('');
const QUESTION = ref('');

const { el } = useIMask({ mask: '{+7 (9}00{) }000{-}00{-}00' });

const submitForm = () => {
   // console.log({
   //    NAME: NAME.value,
   //    PHONE: PHONE.value,
   //    EMAIL: EMAIL.value,
   //    QUESTION: QUESTION.value
   // })

   try {
      const data = getData('http://co71945-bitrix-nvmby.tw1.ru/Basket/test');
      console.log(data);
   } catch (error) {
      console.error(error);
   } finally {
   }
};
</script>

<template>
   <form class="flex flex-col" @submit.prevent="submitForm">
      <h3 class="text-center caption-32 text-white"><slot></slot></h3>
      <div class="form-fields flex flex-col">
         <div class="form-prop_list">
            <div class="form-prop form-prop-name">
               <input class="norm-input text-16 text-blue" v-model="NAME" type="text" name="NAME" placeholder="Имя" />
            </div>
            <div class="form-prop form-prop-phone">
               <input ref="el" class="norm-input text-16 text-blue" v-model="PHONE" type="tel" name="PHONE" required placeholder="Телефон*" />
            </div>
            <div class="form-prop form-prop-email">
               <input class="norm-input text-16 text-blue" v-model="EMAIL" type="email" name="EMAIL" placeholder="E-mail" />
            </div>
            <div class="form-prop form-prop-q">
               <textarea class="norm-input text-16 text-blue" v-model="QUESTION" name="QUESTION" placeholder="Напишите свои вопросы"></textarea>
            </div>
            <div>
               <button class="submit-button" type="submit"><p class="caption-20oo text-blue">Отправить</p></button>
            </div>
         </div>
         <div class="form-check">
            <div class="checkbox-wrap">
               <input class="checkbox-input" type="checkbox" required id="confirm-privacy" checked />
               <label class="checkbox-label" for="confirm-privacy">
                  <svg class="active-check" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                     <rect x="1.5" y="1" width="21" height="21" rx="7" fill="#F0C6FB" stroke="#F0C6FB" stroke-width="2" />
                     <path d="M7.5 11L10.5 14.5L17 8.5" stroke="#4328EB" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <div class="disable-check-wrap">
                     <svg class="disable-check" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                        <rect x="1.5" y="1" width="21" height="21" rx="7" fill="var(--blue)" />
                     </svg>
                  </div>
               </label>
            </div>
            <p class="text-16 text-white">Принимаю условия <a href="/politics">политики конфиденциальности</a></p>
         </div>
      </div>
   </form>
</template>

<style scoped lang="scss">
form {
   margin: 0 auto;
   width: 970px;
   gap: 40px;

   .form-fields {
      gap: 20px;

      .form-prop_list {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: 60px 150px;
         gap: 20px;

         .form-prop {
            &-q {
               grid-column: span 2;
            }
         }
      }

      .submit-button {
         width: 100%;
         height: 100%;

         display: flex;
         align-items: center;
         justify-content: center;

         border-radius: 20px;
         background-color: var(--pink);

         transition: all 0.2s ease-out;

         p {
            transition: all 0.2s ease-out;
         }

         &:hover {
            letter-spacing: 5px;
         }

         &:active {
            opacity: 0.8;

            p {
               transform: scale(0.9);
            }
         }
      }
   }

   @media (max-width: 1919px) {
   }

   @media (max-width: 1439px) {
   }

   @media (max-width: 1279px) {
      width: 820px;
      gap: 30px;
   }

   @media (max-width: 999px) {
      padding: 0 30px;
      width: 100%;
      gap: 20px;

      .form-fields {
         .form-prop_list {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 42px) 104px 60px;
            gap: 14px;

            .form-prop {
               &-q {
                  grid-column: unset;
               }
            }
         }

         .submit-button {
            border-radius: 10px;
         }
      }
   }

   @media (max-width: 719px) {
      padding: 0 20px;
   }

   @media (max-width: 479px) {
      padding: 0 10px;
      .form-fields {
         .form-prop_list {
            grid-template-rows: repeat(3, 42px) 104px 40px;
         }
      }
   }
}
</style>
