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
      <div class="row syw-content-galleries text-center animate__animated animate__slow animate__fadeIn">
        <flicking
            :options="{circular: true,
                      horizontal: true,
                      renderOnlyVisible: true}"
            :plugins="plugins">
          <img v-for="(img, index) in imagesByYear['2018-2019']"
               :key="`${index}`"
               :src="img.src"
               @click="showImages(imagesByYear['2018-2019'], index)"
               class="syw-content-galleries-flicking"
          >
        </flicking>
        <h2 class="syw-section-head">2018-2019</h2>
      </div>
      <div class="row syw-content-galleries text-center animate__animated animate__slow animate__fadeIn">
        <flicking
            :options="{circular: true,
                      horizontal: true,
                      renderOnlyVisible: true}"
            :plugins="plugins">
          <img v-for="(img, index) in imagesByYear['2020-2021']"
               :key="`${index}`"
               :src="img.src"
               @click="showImages(imagesByYear['2020-2021'], index)"
               class="syw-content-galleries-flicking"
          >
        </flicking>
        <h2 class="syw-section-head">2020-2021</h2>
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
  name: 'Gallery',
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
        {src: require("@/assets/img/gallery/studio/IMG_1239.jpg")},
        // {src: require("@/assets/img/gallery/studio/IMG_1053.jpg")},
        {src: require("@/assets/img/gallery/studio/IMG_1053_2.jpeg")},
        {src: require("@/assets/img/gallery/studio/IMG_1082.jpg")},
        {src: require("@/assets/img/gallery/studio/IMG_1123.jpg")},
        {src: require("@/assets/img/gallery/studio/IMG_1210.jpg")},

        {src: require("@/assets/img/gallery/studio/IMG_1341.jpg")},
        {src: require("@/assets/img/gallery/studio/IMG_0829.jpg")},
      ]
    };
    const imagesByYear = {
      '2018-2019': [
        {src: require("@/assets/img/gallery/2018_2019/20181225_182052.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20181231_215158.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190713_211232.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190721_181431.jpg")},

        {src: require("@/assets/img/gallery/2018_2019/20190726_103604.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190726_150521.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190816_204335.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190816_222823.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190816_223051.jpg")},

        {src: require("@/assets/img/gallery/2018_2019/20190910_211658.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190912_110206.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190912_124925.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20190921_185108.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20191012_165101.jpg")},

        {src: require("@/assets/img/gallery/2018_2019/20191019_194953.jpg")},
        {src: require("@/assets/img/gallery/2018_2019/20191019_200946.jpg")},
      ],
      '2020-2021': [
        {src: require("@/assets/img/gallery/2020_2021/20200229_155559.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20200305_200242.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20200321_121847.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20200425_184859.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20200605_184533.jpg")},

        {src: require("@/assets/img/gallery/2020_2021/20200704_124214.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20200726_190712.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20200726_200439.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20201031_202534.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20210210_151401.jpg")},

        {src: require("@/assets/img/gallery/2020_2021/20210626_185630.jpg")},
        {src: require("@/assets/img/gallery/2020_2021/20210808_182957.jpg")},
      ],
    }
    const plugins = ref([new Fade("", 0)]);
    return {
      visible,
      imgs,
      index,
      show,
      hide,
      showImages,
      imagesByYear,
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