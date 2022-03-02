<template>
  <div class="syw-cover">
    <div class="syw-overlay syw-header"></div>
    <div class="syw-cover syw-header text-center syw-greeting-background" data-stellar-background-ratio="0.5">
      <div class="display-t">
        <div class="display-tc">
          <div class="container">
            <div class="animate__animated animate__fadeIn animate__slower">
              <div class="col syw-section-head text-center">
                <h2>The Wedding</h2>
                <p>
                  <strong>{{ getWeddingDateTime() }}</strong>
                </p>
              </div>
            </div>

            <div class="simply-section">
              <div>
                <span class="simply-amount">{{getDiffDay()}}</span>
                <span class="simply-word">일</span>
              </div>
            </div>
            <div class="simply-section">
              <div>
                <span class="simply-amount">{{getDiffHour()}}</span>
                <span class="simply-word">시간</span>
              </div>
            </div>
            <div class="simply-section">
              <div>
                <span class="simply-amount">{{getDiffMinute()}}</span>
                <span class="simply-word">분</span>
              </div>
            </div>
            <div class="simply-section">
              <div>
                <span class="simply-amount">{{getDiffSecond()}}</span>
                <span class="simply-word">초</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {onMounted, ref} from "vue";

export default {
  name: 'Greeting',
  setup: function () {
    const weddingDateTime = ref(new Date(2022, 5, 21, 15));
    const getWeddingDateTime = () => {
      const hours = weddingDateTime.value.getHours();
      const formHour = (hours <= 12) ? "오전 " + hours : "오후 " + (hours - 12);

      return weddingDateTime.value.getFullYear()
          + ".0" + weddingDateTime.value.getMonth()
          + "." + weddingDateTime.value.getDate() + " " + formHour + "시 ";
    }
    const diff = ref({
      day: Number,
      hour: Number,
      minute: Number,
      second: Number,
    });
    const getDiffDay = () => {
      return diff.value.day > 0 ? diff.value.day : 0;
    }
    const getDiffHour = () => {
      return diff.value.hour >= 10 ? diff.value.hour : "0" + diff.value.hour;
    }
    const getDiffMinute = () => {
      return diff.value.minute >= 10 ? diff.value.minute : "0" + diff.value.minute;
    }
    const getDiffSecond = () => {
      return diff.value.second >= 10 ? diff.value.second : "0" + diff.value.second;
    }
    const refreshDiff = (date1, date2) => {
      const times = (date2 - date1) / 1000;
      diff.value.day = parseInt(times / 60 / 60 / 24);
      diff.value.hour = parseInt(times / 60 / 60 % 24);
      diff.value.minute = parseInt(times / 60 % 60);
      diff.value.second = parseInt(times % 60);
    };
    onMounted(() => {
      refreshDiff(new Date(), weddingDateTime.value); // 초기화
      setInterval(() => {
        refreshDiff(new Date(), weddingDateTime.value);
      }, 1000);
    })
    return {
      weddingDateTime,
      getWeddingDateTime,
      diff,
      getDiffDay,
      getDiffHour,
      getDiffMinute,
      getDiffSecond,
      refreshDiff,
    };
  }
};
</script>
<style scoped>
.syw-greeting-background {
  background-image: url(~@/assets/img/cover_bg_1.jpg);
  background-position: 0px 0px;
}

.syw-countdown {
  /*background: #F69D9D;*/
  padding: 1em 0;
}

.syw-countdown .countdown {
  margin-bottom: 0;
  font-size: 24px !important;
  color: #fff;
}

.syw-countdown .countdown span {
  margin: 0 15px;
  border-top: 2px !important;
  border-bottom: 2px !important;
  display: inline-block;
  font-family: "Montez", cursive;
}

.syw-countdown .countdown small {
  display: block;
  font-size: 16px;
  font-family: "Open Sans", Arial, sans-serif;
}
</style>