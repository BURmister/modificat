<script setup>
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';

import Burger from './components/burger.vue';
import Header from './components/header.vue';
import Main from './components/main.vue';
import Footer from './components/footer.vue';

const footerRef = ref(null);
const FOOTER_PARAMETERS = useElementSize(footerRef);

</script>

<template>
   <div class="page-wrapper">
      <Burger />
      <Header />
      <Main :footerRef="footerRef" :FOOTER_HEIGHT="FOOTER_PARAMETERS.height.value"/>
      <Footer :ref="footerRef" />
   </div>
</template>

<style scoped lang="scss"></style>
