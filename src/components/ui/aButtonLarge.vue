<script setup>
const props = defineProps(['href', 'pinkStyle', 'title']);
</script>

<template>
   <a v-if="href" :href="href" class="a-button_large" :class="{ 'a-button_large_pink': pinkStyle }">
      <p>{{ title }}</p>
   </a>
   <button v-else type="button" class="a-button_large" :class="{ 'a-button_large_pink': pinkStyle }">
      <p>{{ title }}</p>
   </button>
</template>
