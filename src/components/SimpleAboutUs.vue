<template>
  <div class="syw-section">
    <div class="container">
      <div class="col syw-section-head text-center syw-aboutus-head-color">
        <span>We love each other</span>
        <h2>About Us</h2>
      </div>
      <div class="row">
        <div class="couple-wrap animate-box">
          <div class="couple-half">
            <div class="groom">
              <img src="~@/assets/img/groom.png" alt="groom" class="syw-img-responsive">
            </div>
            <div class="row syw-section-content text-center">
              <div class="desc">
                <span class="syw-font-hi-melody">신랑</span>
                <h3>이승민</h3>
                <p class="syw-font-hi-melody">신부의 귀여운 외모와 재미있는 성격에 호감이 갔습니다.</p>
                <p class="syw-font-hi-melody">저를 진심으로 사랑하는 모습에서 결혼을 결심하게 되었습니다.</p>
              </div>
            </div>
          </div>
          <p class="heart text-center"><i class="bi bi-heart-fill"></i></p>
          <div class="couple-half">
            <div class="bride">
              <img src="~@/assets/img/bride.png" alt="bride" class="syw-img-responsive">
            </div>
            <div class="row syw-section-content text-center">
              <div class="desc">
                <span class="syw-font-hi-melody">신부</span>
                <h3>강이경</h3>
                <p class="syw-font-hi-melody">신랑의 귀엽고 유쾌한 성격에 호감이 생겼습니다.</p>
                <p class="syw-font-hi-melody">함께 하는 시간이 너무나 즐겁다 보니 어느새 결혼을 맹세하게 되었습니다.</p>
              </div>
            </div>
          </div>
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
  font-family: 'Hi Melody', cursive;
  font-size: 18px;
}

.syw-section-head h2, .syw-aboutus-head-color {
  color: #F14E95;
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

.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}
.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 1px;
  background-color: #d4d4d4;
  left: 50%;
  margin-left: 0px;
}
@media screen and (max-width: 480px) {
  .timeline:before {
    margin-left: -64px;
  }
}
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
  border: 1px solid #d4d4d4;
  padding: 30px;
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 80px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}
.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 81px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}
@media screen and (max-width: 480px) {
  .timeline > li > .timeline-panel {
    width: 75% !important;
  }
  .timeline > li > .timeline-panel:before {
    top: 30px;
  }
  .timeline > li > .timeline-panel:after {
    top: 31px;
  }
}
.timeline > li > .timeline-badge {
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  color: #fff;
  width: 160px;
  height: 160px;
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
}

@media screen and (max-width: 480px) {
  .timeline > li > .timeline-badge {
    width: 60px;
    height: 60px;
    margin-left: -20px !important;
  }
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

.timeline-title {
  margin-top: 0;
}

.date {
  display: block;
  margin-bottom: 20px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
}

.timeline-body > p + p {
  margin-top: 5px;
}

@media (max-width: 992px) {
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
}
</style>