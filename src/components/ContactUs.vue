<template>
  <div class="syw-cover syw-section syw-contactus-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="col syw-section-head text-center">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div class="row syw-section-content text-center animate__animated animate__slow animate__fadeIn font-himelody">
        <div class="col-6">
          <h3 class="font-himelody">이승민</h3>
          <p><strong class="font-himelody">신랑에게 연락하기</strong></p>
          <div>
            <a href='tel:010-4947-8993'>
              <span class=syw-contactus-icon>
                <i class="bi bi-telephone-fill"></i>
              </span>
            </a>
            <a href='sms:010-4947-8993'>
              <span class=syw-contactus-icon>
                <i class="bi bi-chat-text-fill"></i>
              </span>
            </a>
            <span class=syw-contactus-icon>
              <p><strong class="font-himelody">계좌</strong></p>
            </span>
            <span class=syw-contactus-icon>
              <p><strong class="font-himelody">pay</strong></p>
            </span>
          </div>
        </div>
        <div class="col-6">
          <h3 class="font-himelody">강이경</h3>
          <p><strong class="font-himelody">신부에게 연락하기</strong></p>
          <div>
            <a href='tel:010-7758-0292'>
              <span class=syw-contactus-icon>
                <i class="bi bi-telephone-fill"></i>
              </span>
            </a>
            <a href='sms:010-4947-8993'>
              <span class=syw-contactus-icon>
                <i class="bi bi-chat-text-fill"></i>
              </span>
            </a>
            <span class=syw-contactus-icon>
              <p><strong class="font-himelody">계좌</strong></p>
            </span>
            <span class=syw-contactus-icon>
              <p><strong class="font-himelody">pay</strong></p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactUs'
};
</script>
<style scoped>
.syw-contactus-bg {
  position: relative;
}
.syw-contactus-bg::after {
  content : "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(~@/assets/img/flowers-yellow.jpeg);
  width: 100%;
  height: 100%;
  opacity : 0.5;
  z-index: -1;
}
.font-himelody{
  font-family: 'Hi Melody', cursive !important;
}

.syw-contactus-icon {
  float: left;
  /*margin-right: 5%;*/
  margin: 5%;
  width: 54px;
  height: 54px;
  background: #fae100;
  display: table;
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
  font-size: 25px;
  color: #333333;
}
.syw-contactus-icon p {
  display: table-cell;
  vertical-align: middle;
  color: #333333;
}
.col-6 > a {
  text-align: center;
  justify-content: center;
  padding: 5%;
}
</style>