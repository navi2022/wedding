<template>
  <div class="syw-section syw-gallery-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="col syw-section-head text-center">
          <span>Our Memories</span>
          <h2>Gallery</h2>
        </div>
      </div>
      <div class="row syw-section-content text-center">
        <div class="col-6">
          <img class="w-100 h-75"
               v-bind:src="require('@/assets/img/hall/1.jpg')"
               v-on:click="showByYear('2019-2020')"
          />
          <h2>2019 - 2020</h2>
        </div>
        <div class="col-6">
          <img class="w-100 h-75"
               v-bind:src="require('@/assets/img/hall/2.jpg')"
               v-on:click="showByYear('2021-2022')"
          />
          <h2>2021 - 2022</h2>
        </div>
      </div>
      <div class="row syw-section-content text-center">
        <div class="col-6">
          <img class="w-100 h-75"
               v-bind:src="require('@/assets/img/gallery/theme/tmon_1.jpg')"
               v-on:click="showByTheme('tmon')"
          />
          <h2>Tmon</h2>
        </div>
        <div class="col-6">
          <img class="w-100 h-75"
               v-bind:src="require('@/assets/img/gallery/theme/tmon_1.jpg')"
               v-on:click="showByTheme('travel')"
          />
          <h2>Travel</h2>
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
      if (year === '2019-2020') {
        return [{title: '', src: require("@/assets/img/gallery/year/2019_bride.jpg")}];
      }
      if (year === '2021-2022') {
        return [{title: '', src: require("@/assets/img/gallery/year/2019_bride.jpg")}];
      }
      return [];
    }
    const showByTheme = (theme) => {
      imgs.value = getImagesByTheme(theme);
      show();
    };
    const getImagesByTheme = (theme) => {
      if (theme === 'tmon') {
        return [
          {title: '', src: require("@/assets/img/gallery/theme/tmon_1.jpg")},
          {title: '', src: require("@/assets/img/gallery/theme/tmon_1.jpg")}
        ];
      }
      if (theme === 'travel') {
        return [
          {title: '', src: require("@/assets/img/gallery/theme/tmon_1.jpg")},
          {title: '', src: require("@/assets/img/gallery/theme/tmon_1.jpg")}
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
  background: #FAFAD2
}

.syw-section-content div img {
  border-radius: 3rem
}
</style>