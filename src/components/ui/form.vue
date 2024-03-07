<script setup>
import { ref } from 'vue';
import { useIMask } from 'vue-imask';
import { Vue3Lottie } from 'vue3-lottie';
import { useChallengeV3 } from 'vue-recaptcha/head'
import { postData } from '../../hooks/useAxios.js';
import Modal from './modal.vue';

import AnimD from '../../assets/anim/anim-4.json';

const SERVER_PROTOCOL = import.meta.env.VITE_SERVER_PROTOCOL;
const SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;


const props = defineProps(['title', 'checkId', 'successBlank']);
const successSubmit = ref(false);

const NAME = ref('');
const PHONE = ref('');
const EMAIL = ref('');
const QUESTION = ref('');

const { el } = useIMask({ mask: '{+7 (9}00{) }000{-}00{-}00' });
const { execute } = useChallengeV3('submit');

const submitForm = async () => {
   
   // console.log({
   //    NAME: NAME.value,
   //    PHONE: PHONE.value,
   //    EMAIL: EMAIL.value,
   //    TEXT: QUESTION.value
   // })
      
      
   try {
      const captcha = await execute();
      const data = await postData(SERVER_PROTOCOL + SERVER_DOMAIN + "/ajax/send_form.php", {
         NAME: NAME.value,
         PHONE: PHONE.value,
         EMAIL: EMAIL.value,
         TEXT: QUESTION.value,
         RECAPTCHA: captcha,
      });

      console.log(data);
      if (data.status) {
         successSubmit.value = true;
      }
   } catch (error) {
      console.error(error);
   } finally {
   }
};
</script>

<template>
   <form v-if="successBlank" class="wrapper flex flex-col items-center" @submit.prevent="submitForm">
      <h3 class="text-center caption-32 text-white"><slot></slot></h3>
      <div class="form-fields flex flex-col">
         <div class="form-prop_list">
            <div class="form-prop form-prop-name">
               <input class="norm-input text-16 text-blue" v-model="NAME" type="text" name="NAME" placeholder="Имя" />
            </div>
            <div class="form-prop form-prop-phone">
               <input
                  ref="el"
                  class="norm-input text-16 text-blue"
                  v-model="PHONE"
                  type="tel"
                  name="PHONE"
                  required
                  minlength="18"
                  maxlength="18"
                  placeholder="Телефон*"
               />
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
               <input class="checkbox-input" type="checkbox" name="CONFIRM_PRIVACY" required :id="checkId" checked />
               <label class="checkbox-label" :for="checkId">
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
      <Modal v-if="successSubmit" :defaultOpen="true">
         <div class="wrapper haveSubmited flex flex-col">
            <div class="haveSubmitted_caption flex flex-col">
               <h3 class="caption-32 text-white">Спасибо за Ваши вопросы!</h3>
               <p class="text-20 text-white">Мы свяжемся с Вами в ближайшее время, ожидайте звонка.</p>
            </div>
            <div class="json-animation-wrapper">
               <Vue3Lottie :animationData="AnimD" />
            </div>
            <svg class="line-vector left-line" width="569" height="285" viewBox="0 0 569 285" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.5 38.0001C20.3333 19.0001 66.3 -13.2999 99.5 9.50014C141 38.0001 100.5 104 83 99.5C65.5 95 113 30 162 51C211 72 192 244.5 162 244.5C132 244.5 197.607 138 396.5 138C492.5 138 567.5 182 567.5 283.5" stroke="#FFD747" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg class="line-vector right-line" width="201" height="327" viewBox="0 0 201 327" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M199.5 1C149.167 3.5 46.2 18.4 37 58C25.5 107.5 140.5 142.5 168.5 141C196.5 139.5 148 121 64.5002 141C-18.9998 161 -14.4998 216.5 47.0002 234C108.5 251.5 180.5 267 164.5 291C151.7 310.2 128.167 322 118 325.5" stroke="#FFD747" stroke-width="2" stroke-linecap="round"/>
            </svg>
         </div>
      </Modal>
   </form>
   <Transition v-else name="success">
      <form v-if="!successSubmit" class="wrapper flex flex-col items-center" @submit.prevent="submitForm">
         <h3 class="text-center caption-32 text-white"><slot></slot></h3>
         <div class="form-fields flex flex-col">
            <div class="form-prop_list">
               <div class="form-prop form-prop-name">
                  <input class="norm-input text-16 text-blue" v-model="NAME" type="text" name="NAME" placeholder="Имя" />
               </div>
               <div class="form-prop form-prop-phone">
                  <input
                     ref="el"
                     class="norm-input text-16 text-blue"
                     v-model="PHONE"
                     type="tel"
                     name="PHONE"
                     required
                     minlength="18"
                     maxlength="18"
                     placeholder="Телефон*"
                  />
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
                  <input class="checkbox-input" type="checkbox" name="CONFIRM_PRIVACY" required :id="checkId" checked />
                  <label class="checkbox-label" :for="checkId">
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
      <div v-else class="wrapper haveSubmited flex flex-col">
         <div class="haveSubmitted_caption flex flex-col">
            <h3 class="caption-32 text-white">Спасибо за Ваши вопросы!</h3>
            <p class="text-20 text-white">Мы свяжемся с Вами в ближайшее время, ожидайте звонка.</p>
         </div>
         <div class="json-animation-wrapper">
            <Vue3Lottie :animationData="AnimD" />
         </div>
         <svg class="line-vector left-line" width="569" height="285" viewBox="0 0 569 285" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 38.0001C20.3333 19.0001 66.3 -13.2999 99.5 9.50014C141 38.0001 100.5 104 83 99.5C65.5 95 113 30 162 51C211 72 192 244.5 162 244.5C132 244.5 197.607 138 396.5 138C492.5 138 567.5 182 567.5 283.5" stroke="#FFD747" stroke-width="2" stroke-linecap="round"/>
         </svg>
         <svg class="line-vector right-line" width="201" height="327" viewBox="0 0 201 327" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M199.5 1C149.167 3.5 46.2 18.4 37 58C25.5 107.5 140.5 142.5 168.5 141C196.5 139.5 148 121 64.5002 141C-18.9998 161 -14.4998 216.5 47.0002 234C108.5 251.5 180.5 267 164.5 291C151.7 310.2 128.167 322 118 325.5" stroke="#FFD747" stroke-width="2" stroke-linecap="round"/>
         </svg>
      </div>
   </Transition>
