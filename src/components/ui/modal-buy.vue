<script setup>
const props = defineProps(['OZON_LINK', 'YMARKET_LINK'])
</script>

<template>
   <div class="buy-modal flex flex-col items-center">
      <h3 class="text-center caption-32 text-white"><slot></slot></h3>
      <div class="buy-modal_content flex">
         <a class="buy-link buy-link_ozon flex items-center justify-center" target="_blank" :href="OZON_LINK">
            <img src="../../assets/ozon-logo.png"/>
         </a>
         <a class="buy-link buy-link_market flex items-center justify-center" target="_blank" :href="YMARKET_LINK">
            <img src="../../assets/ymarket-logo2.png"/>
         </a>
      </div>
   </div>
</template>

<style scoped lang="scss">
.buy-modal {
   gap: 30px;

   &_content {
      gap: 30px;

      .buy-link {
         width: 280px;
         height: 60px;

         border-radius: 20px;
         background-color: var(--white);
         transition: all 0.2s ease-in-out;

         img {
            height: 100%;
            width: auto;
            transition: all 0.2s ease-in-out;
         }

         &:active {
            opacity: 0.8;

            img {
               transform: scale(0.9);
            }
         }
      }
   }

   @media (max-width: 999px) {
      padding: 0 20px;
      gap: 20px;

      &_content {
         gap: 20px;
      }
   }

   @media (max-width: 719px) {
      gap: 30px;

      &_content {
         gap: 14px;
         flex-direction: column;
      }
   }

   @media (max-width: 479px) {
      gap: 30px;

      &_content {
         gap: 14px;
         flex-direction: column;

         .buy-link {
            width: 240px;
            height: 40px;
            border-radius: 10px;
         }
      }
   }
}
</style>
