<template>
  <div class="syw-cover syw-section syw-recent-letter-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="syw-section-head text-center">

          <h2 style="color: white">
            Recent Letters
            <i class="bi bi-mailbox"></i>
          </h2>
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
            <pre class="p-1">{{ msg.content }}</pre>
            <p class="mt-3 syw-created-at">{{ msg.createdAt }}</p>
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
  /*background-image: url(~@/assets/img/bg/wood-black-bg.jpeg);*/
  background-image: url(https://i.pinimg.com/originals/91/a7/ae/91a7ae81b7694af89ded5e3a609c3bf4.png);
  background-size: 100% 100%;
  opacity: 1.0;
  height: 600px;
  /* background: #f7accc; */
  /* background: rgba(134, 4, 95, 0.582); */
}

.syw-created-at {
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  font-family: 'Sacramento', Arial, serif;
}

.syw-event-wrap {
  /*border: 2px solid rgba(255, 255, 255, .7);*/
  /*background:rgba(255,255,255,.5);*/
  /*padding: 3px;*/
  /*letter-spacing: 1px;*/
  width: 100%;
  height: 100%;
  float: left;
}

.syw-event-wrap h3 {
  font-size: 22px;
  color: rgba(255, 255, 255, 1);
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
  display: block;
  padding: 5px;
  letter-spacing: 5px;
}

.syw-event-wrap span {
  display: block;
  color: rgba(255, 255, 255, .8);
}

.syw-event-wrap pre {
  font-size: 19px;
  font-weight: bold;
  display: block;
  color: rgba(255, 255, 255, 1.0);
  max-height: 250px;

  white-space: pre-wrap;       /* css-3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>
