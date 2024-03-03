<script setup>
import { ref, defineProps } from 'vue';

import Modal from './modal.vue';
import Form from './form.vue';

const props = defineProps(['href', 'pinkStyle', 'title']);
const modalShow = ref(false);

const handleClick = () => {
   console.log('prev: ', modalShow.value);
   modalShow.value = !modalShow.value;
   console.log('new: ', modalShow.value);
};
</script>

<template>
   <a v-if="href" :href="href" class="a-button_large" :class="{ 'a-button_large_pink': pinkStyle }">
      <p>{{ title }}</p>
   </a>
   <div v-else>
      <button type="button" class="a-button_large" :class="{ 'a-button_large_pink': pinkStyle }" @click="handleClick">
         <p>{{ title }}</p>
      </button>
      <Modal :modalShow="modalShow"><Form checkId="1708" /></Modal>
   </div>
</template>
