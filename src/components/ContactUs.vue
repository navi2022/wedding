<template>
  <div class="syw-cover syw-section syw-contactus-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="col syw-section-head text-center syw-contactus-head-color">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div
          class="row syw-section-content text-center animate__animated animate__slow animate__fadeIn font-himelody">
        <div class="col-6 desc">
          <h3 class="font-himelody">이승민</h3>
          <div>
            <strong class="font-himelody">연락처: {{ seungminInfo.phone }}</strong>
            <i class="bi bi-clipboard" v-clipboard:copy='seungminInfo.phone' v-clipboard:success="onCopy"></i>
          </div>
          <div>
            <strong class="font-himelody">{{ seungminInfo.bank }}: {{ seungminInfo.account }}</strong>
            <i class="bi bi-clipboard" v-clipboard:copy='seungminInfo.bankAccount'
               v-clipboard:success="onCopy"></i>
          </div>
          <div>
            <a :href="seungminInfo.telHref">
              <span class=syw-contactus-icon>
                <i class="bi bi-telephone-fill syw-contactus-icon"></i>
              </span>
            </a>
            <a :href="seungminInfo.smsHref">
              <span class=syw-contactus-icon>
                <i class="bi bi-chat-text-fill syw-contactus-icon"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="col-6 desc">
          <h3 class="font-himelody">강이경</h3>
          <div>
            <strong class="font-himelody">연락처: {{ yikyungInfo.phone }}</strong>
            <i class="bi bi-clipboard" v-clipboard:copy='yikyungInfo.phone' v-clipboard:success="onCopy"></i>
          </div>
          <div>
            <strong class="font-himelody">{{ yikyungInfo.bank }}: {{ yikyungInfo.account }}</strong>
            <i class="bi bi-clipboard" v-clipboard:copy='yikyungInfo.bankAccount'
               v-clipboard:success="onCopy"></i>
          </div>
          <div>
            <a :href="yikyungInfo.telHref">
              <span class=syw-contactus-icon>
                <i class="bi bi-telephone-fill syw-contactus-icon"></i>
              </span>
            </a>
            <a :href="yikyungInfo.smsHref">
              <span class=syw-contactus-icon>
                <i class="bi bi-chat-text-fill syw-contactus-icon"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ContactUs',
  setup: function () {
    const seungminInfo = {
      phone: "010-4947-8993", telHref: "tel:010-4947-8993", smsHref: "sms:010-4947-8993",
      account: "1002956-448899", bank: "우리은행", bankAccount: "우리 1002956-448899"
    };
    const yikyungInfo = {
      phone: "010-7758-0292", telHref: "tel:010-7758-0292", smsHref: "sms:010-7758-0292",
      account: "1002950-692222", bank: "우리은행", bankAccount: "우리 1002950-692222"
    };
    const onCopy = (e) => {
      alert('[' + e.text + '] 복사완료');
    }
    return {
      seungminInfo,
      yikyungInfo,
      onCopy,
    };
  }
};
</script>
<style scoped>
.syw-contactus-bg {
  position: relative;
  z-index: 1;
}

.syw-contactus-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .3;
  z-index: -1;
  background-image: url(~@/assets/img/flowers.jpeg);
}

.syw-section-head h2, .syw-contactus-head-color {
  /* color:  #9034bb; */
  /*text-shadow:*/
  /* -1px -1px 0 #fff,  */
  /*  1px -1px 0 #fff,*/
  /*  -1px 1px 0 #fff,*/
  /*   1px 1px 0 #fff;*/
}

.font-himelody {
  font-family: 'Hi Melody', cursive !important;
  color: #333333;

  /* font-weight: 900; */
}

.syw-contactus-icon.font-himelody {
  color: #fff;
}

.syw-contactus-icon {
  /*float: left;*/
  /*margin-right: 5%;*/
  margin: 5%;
  width: 30px;
  height: 30px;
  /* background: rgb(248, 246, 248); */
  background: #F14E95;
  display: inline-block;
  text-align: center;
  justify-content: center;
  -webkit-box-shadow: 0px 14px 30px -15px rgb(0 0 0 / 75%);
  -moz-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 14px 30px -15px rgb(0 0 0 / 75%);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}

.syw-contactus-icon i {
  display: table-cell;
  vertical-align: middle;
  font-size: 15px;
  color: #fff;
  /* color: #333333; */
  /* color: #F14E95; */
}

.syw-contactus-icon p {
  display: table-cell;
  vertical-align: middle;
  color: #fff;
  /* color: #333333; */
}

.col-6 > a {
  text-align: center;
  justify-content: center;
  padding: 5%;
}
</style>