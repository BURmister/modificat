<script setup>
import { ref, onMounted } from 'vue';
import { useElementSize } from '@vueuse/core';

import { useGsap } from '/src/hooks/useGsap.js';

import Burger from './components/burger.vue';
import Header from './components/header.vue';
import Main from './components/main.vue';
import Footer from './components/footer.vue';

const FOOTER = ref(null);
const FOOTER_PARAMETERS = useElementSize(FOOTER);

const gsap = useGsap();

onMounted(() => {
   const FOOTER_HEIGHT = FOOTER_PARAMETERS.height.value;

   gsap.to('#main', {
      scrollTrigger: {
         trigger: '#contacts',
         start: `0% 100%`,
         markers: true,
         end: `100% 80%`,
         scrub: 1,
      },
      y: FOOTER_HEIGHT,
      opacity: 0.8,
      scale: 0.9,
   });
});
</script>

<template>
   <div class="page-wrapper">
      <Burger />
      <Header />
      <Main />
      <Footer ref="FOOTER" />
   </div>
</template>

<style scoped lang="scss"></style>
