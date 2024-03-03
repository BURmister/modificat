<script setup>
import { ref, defineProps } from 'vue';
import aButton from './aButton.vue';
import aButtonLarge from './aButtonLarge.vue';

const props = defineProps(['modalShow', 'buttonTitle', 'buttonLarge', 'buttonPinkStyle', 'buttonWhiteStyle', 'buttonBottomStyle']);
const modalShow = ref(false);

const handleOpen = () => {
   modalShow.value = true;
   document.documentElement.style.overflow = 'hidden';
};

const handleClose = () => {
   modalShow.value = false;
   document.documentElement.style.overflow = 'auto';
};

// переработать структуру:
// -> отдельно aButton и aButtonLarge уже не нужны. Перенести код ссылок в один файл и переключать отобрадение по пропсу.
// -> все кнопки в main и footer, отвечающие за открытие модалки поменять на этот компонент модалки. Добавить пропс для переключения отображения кнопки.
// -> доделать success окно формы
</script>

<template>
   <div>
      <aButtonLarge v-if="buttonLarge" :title="buttonTitle" :pinkStyle="buttonPinkStyle" @handleClick="handleOpen" />
      <aButton v-else :whiteStyle="buttonWhiteStyle" :bottomStyle="buttonBottomStyle" @handleClick="handleOpen" />
      <teleport to="body">
         <Transition name="modal">
            <div v-if="modalShow" class="modal-wrapper">
               <div class="modal-overlay" @click="handleClose"></div>
               <div class="modal _block_rounded _block_blue-gr-radiant">
                  <button class="modal-close" type="button" @click="handleClose">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                           d="M17.0936 2.71929C17.5942 2.21868 17.5942 1.40703 17.0936 0.906428C16.593 0.405822 15.7813 0.405822 15.2807 0.906428L9 7.18714L2.71929 0.906429C2.21868 0.405822 1.40703 0.405822 0.906428 0.906428C0.405822 1.40703 0.405822 2.21868 0.906428 2.71929L7.18714 9L0.906429 15.2807C0.405822 15.7813 0.405822 16.593 0.906428 17.0936C1.40703 17.5942 2.21868 17.5942 2.71929 17.0936L9 10.8129L15.2807 17.0936C15.7813 17.5942 16.593 17.5942 17.0936 17.0936C17.5942 16.593 17.5942 15.7813 17.0936 15.2807L10.8129 9L17.0936 2.71929Z"
                           fill="white"
                        />
                     </svg>
                  </button>
                  <slot></slot>
               </div>
            </div>
         </Transition>
      </teleport>
   </div>
</template>

<style scoped lang="scss">
.modal {
   position: relative;
   padding: 30px;
   z-index: 2;

   &-close {
      position: absolute;
      top: 15px;
      right: 15px;

      padding: 15px;
      transition: all 0.2s ease-in-out;

      &:active {
         opacity: 0.8;
         transform: scale(0.9);
      }
   }

   &-wrapper {
      position: fixed;
      top: 0;
      left: 0;

      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 11;
   }

   &-overlay {
      position: fixed;
      top: 0;
      left: 0;

      height: 100%;
      width: 100%;

      background-color: var(--black-light);
      z-index: 1;

      cursor: pointer;
   }

   &-enter-active,
   &-leave-active {
      transition: opacity 0.4s ease-in-out;

      .modal {
         transition: transform 0.4s ease-in-out;
      }
   }

   &-enter-from,
   &-leave-to {
      opacity: 0;
      pointer-events: none;

      .modal {
         transform: translateY(5%) scale(0.95);
      }
   }

   @media (max-width: 999px) {
      padding: 20px 0;

      &-close {
         top: 10px;
         right: 10px;
         padding: 10px;
      }
   }

   @media (max-width: 479px) {
      border-radius: 10px;
   }
}
</style>
