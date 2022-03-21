<template>
  <div class="syw-cover syw-section syw-contactus-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="col syw-section-head text-center syw-contactus-head-color">
          <h2>Contact</h2>
        </div>
      </div>
      <div class="row syw-section-content text-center animate__animated animate__slow animate__fadeIn contact-body">
        <div class="col-6 contact-info">
          <h2 class="font-himelody-title">신랑 <span class="font-himelody-title-name">이승민</span></h2>
          <div>
            <span class="font-himelody">연락처: {{ seungminInfo.phone }}</span>
            <i class="bi bi-clipboard" v-clipboard:copy='seungminInfo.phone' v-clipboard:success="onCopy"></i>
          </div>
          <div>
            <span class="font-himelody">{{ seungminInfo.bank }}: {{ seungminInfo.account }}</span>
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
        <div class="col-6 contact-info">
          <h2 class="font-himelody-title">신부 <span class="font-himelody-title-name">강이경</span></h2>
          <div>
            <span class="font-himelody">연락처: {{ yikyungInfo.phone }}</span>
            <i class="bi bi-clipboard" v-clipboard:copy='yikyungInfo.phone' v-clipboard:success="onCopy"></i>
          </div>
          <div>
            <span class="font-himelody">{{ yikyungInfo.bank }}: {{ yikyungInfo.account }}</span>
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

      <div class="row syw-section-content text-center animate__animated animate__slow animate__fadeIn">
        <div class="col-6 contact-info">
          <h2 class="font-himelody pb-4 ">신랑측 혼주</h2>
          <div>

            <h2 class="font-himelody-title">父 <span class="font-himelody-title-name">이평호</span></h2>
            <div class="font-himelody">연락처: {{ seungminFatherInfo.phone }}</div>
            <div>
              <a :href="seungminFatherInfo.telHref">
                <span class=syw-contactus-icon>
                  <i class="bi bi-telephone-fill syw-contactus-icon"></i>
                </span>
              </a>
              <a :href="seungminFatherInfo.smsHref">
                <span class="syw-contactus-icon">
                  <i class="bi bi-chat-text-fill syw-contactus-icon"></i>
                </span>
              </a>
            </div>

            <h2 class="font-himelody-title">母 <span class="font-himelody-title-name">손무선</span></h2>
            <div class="font-himelody">연락처: {{ seungminMotherInfo.phone }}</div>
            <div>
              <a :href="seungminMotherInfo.telHref">
                <span class=syw-contactus-icon>
                  <i class="bi bi-telephone-fill syw-contactus-icon"></i>
                </span>
              </a>
              <a :href="seungminMotherInfo.smsHref">
                <span class="syw-contactus-icon">
                  <i class="bi bi-chat-text-fill syw-contactus-icon"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-6 contact-info">
          <h2 class="font-himelody pb-4">신부측 혼주</h2>
          <div>
            <h2 class="font-himelody-title">父 <span class="font-himelody-title-name">강재규</span></h2>
            <div class="font-himelody">연락처: {{ yikyungFatherInfo.phone }}</div>
            <div>
              <a :href="yikyungFatherInfo.telHref">
                <span class=syw-contactus-icon>
                  <i class="bi bi-telephone-fill syw-contactus-icon"></i>
                </span>
              </a>
              <a :href="yikyungFatherInfo.smsHref">
                <span class="syw-contactus-icon">
                  <i class="bi bi-chat-text-fill syw-contactus-icon"></i>
                </span>
              </a>
            </div>

            <h2 class="font-himelody-title">母 <span class="font-himelody-title-name">박정희</span></h2>
            <div class="font-himelody">연락처: {{ yikyungMotherInfo.phone }}</div>
            <div>
              <a :href="yikyungMotherInfo.telHref">
                <span class=syw-contactus-icon>
                  <i class="bi bi-telephone-fill syw-contactus-icon"></i>
                </span>
              </a>
              <a :href="yikyungMotherInfo.smsHref">
                <span class="syw-contactus-icon">
                  <i class="bi bi-chat-text-fill syw-contactus-icon"></i>
                </span>
              </a>
            </div>
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
    const seungminFatherInfo = {
      phone: "010-9305-8997", telHref: "tel:010-9305-8997", smsHref: "sms:010-9305-8997",
    };
    const seungminMotherInfo = {
      phone: "010-5549-8993", telHref: "tel:010-5549-8993", smsHref: "sms:010-5549-8993",
    };
    const yikyungInfo = {
      phone: "010-7758-0292", telHref: "tel:010-7758-0292", smsHref: "sms:010-7758-0292",
      account: "1002950-692222", bank: "우리은행", bankAccount: "우리 1002950-692222"
    };
    const yikyungFatherInfo = {
      phone: "010-3189-9000", telHref: "tel:010-3189-9000", smsHref: "sms:010-3189-9000",
    };
    const yikyungMotherInfo = {
      phone: "010-3648-0292", telHref: "tel:010-3648-0292", smsHref: "sms:010-3648-0292",
    };
    const onCopy = (e) => {
      alert('[' + e.text + '] 복사완료');
    }
    return {
      seungminInfo,
      seungminFatherInfo,
      seungminMotherInfo,
      yikyungInfo,
      yikyungFatherInfo,
      yikyungMotherInfo,
      onCopy,
    };
  }
};
</script>
<style scoped>

.contact-info {
  background-color: #fff;
  border: 1px solid rgb(239, 243, 244);
  border-radius: 4px;
  margin: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 47%;
}
.syw-contactus-bg {
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.04);
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
  /*background-image: url(https://i.pinimg.com/736x/a3/fe/82/a3fe82109b446674b85b300d22c038be.jpg);*/
  /*background-image: url(~@/assets/img/bg/flowers.jpeg);*/
  /* background-image: url(https://www.seekpng.com/png/full/13-130566_watercolor-illustration-for-wedding-flower-background-invitation-free.png); */
  background-size: 100% 100%;
}

.contact-body {
  padding-bottom: 40px;
}

.syw-section-head h2, .syw-contactus-head-color {
  /* color:  rgb(29, 155, 240); */
   color: lightgray !important;
}

.font-himelody {
  font-family: "Open Sans", Arial, sans-serif;
  /* color: #333333; */
  color: #848484;
  padding: 5px;
  /* font-size: 13px; */
  font-size: 12px;

  /* font-weight: 900; */
}

.font-himelody-title {
  font-family: "Open Sans", Arial, sans-serif;
  /* color: #333333; */
  color: rgba(0, 0, 0, 0.85);
  padding: 5px;
  /* font-size: 13px; */
  font-size: 14px;

  /* font-weight: 900; */
}
.font-himelody-title-name {
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 17px;
  font-weight: 600;
}

.syw-contactus-icon.font-himelody {
  color: #fff;
  /* font-family: "Open Sans", Arial, sans-serif; */
  
  /* font-weight: 600; */
}
/* .syw-font-hi-melody {
  
} */

.syw-contactus-icon {
  /*float: left;*/
  /*margin-right: 5%;*/
  margin: 5%;
  width: 30px;
  height: 30px;
  /* background: rgb(248, 246, 248); */
  background: rgb(29, 155, 240);
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