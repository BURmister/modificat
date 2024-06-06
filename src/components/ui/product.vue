<script setup>
const props = defineProps(['product']);
// console.log(props.product)
</script>

<template>
   <a v-if="product" :href="product.PRODUCT_LINK" class="card flex flex-col">
      <div class="img-overlay _block_rounded">
         <img :src="`https://${product.PRODUCT_IMG}`" />
      </div>
      <div class="name">
         <h3 class="caption-20">{{ product.PRODUCT_NAME }}</h3>
         <p class="text-20">{{ product.DESCRIPTION }}</p>
      </div>
   </a>
</template>

<style scoped lang="scss">
.card {
   flex: 1;
   width: 100%;
   gap: 20px;

   .img-overlay {
      position: relative;
      padding: 50px 0;
      width: 100%;
      // height: 530px;

      display: flex;
      justify-content: center;
      align-items: center;

      // background-color: var(--blue-opacity);
      overflow: hidden;
      z-index: 1;

      img {
         height: 428px;
         width: auto;
         object-fit: contain;
      }

      &:before {
         position: absolute;
         content: '';
         top: -50%;
         left: -50%;

         width: 200%;
         height: 200%;
         background-image: url('../../assets/phone-gr.png');
         background-repeat: no-repeat;
         background-size: 200% 200%;
         background-position: 0 0;
         opacity: 0.1;

         transition: all 0.2s ease-out;
         z-index: -1;
      }
   }

   .name {
      .caption-20,
      .text-20 {
         transition: color 0.2s ease-in-out;
      }
   }

   &:hover {
      .img-overlay {
         &:before {
            opacity: 1;
            transform: translate(-10px);
            animation: highlightBackground 4s 0.2s ease-in-out infinite;
         }
      }

      .name {
         .caption-20,
         .text-20 {
            color: var(--blue);
         }
      }
   }

   @media (max-width: 1919px) {
      .name {
         .text-20 {
            font-size: 16px;
         }
      }
   }

   @media (max-width: 1439px) {
      .img-overlay {
         padding: 60px 0;

         img {
            height: 340px;
         }
      }
   }

   @media (max-width: 1279px) {
      .img-overlay {
         padding: 50px 0;

         img {
            height: 250px;
         }
      }
   }

   @media (max-width: 999px) {
      .img-overlay {
         padding: 40px 0;

         img {
            height: 210px;
         }
      }

      .name {
         .text-20 {
            font-size: 14px;
         }
      }
   }

   @media (max-width: 479px) {
      min-width: 210px;
      scroll-snap-align: center;
      scroll-snap-stop: always;
   }
}
</style>
