<script setup>
const prop = defineProps(['review']);
</script>

<template>
   <div v-if="review" class="card _block_rounded">
      <div class="card-user">
         <svg xmlns="http://www.w3.org/2000/svg" width="67" height="66" viewBox="0 0 67 66" fill="none">
            <circle cx="33.5" cy="33" r="33" fill="#F0C6FB" />
            <path
               d="M39.4875 18.0453C37.9671 16.4039 35.8437 15.5 33.5 15.5C31.1437 15.5 29.0132 16.3984 27.5 18.0297C25.9703 19.6789 25.225 21.9203 25.4 24.3406C25.7468 29.1156 29.3804 33 33.5 33C37.6195 33 41.2468 29.1164 41.5992 24.3422C41.7765 21.9437 41.0265 19.707 39.4875 18.0453ZM47.25 50.5H19.75C19.39 50.5047 19.0335 50.4291 18.7065 50.2786C18.3794 50.1282 18.09 49.9068 17.8593 49.6305C17.3515 49.0234 17.1468 48.1945 17.2984 47.3562C17.9578 43.6984 20.0156 40.6258 23.25 38.4687C26.1234 36.5539 29.7632 35.5 33.5 35.5C37.2367 35.5 40.8765 36.5547 43.75 38.4687C46.9843 40.625 49.0421 43.6977 49.7015 47.3555C49.8531 48.1937 49.6484 49.0227 49.1406 49.6297C48.91 49.9062 48.6206 50.1277 48.2935 50.2783C47.9665 50.4288 47.61 50.5046 47.25 50.5Z"
               fill="white"
            />
         </svg>
         <p class="text-20 font-semibold">{{ review.NAME }}</p>
      </div>
      <p class="text-20">{{ review.TEXT_REV }}</p>
   </div>
</template>

<style scoped lang="scss">
.card {
   padding: 30px;
   width: 100%;

   display: flex;
   flex-direction: column;
   gap: 14px;

   background-color: var(--blue-opacity);

   .card-user {
      display: flex;
      align-items: center;
      gap: 20px;
   }

   @media (max-width: 479px) {
      .card-user {
         svg {
            width: 44px;
            height: 44px;
         }
      }
   }
}
</style>
