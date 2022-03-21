<template>
  <div class="syw-section">
    <div class="container">
      <div class="col syw-section-head text-center syw-aboutus-head-color">
        <span>Invitation Letter</span>
        <h2>Wedding</h2>
      </div>
      <div class="row">
        <div class="couple-wrap animate-box">
          <div class="couple-half">
            <div class="groom">
              <img src="~@/assets/img/seungmin_profile2.png" alt="groom" class="syw-img-responsive">
            </div>
            <div class="row syw-section-content text-center">
              <div class="desc">
                <span>신랑 </span>
                <span class="syw-font-hi-melody">이승민</span>
              </div>
            </div>
          </div>
          <p class="heart text-center"><i class="bi bi-heart-fill"></i></p>
          <div class="couple-half">
            <div class="bride">
              <img src="~@/assets/img/yikyung_profile2.png" alt="bride" class="syw-img-responsive">
            </div>
            <div class="row syw-section-content text-center">
              <div class="desc">
                <span>신부 </span>
                <span class="syw-font-hi-melody">강이경</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-md-offset-0">
          <ul class="timeline animate-box">
            <li class="animate-box">
              <div class="timeline-panel">
                <div class="timeline-body text-center">
                  <p>두 사람의 믿음과 사랑으로 새 발걸음을 힘차게 내딛습니다.</p>
                  <p>새롭게 시작하는 기쁨의 자리에 여러분을 초대합니다.</p>
                  <p class="pt-2"><strong>이평호ㆍ손무선</strong>의 장남 <strong>이승민</strong></p>
                </div>
              </div>
            </li>
            <li class="animate-box">
              <div class="timeline-panel">
                <div class="timeline-body text-center">
                  <p>코로나 우려로 참석하지 못하시더라도 괜찮습니다.</p>
                  <p>부담 갖지 않으시길 바라며, 모든 분께 감사의 인사를 올립니다.</p>
                  <p class="pt-2"><strong>강재규ㆍ박정희</strong>의 장녀 <strong>강이경</strong></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'AboutUs',
};
</script>
<style scoped>
/* 이하 클래스는 about-us 에서 사용 */

.syw-font-hi-melody {
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 17px;
  font-weight: 600;
}

.syw-section-head h2, .syw-aboutus-head-color {
  /* color: #5a5a5a; */
  /* color: lightgray !important;*/
  text-shadow:
   -1px -1px 0 #fff,
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
     1px 1px 0 #fff;
}

.syw-img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.couple-wrap {
  width: 90%;
  margin: 0 auto;
  position: relative;
}
@media screen and (max-width: 350px) {
  .couple-wrap {
    width: 100%;
  }
}

.heart {
  position: absolute;
  top: 4em;
  left: 0;
  right: 0;
  z-index: 99;
  animation: pulse 1s ease infinite;
}
.heart i {
  font-size: 20px;
  background: #fff;
  padding: 20px;
  color: rgb(238, 67, 90);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
@media screen and (max-width: 350px) {
  .heart {
    display: none;
  }
}

.couple-half {
  width: 50%;
  float: left;
}
@media screen and (max-width: 350px) {
  .couple-half {
    width: 100%;
  }
}
.couple-half h3 {
  font-family: "Sacramento", Arial, serif;
  /* color: #F14E95; */
  font-size: 30px;
}
.couple-half .groom, .couple-half .bride {
  float: left;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.couple-half .groom img, .couple-half .bride img {
  width: 150px;
  height: 150px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
@media screen and (max-width: 350px) {
  .couple-half .groom, .couple-half .bride {
    width: 100%;
    height: 140px;
  }
  .couple-half .groom img, .couple-half .bride img {
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }
}
.couple-half .groom {
  float: right;
  margin-right: 5px;
}
.couple-half .bride {
  float: left;
  margin-left: 5px;
}
.couple-half .desc-groom {
  padding-right: 180px;
  text-align: right;
}
.couple-half .desc-bride {
  padding-left: 180px;
  text-align: left;
}
@media screen and (max-width: 350px) {
  .couple-half .groom, .couple-half .bride {
    margin-left: 0;
    margin-right: 0;
  }
  .couple-half .desc-groom {
    padding-right: 0;
    text-align: center;
  }
  .couple-half .desc-bride {
    padding-left: 0;
    text-align: center;
  }
}

/* 이하 클래스는 ourstory 에서 사용 */
.seungmin-bg {
  background-image:url(https://thumbs.dreamstime.com/z/bouquet-red-tulips-12479112.jpg);
}

.yikyung-bg {
  background-image:url(https://thumbs.dreamstime.com/z/bouquet-flowers-top-view-isolated-white-67197873.jpg);
}

.timeline {
  list-style: none;
  padding: 10px 0 0;
  position: relative;
}
/* .timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 1px;
  background-color: #d4d4d4;
  left: 50%;
  margin-left: 0px;
} */
/* @media screen and (max-width: 480px) {
  .timeline:before {
    margin-left: -64px;
  }
} */
.timeline > li {
  margin-bottom: 20px;
  position: relative;
}
.timeline > li:before, .timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li > .timeline-panel {
  width: 40%;
  float: left;
  /* border: 1px solid #d4d4d4; */
  padding: 15px;
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
/* .timeline > li > .timeline-panel:before {
  position: absolute;
  top: 80px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
} */
/* .timeline > li > .timeline-panel:after {
  position: absolute;
  top: 81px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
} */
@media screen and (max-width: 480px) {
  .timeline > li > .timeline-panel {
    width: 100% !important;
  }
  .timeline > li > .timeline-panel:before {
    top: 30px;
  }
  .timeline > li > .timeline-panel:after {
    top: 31px;
  }
}
/* .timeline > li > .timeline-badge {
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  color: #fff;
  width: 150px;
  height: 150px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -80px;
  background-color: #999999;
  z-index: 100;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
} */

/* @media screen and (max-width: 480px) {
  .timeline > li > .timeline-badge {
    width: 60px;
    height: 60px;
    margin-left: -20px !important;
  }
} */
/* .timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
} */
/* .timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
} */

/* .timeline-title {
  margin-top: 0;
} */

.date {
  display: block;
  margin-bottom: 20px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.timeline-body > p,
.timeline-body > ul {
  font-size: 13px;
  margin-bottom: 0;
}

.timeline-body > p + p {
  margin-top: 5px;
}

/* @media (max-width: 992px) {
  ul.timeline:before {
    left: 90px;
  }

  ul.timeline > li > .timeline-panel {
    width: calc(100% - 200px);
    width: -moz-calc(100% - 200px);
    width: -webkit-calc(100% - 200px);
  }

  ul.timeline > li > .timeline-badge {
    left: 15px;
    margin-left: 0;
    top: 16px;
  }

  ul.timeline > li > .timeline-panel {
    float: right;
  }

  ul.timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  ul.timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
} */
</style>