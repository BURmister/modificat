<script setup>
const props = defineProps(['href']);
</script>

<template>
   <button type="button" class="blue-akor">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
         <circle cx="25" cy="25" r="25" fill="#4328EB" />
         <path
            class="visible-arrow"
            d="M18.1952 30.6953C17.8047 31.0859 17.8047 31.719 18.1952 32.1096C18.5858 32.5001 19.2189 32.5001 19.6095 32.1096L18.1952 30.6953ZM31.7926 19.5122C31.7926 18.9599 31.3449 18.5122 30.7926 18.5122H21.7926C21.2403 18.5122 20.7926 18.9599 20.7926 19.5122C20.7926 20.0645 21.2403 20.5122 21.7926 20.5122H29.7926V28.5122C29.7926 29.0645 30.2403 29.5122 30.7926 29.5122C31.3449 29.5122 31.7926 29.0645 31.7926 28.5122V19.5122ZM19.6095 32.1096L31.4997 20.2193L30.0855 18.8051L18.1952 30.6953L19.6095 32.1096Z"
            fill="white"
         />
         <path
            class="hover-arrow"
            d="M18.1952 30.6953C17.8047 31.0859 17.8047 31.719 18.1952 32.1096C18.5858 32.5001 19.2189 32.5001 19.6095 32.1096L18.1952 30.6953ZM31.7926 19.5122C31.7926 18.9599 31.3449 18.5122 30.7926 18.5122H21.7926C21.2403 18.5122 20.7926 18.9599 20.7926 19.5122C20.7926 20.0645 21.2403 20.5122 21.7926 20.5122H29.7926V28.5122C29.7926 29.0645 30.2403 29.5122 30.7926 29.5122C31.3449 29.5122 31.7926 29.0645 31.7926 28.5122V19.5122ZM19.6095 32.1096L31.4997 20.2193L30.0855 18.8051L18.1952 30.6953L19.6095 32.1096Z"
            fill="white"
         />
      </svg>
   </button>
</template>

<style scoped lang="scss">
.blue-akor {
   position: absolute;
   top: 40px;
   right: 40px;

   transition: all 0.2s ease-in-out;

   svg {
      border-radius: 50%;
      overflow: hidden;

      path {
         transition: all 0.4s ease-in-out;
      }

      .hover-arrow {
         transform: translate(-100%, 100%);
      }
   }

   &:hover {
      svg {
         .visible-arrow {
            transform: translate(100%, -100%);
         }

         .hover-arrow {
            transform: translate(0%, 0%);
         }
      }
   }

   &:active {
      opacity: 0.8;
      transform: scale(0.9);
   }

   @media (max-width: 1919px) {
      width: 50px;
      height: 50px;
   }

   @media (max-width: 1439px) {
      top: 30px;
      right: 30px;
   }

   @media (max-width: 999px) {
      top: 20px;
      right: 20px;
   }
}
</style>
