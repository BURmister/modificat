<script setup>
import { ref } from 'vue';
const props = defineProps(['video']);

const videoItem = ref(null);
const videoPlay = ref(false);
const updatePaused = (event) => {
   videoItem.value = event.target;
   videoPlay.value = !event.target.paused;
   // console.log(videoItem.value);
   // console.log(videoPlay.value);
};
const handlePlay = () => {
   videoItem?.value?.play();
   videoPlay.value = true;
};

// console.log('video:', props.video);
</script>

<template>
   <div class="video-item _block_rounded">
      <video
         ref="videoItem"
         class="video"
         :src="'https://' + video.FILE_PATH"
         autoplay
         preload="auto"
         playsinline=""
         webkit-playsinline=""
         muted=""
         loop=""
         controls=""
         disablepictureinpicture
         controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
         :poster="'https://' + video.VIDEO_POSTER"
         @canplay="updatePaused"
         @playing="updatePaused"
         @pause="updatePaused"
         v-if="video.FILE_VIDEO_NAME"
      ></video>
      <div class="video _video_iframe_wrapper" v-if="!video.FILE_VIDEO_NAME && video.IFRAME_VIDEO" v-html="video.IFRAME_VIDEO"></div>
      <button class="handle-play" :class="{ hide: videoPlay }" @click="handlePlay" type="button" v-if="video.FILE_VIDEO_NAME">
         <svg xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158" fill="none">
            <circle cx="79" cy="79" r="79" fill="white" fill-opacity="0.8" />
            <path d="M106.75 78.6817L64 103.363L64 54L106.75 78.6817Z" fill="#4328EB" />
         </svg>
      </button>
   </div>
</template>

<style scoped lang="scss">
.video-item {
   position: relative;
   width: 100%;
   height: var(--video-item-height);
   z-index: 1;
   overflow: hidden;

   .video,
   iframe {
      width: 100%;
      height: var(--video-item-height);
      object-fit: cover;
      object-position: center;

      &::-webkit-media-controls-fullscreen-button {
         display: none;
      }
   }

   .handle-play {
      --size: 158px;
      position: absolute;
      top: calc(50% - var(--size) / 2);
      left: calc(50% - var(--size) / 2);
      transition: all 0.1s ease-out;
      z-index: 2;

      svg {
         width: var(--size);
         height: var(--size);
      }

      &.hide {
         opacity: 0;
         pointer-events: none;
      }

      &:active {
         opacity: 0.8;
         transform: scale(0.9);
      }

      @media (max-width: 1919px) {
         --size: 100px;
      }

      @media (max-width: 1279px) {
         --size: 80px;
      }

      @media (max-width: 999px) {
         --size: 50px;
         display: none;
      }

      @media (max-width: 479px) {
         --size: 40px;
      }
   }
}
</style>
