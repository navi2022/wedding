<template>
  <div class="syw-section syw-wedding-hall-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="col syw-section-head text-center">
          <span>Be Our Guest</span>
          <h2 class="syw-weddinghall-head-color">Wedding Hall</h2>
        </div>
      </div>
      <div class="row text-center" style="display: block;">
        <image-slider class="w-50 h-25" :images="weddingHallImages" style="border-radius:15%"></image-slider>
      </div>
      <div class="row syw-section-content text-center">
        <div class="desc">
          <h3>노블 발렌티(삼성)</h3>
          <p><strong>주소: 서울시 강남구 봉은사로 637, Tel: 02-540-0711~3</strong></p>
        </div>
        <div class="px-4 pb-2">
          <naver-maps
              width="100%"
              height="200px"
              :mapOptions="mapOptions"
              :initLayers="initLayers"
              @onLoad="onLoadMap($event)"
          >
            <naver-marker
                :latitude="weddingHallLocation.latitude"
                :longitude="weddingHallLocation.longitude"
                @onLoad="onLoadMarker($event)"
            >
            </naver-marker>
            <naver-info-window
                :marker="marker"
                :isOpen=true
                @onLoad="onLoadInfoWindow($event)"
            >
            <span>
              <strong style="padding: 1em">노블 발렌티</strong>
            </span>
            </naver-info-window>
          </naver-maps>
        </div>
      </div>
      <div class="row text-center" style="display: block;">
        <div class="col p-2">
          <a v-bind:href="linkToNaverMap()">
            <img class="syw-wedding-hall-map-icon" v-bind:src="require('@/assets/map/naver_map.png')" />
          </a>
          <a v-bind:href="linkToKakaoMap()">
            <img class="syw-wedding-hall-map-icon" v-bind:src="require('@/assets/map/kakao_map.png')" />
          </a>
          <a v-bind:href="linkToGoogleMap()">
            <img class="syw-wedding-hall-map-icon" v-bind:src="require('@/assets/map/google_map.png')" />
          </a>
          <a v-bind:href="linkToTMap()">
            <img class="syw-wedding-hall-map-icon" v-bind:src="require('@/assets/map/tmap.png')" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
import {NaverInfoWindow, NaverMaps, NaverMarker} from "vue3-naver-maps";
import ImageSlider from "@/components/common/ImageSlider";

export default {
  name: 'WeddingHall',
  components: {NaverMaps, NaverMarker, NaverInfoWindow, ImageSlider},
  setup: () => {
    const weddingHallLocation = ref({latitude: 37.5152844, longitude: 127.0648056});
    const map = ref();
    const mapOptions = {
      latitude: weddingHallLocation.value.latitude,
      longitude: weddingHallLocation.value.longitude,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {position: "TOP_RIGHT"},
    };
    const initLayers = ["BACKGROUND", "BACKGROUND_DETAIL", "POI_KOREAN", "TRANSIT", "ENGLISH"];
    const onLoadMap = (mapObject) => {
      map.value = mapObject;
    };
    const marker = ref();
    const onLoadMarker = (markerObject) => {
      marker.value = markerObject;
    };
    const infoWindow = ref();
    const onLoadInfoWindow = (infoWindowObject) => {
      infoWindow.value = infoWindowObject;
    };
    const linkToNaverMap = () => {
      return "https://m.place.naver.com/place/12390329/location?entry=ple&subtab=location";
    };
    const linkToKakaoMap = () => {
      return "https://map.kakao.com/?urlX=514329&urlY=1115520&urlLevel=3&itemId=17157328&srcid=17157328&map_type=TYPE_MAP";
    }
    const linkToTMap = () => {
      return "https://surl.tmap.co.kr/de819d92";
    }
    const linkToGoogleMap = () => {
      return "https://goo.gl/maps/MMAywu71FBkcbDxD9";
    };
    const weddingHallImages = ref(
        [
          require("@/assets/img/hall/1.jpg"),
          require("@/assets/img/hall/2.jpg"),
          // require("@/assets/img/hall/3.jpg"),
          // require("@/assets/img/hall/4.jpg"),
          require("@/assets/img/hall/5.jpg"),
        ]);
    return {
      weddingHallLocation,
      mapOptions,
      initLayers,
      onLoadMap,
      marker,
      onLoadMarker,
      infoWindow,
      onLoadInfoWindow,
      linkToNaverMap,
      linkToKakaoMap,
      linkToTMap,
      linkToGoogleMap,
      weddingHallImages,
    };
  }
};
</script>
<style>
.syw-wedding-hall-bg {
  /*background-image: url(~@/assets/img/bg/flowers.jpeg);*/
  /*background-image: url(~@/assets/img/bg/flowers-yellow.jpeg);*/
  /*background-image: url(https://i.pinimg.com/736x/a3/fe/82/a3fe82109b446674b85b300d22c038be.jpg);*/
  /*background-image: url(https://www.kindpng.com/picc/m/57-578735_clip-art-wedding-invitation-floral-design-flower-background.png);*/
  /*background-image: url(https://banner2.cleanpng.com/20190220/rag/kisspng-floral-design-borders-and-frames-flower-image-wedd-5c6dc9630f89e6.7354142515506988510637.jpg);*/
  /*background-image: url(https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGRmbG93ZXIxMWJhdGNoMy10YXVzLTAyYS1qb2I2NF8xLnBuZw.png?s=gH2Ierg1BwRdivQ0_sCLkh95G6rcvhvbDcxfRe_bop0);*/
  background-image: url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm123-flower1-gloy-35-l_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=baa50b181a8aa81ac4b5d349d13f7d57);
  background-size: 100% 100%;
  opacity: 0.9;
  /*background: rgba(0, 0, 0, 0.07);*/
}

.syw-wedding-hall-map-icon {
  border-radius: 75%;
  width: 15% !important;
  height: 15% !important;
}
.syw-weddinghall-head-color {
  color:  dimgray !important;
  text-shadow:
   -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
     1px 1px 0 #fff;
}
</style>
