<template>
  <div class="syw-section syw-gallery-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="col syw-section-head text-center">
          <span>Our Memories</span>
          <h2>Gallery</h2>
        </div>
      </div>
      <div class="row syw-content-galleries text-center animate__animated animate__slow animate__fadeIn">
        <div class="col">
          <img v-bind:src="require('@/assets/img/gallery/studio/IMG_MAIN.jpg')"
               v-on:click="showByTheme('STUDIO')"
          />
          <h2>Studio</h2>
        </div>
      </div>
      <div class="row syw-content-galleries text-center animate__animated animate__slow animate__fadeIn">
        <div class="col">
          <img v-bind:src="require('@/assets/img/gallery/2018_2019/MAIN.jpg')"
               v-on:click="showByYear('2018-2019')"
          />
          <h2 style="font-size: 15px">2019 - 2020</h2>
        </div>
      </div>
      <div class="row syw-content-galleries text-center animate__animated animate__slow animate__fadeIn">
        <div class="col">
          <img v-bind:src="require('@/assets/img/gallery/2020_2021/MAIN.jpg')"
               v-on:click="showByYear('2020-2021')"
          />
          <h2 style="font-size: 15px">2020 - 2021</h2>
        </div>
      </div>
    </div>
    <vue-easy-lightbox
        escDisabled
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
import VueEasyLightbox from 'vue-easy-lightbox'
import {ref} from "vue";

export default {
  name: 'Gallery',
  components: {VueEasyLightbox},
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
    const showByYear = (year) => {
      imgs.value = getImagesByYear(year);
      show();
    };
    const getImagesByYear = (year) => {
      if (year === '2018-2019') {
        return [
          {title: '', src: require("@/assets/img/gallery/2018_2019/20181216_211827.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20181225_182052.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20181225_183304.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20181231_192648.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20181231_215158.jpg")},

          {title: '', src: require("@/assets/img/gallery/2018_2019/20190713_211232.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190713_211246.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190713_211253.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190714_203336.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190719_220713.jpg")},

          {title: '', src: require("@/assets/img/gallery/2018_2019/20190721_181421.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190721_181431.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190726_103604.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190726_103620.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190726_150521.jpg")},

          {title: '', src: require("@/assets/img/gallery/2018_2019/20190816_204335.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190816_222823.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190816_223051.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190830_181016.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190910_094048.jpg")},

          {title: '', src: require("@/assets/img/gallery/2018_2019/20190910_211658.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190912_110206.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190912_114134.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190912_124925.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20190921_185108.jpg")},

          {title: '', src: require("@/assets/img/gallery/2018_2019/20191012_165058.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20191012_165101.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20191019_194953.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20191019_200946.jpg")},
          {title: '', src: require("@/assets/img/gallery/2018_2019/20191228_175101.jpg")},
        ];
      }
      if (year === '2020-2021') {
        return [
          {title: '', src: require("@/assets/img/gallery/2020_2021/MAIN.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200123_134135.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200123_134140.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200229_155514.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200229_155559.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200305_190423.jpg")},

          {title: '', src: require("@/assets/img/gallery/2020_2021/20200305_200242.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200321_121847.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200425_184859.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200605_184533.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200704_124214.jpg")},

          {title: '', src: require("@/assets/img/gallery/2020_2021/20200726_190456.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200726_190712.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200726_200439.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20200726_200455.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20201031_202534.jpg")},

          {title: '', src: require("@/assets/img/gallery/2020_2021/20210210_151401.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20210620_183140.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20210626_185630.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20210808_182957.jpg")},
          {title: '', src: require("@/assets/img/gallery/2020_2021/20211119_193120.jpg")},

          {title: '', src: require("@/assets/img/gallery/2020_2021/20211225_121135.jpg")},
        ];
      }
      return [];
    }
    const showByTheme = (theme) => {
      imgs.value = getImagesByTheme(theme);
      show();
    };
    const getImagesByTheme = (theme) => {
      if (theme === 'STUDIO') {
        return [
          {title: '', src: require("@/assets/img/gallery/studio/IMG_1239.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_1053.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_1082.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_1123.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_1210.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_1215.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_1341.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_1361.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_0427.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_0459.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_0543.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_0657.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_0801.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_0829.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_0921.jpg")},
          {title: '', src: require("@/assets/img/gallery/studio/IMG_0985.jpg")},
        ];
      }
      if (theme === 'travel') {
        return [
          {title: '', src: require("@/assets/img/gallery/theme/tmon_1.jpg")},
        ];
      }
      return [];
    }
    return {
      visible,
      imgs,
      index,
      show,
      hide,
      showByYear,
      getImagesByYear,
      showByTheme,
      getImagesByTheme
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
  opacity: .4; 
  z-index: -1;
  background-image: url(~@/assets/img/wood-brown-bg.webp);
}

.syw-content-galleries h2 {
  color: black;
  font-family: "Sacramento", Arial, serif;
  font-size: 22px;
  margin-top: 10px;
}

.syw-content-galleries div img {
  margin-top: 5%;
  border-radius: 6rem;
  width: 270px;
  height: 240px;
}

</style>