<template>
  <div class="syw-section syw-gallery-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="col syw-section-head text-center">
          <span>Our Memories</span>
          <h2>Gallery</h2>
        </div>
      </div>
      <div class="row text-center animate__animated animate__slow animate__fadeIn">
        <flicking
            :options="{circular: true,
                      horizontal: true,
                      renderOnlyVisible: true
                      }"
            :plugins="plugins">
          <img v-for="(img, index) in imagesByTheme.STUDIO"
               :key="`${index}`"
               :src="img.src"
               @click="showImages(imagesByTheme.STUDIO, index)"
               class="syw-content-galleries-flicking"
          >
        </flicking>
        <h2 class="syw-section-head pt-2" style="font-weight: lighter">Studio</h2>
      </div>
    </div>
    <vue-easy-lightbox
        loop
        scrollEnabled
        escEnabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="hide"
    >
    </vue-easy-lightbox>
  </div>
</template>
<script>
import Flicking from "@egjs/vue3-flicking";
import {Fade} from "@egjs/flicking-plugins";

import VueEasyLightbox from 'vue-easy-lightbox'
import {ref} from "vue";

export default {
  name: 'SimpleGallery',
  components: {VueEasyLightbox, Flicking},
  setup: function () {
    const visible = ref(false);
    const imgs = ref([]);
    const index = ref(0);
    const show = () => {
      visible.value = true;
    };
    const hide = () => {
      visible.value = false;
    };
    const showImages = (images, imageIndex) => {
      imgs.value = images;
      index.value = imageIndex;
      show();
    };
    const imagesByTheme = {
      'STUDIO': [
        {src: require("@/assets/img/gallery/studio/IMG_1239_2.jpeg")},
        {src: require("@/assets/img/gallery/studio/IMG_1053_3.jpeg")},
        {src: require("@/assets/img/gallery/studio/IMG_1082_2.jpeg")},
        {src: require("@/assets/img/gallery/studio/IMG_1123_2.jpeg")},
        {src: require("@/assets/img/gallery/studio/IMG_1341_2.jpeg")},
      ]
    };
    const plugins = ref([new Fade("", 0)]);
    return {
      visible,
      imgs,
      index,
      show,
      hide,
      showImages,
      imagesByTheme,
      plugins
    };
  }
};
</script>
<style scoped>

.syw-gallery-bg {
  /* background: #FAFAD2 */
  /* background: rgba(0, 0, 0, 0.1); */
  /* background-image: url(~@/assets/img/wood-brown-bg.webp); */
  position: relative;
  z-index: 1;
}

.syw-gallery-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .6;
  z-index: -1;
  background-image: url(~@/assets/img/bg/wood-brown-bg.webp);
  background-size: 100% 100%;
}

.syw-content-galleries h2 {
  color: black;
  font-family: "Sacramento", Arial, serif;
  font-size: 19px;
  margin-top: 10px;
}

.syw-content-galleries div img {
  margin-top: 5%;
  border-radius: 5rem;
  width: 270px;
  height: 240px;
}

.syw-content-galleries-flicking {
  margin-top: 3%;
  padding: 1px;
  border: 1px solid white;
  width: 83%;
  height: 300px;
}

</style>