</template>

<style scoped lang="scss">

.success-enter-active,
.success-leave-active {
   transition: opacity 0.4s ease-in-out;
}

.success-enter-from,
.success-leave-to {
   opacity: 0;
}

.wrapper {
   position: relative;
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
               max-height: 150px;
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

   &.haveSubmited {
      align-items: center;
      gap: unset;

      .haveSubmitted_caption {
         gap: 30px;

         .text-20 {
            max-width: 365px;
         }
      }

      .json-animation-wrapper {
         --margin-bottom: 30px;
         --animation-height: 263px;
         position: relative;
         height: calc(var(--animation-height) - var(--margin-bottom));
         width: 100%;

         .lottie-animation-container {
            position: absolute;
            bottom: 0;
            right: 0;
            margin: unset;
            width: auto;
            height: var(--animation-height);
            transform: translate(-90px, var(--margin-bottom));
            z-index: 1;
         }
      }

      .line-vector {
         position: absolute;
         bottom: -30px;

         stroke-dasharray: 1800;
         stroke-dashoffset: 1800;
         animation: animSvgStroke 8s ease-in-out infinite;

         &.left-line {
            left: -30px;
         }

         &.right-line {
            right: -30px;
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

      &.haveSubmited {
         .line-vector {
            &.left-line {
               width: 416px;
               height: 208px;
            }

            &.right-line {
               width: 134px;
               height: 218px;
            }
         }
      }
   }

   @media (max-width: 999px) {
      padding: 0 30px;
      width: 666px;
      gap: 20px;

      .form-fields {
         .form-prop_list {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 42px) 104px 60px;
            gap: 14px;

            .form-prop {
               &-q {
                  grid-column: unset;
                  max-height: 104px;
               }
            }
         }

         .submit-button {
            border-radius: 10px;
         }
      }

      &.haveSubmited {

         .haveSubmitted_caption {
            gap: 30px;
         }

         .json-animation-wrapper {
            .lottie-animation-container {
               transform: translate(-40px, var(--margin-bottom));
            }
         }

         .line-vector {
            &.left-line {
               width: 290px;
               height: 145px;
            }

            &.right-line {
               width: 134px;
               height: 218px;
            }
         }
      }
   }

   @media (max-width: 719px) {
      padding: 0 20px;
      width: 440px;

      &.haveSubmited {
         .caption-32 {
            max-width: 280px;
         }

         .json-animation-wrapper {
            --margin-bottom: 20px;
            --animation-height: 242px;

            .lottie-animation-container {
               transform: translate(0, var(--margin-bottom));
            }
         }

         .line-vector {
            bottom: -20px;

            &.left-line {
               left: -20px;
            }

            &.right-line {
               display: none;
            }
         }
      }
   }

   @media (max-width: 479px) {
      padding: 0 10px;
      width: 100%;

      .caption-32 {
         max-width: 280px;
      }

      .form-fields {
         .form-prop_list {
            grid-template-rows: repeat(3, 42px) 104px 40px;
         }
      }

      &.haveSubmited {
         .haveSubmitted_caption {
            gap: 14px;

            .text-20 {
               max-width: 240px;
            }
         }

         .json-animation-wrapper {
            --animation-height: 140px;
         }

         .line-vector {
            &.left-line {
               width: 169px;
               height: 84px;
            }
         }
      }
   }
}
</style>
