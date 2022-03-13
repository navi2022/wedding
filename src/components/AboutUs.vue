<template>
  <div class="syw-section syw-aboutus-template syw-aboutus-bg">
    <div class="container">
      <div class="col syw-section-head text-center syw-aboutus-head-color">
        <!-- <span>We invite you</span> -->
        <h2>About Us</h2>
      </div>
      <div class="couple-wrap animate-box">
        <div class="couple-half">
          <div class="groom">
            <img src="~@/assets/img/groom.png" alt="groom" class="syw-img-responsive">
          </div>
          <div class="row syw-section-content text-center">
            <div class="desc">
              <h3>이승민</h3>
              <p><strong>존잘, 스마트, 귀여움</strong></p>
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
              <h3>강이경</h3>
              <p><strong></strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutUs'
};
</script>
<style scoped>
/* 이하 클래스는 about-us 에서 사용 */
.syw-section-head h2, .syw-aboutus-head-color {
  color: gray;
  text-shadow:
   -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
     1px 1px 0 #fff;
}

.syw-aboutus-bg {
  background: rgba(0, 0, 0, 0.04);
}
.syw-aboutus-template {
  position: relative;
  height: 420px;
  width: 100%;
  background-size: cover;
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
@media screen and (max-width: 370px) {
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
  color: rgb(220,20,60);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
@media screen and (max-width: 370px) {
  .heart {
    display: none;
  }
}

.couple-half {
  width: 50%;
  float: left;
}
@media screen and (max-width: 370px) {
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
@media screen and (max-width: 370px) {
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
@media screen and (max-width: 370px) {
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
</style>