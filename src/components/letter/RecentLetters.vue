<template>
  <div class="syw-cover syw-section syw-recent-letter-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="syw-section-head text-center">
          <h2>Recent a Letter</h2>
        </div>
      </div>
      <div class="row">
        <flicking class="text-center"
                  :options="{
                      circular: true,
                      horizontal: true,
                      renderOnlyVisible: true}"
                  :plugins="plugins">
          <div v-for="(msg, index) in letters.slice(0, limit)"
               :key="`${index}`"
               class="syw-event-wrap"
          >
            <h3>{{ msg.creator }}</h3>
            <p class="mt-3 syw-created-at">{{ msg.createdAt }}</p>
            <pre class="p-1">{{ msg.content }}</pre>
          </div>
        </flicking>
      </div>
    </div>
  </div>
</template>
<script>
import {onMounted, ref} from "vue";
import Flicking from "@egjs/vue3-flicking";
import {AutoPlay} from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import axios from "axios";

export default {
  name: 'RecentLetters',
  components: {Flicking},
  setup: function () {
    const limit = 10;
    const letters = ref([]);
    const getLetters = () => {
      const url = "https://seungmin-yikyung.duckdns.org/api/wedding/letters"
      axios.get(url).then((response) => {
        letters.value = response.data;
      }).catch((Error) => {
        console.log(Error);
      })
    };
    onMounted(getLetters);
    const plugins = ref([new AutoPlay({duration: 6000, direction: "NEXT", stopOnHover: true})]);
    return {
      limit,
      letters,
      plugins
    }
  }
};
</script>
<style scoped>
.syw-recent-letter-bg {
  /* background-image: url(~@/assets/img/bg/flowers-colorful.jpg); */
  background-image: url(https://media.istockphoto.com/photos/flower-background-for-holidays-picture-id1206077453?k=20&m=1206077453&s=170667a&w=0&h=CK8WRiInYwrgymXK1l5D1Uym2waYiObGO0p1uiLK3BU=);
  background-size: 100% 100%;
  opacity: 1.0;
  height: 400px;
  /* background: #f7accc; */
  /* background: rgba(134, 4, 95, 0.582); */
}

.syw-created-at {
  /* color: black;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  font-family: 'Sacramento', Arial, serif; */

  font-family: "Open Sans", Arial, sans-serif;
  /* color: #333333; */
  color: rgba(0, 0, 0, 0.55);
  padding-bottom: 5px;
  /* font-size: 13px; */
  font-size: 12px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.55);
}

.syw-section-head {
  padding-bottom: 0.0em;
}

.syw-event-wrap {
  /*border: 2px solid rgba(255, 255, 255, .7);*/
  /*background:rgba(255,255,255,.5);*/
  /*padding: 3px;*/
  /*letter-spacing: 1px;*/
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 15%;
  padding-right: 15%;
  float: left;
}

.syw-event-wrap h3 {
  font-family: "Open Sans", Arial, sans-serif;
  /* color: #333333; */
  color: rgba(0, 0, 0, 0.85);
  padding: 5px;
  /* font-size: 13px; */
  font-size: 17px;
  /* color: rgba(255, 255, 255, 1); */
  /* color: black; */
  
  /* display: block;
  padding: 5px;
  letter-spacing: 5px; */
}

.syw-event-wrap span {
  display: block;
  color: black;
}

.syw-event-wrap pre {
  /* font-size: 19px;
  font-weight: bold;
  display: block;
  color: black;
  height: 150px; */

  color: rgba(0, 0, 0, 0.85);
  height: 150px;

  white-space: pre-wrap;       /* css-3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>
