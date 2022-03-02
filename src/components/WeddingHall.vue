<template>
  <div class="syw-section syw-wedding-hall-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="col syw-section-head text-center">
          <span>Be Our Guest</span>
          <h2>Wedding Hall</h2>
        </div>
      </div>
      <div class="row syw-section-white-bg">
        <image-slider class="p-2"
            :images="weddingHallImages"
        ></image-slider>
      </div>
      <div class="row syw-section-content syw-section-white-bg text-center">
        <div class="desc">
          <h3>노블 발렌티 (삼성점)</h3>
          <p><strong>서울시 강남구 봉은사로 637 (서울시 강남구 삼성동 109-6)</strong></p>
          <p><strong>Tel: 02-540-0711~3</strong></p>
        </div>
        <div class="p-2">
          <naver-maps
              width="100%"
              height="300px"
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
      <div class="row syw-section-white-bg text-center p-2">
        <div class="col">
          <a v-bind:href="linkToNaverMap()">
            <img class="h-75"
                 v-bind:src="require('@/assets/map/naver_map.png')"
                 style="width: 85%"
            />
          </a>
        </div>
        <div class="col">
          <a v-bind:href="linkToKakaoMap()">
            <img class="h-75"
                 v-bind:src="require('@/assets/map/kakao_map.png')"
                 style="width: 85%"
            />
          </a>
        </div>
        <div class="col">
          <a v-bind:href="linkToGoogleMap()">
            <img class="h-75"
                 v-bind:src="require('@/assets/map/google_maps.png')"
                 style="width: 85%"
            />
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
    const linkToGoogleMap = () => {
      return "https://goo.gl/maps/MMAywu71FBkcbDxD9";
    };
    const weddingHallImages = ref(
        [
          require("@/assets/img/hall/1.jpg"),
          require("@/assets/img/hall/2.jpg"),
          require("@/assets/img/hall/3.jpg"),
          require("@/assets/img/hall/4.jpg"),
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
      linkToGoogleMap,
      weddingHallImages,
    };
  }
};
</script>
<style>
.syw-wedding-hall-bg {
  /*background-image: url(~@/assets/img/img_bg_3.jpg);*/
  background: rgba(0, 0, 0, 0.03);
}
</style>
