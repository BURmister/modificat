<script setup>
import { defineProps } from 'vue';

const props = defineProps(['modalShow']);
</script>

<template>
   <Transition name="modal">
      <div v-if="modalShow" class="modal">
         <slot></slot>
      </div>
   </Transition>
</template>

<style scoped lang="scss">
.modal {
   position: fixed;
   top: 0;
   left: 0;

   height: 100%;
   width: 100%;

   background-color: var(--black-light);
   z-index: 2;

   &-enter-active,
   &-leave-active {
      transition: opacity 0.4s ease-in-out;
   }

   &-enter-from,
   &-leave-to {
      opacity: 0;
      pointer-events: none;
   }
}
</style>
