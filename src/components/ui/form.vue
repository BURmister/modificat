<script setup>
import { ref } from 'vue';

const props = defineProps(['title']);

const NAME = ref('');
const PHONE = ref('');
const EMAIL = ref('');
const QUESTION = ref('');

const submitForm = () => {};
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
               <input class="norm-input text-16 text-blue" v-model="PHONE" type="text" name="PHONE" required placeholder="Телефон*" />
            </div>
            <div class="form-prop form-prop-email">
               <input class="norm-input text-16 text-blue" v-model="EMAIL" type="text" name="EMAIL" required placeholder="E-mail*" />
            </div>
            <div class="form-prop form-prop-q">
               <textarea class="norm-input text-16 text-blue" v-model="QUESTION" name="QUESTION" placeholder="Напишите свои вопросы"></textarea>
            </div>
            <div>
               <button class="submit-button" type="submit"><p class="caption-20oo text-blue">Отправить</p></button>
            </div>
         </div>
         <div class="form-check">
            <input class="checkbox-input" type="checkbox" id="confirm-privacy" />
            <label class="checkbox-label" for="confirm-privacy"></label>
            <p class="text-16 text-pink">Принимаю условия политики конфиденциальности</p>
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
}
</style>
