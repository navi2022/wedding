<template>
  <div class="syw-section syw-gallery-bg">
    <div class="container">
      <!-- <div class="col syw-section-head text-center">
        <span>we love each other</span>
        <h2>Our Story</h2>
      </div> -->
      <div class="row">
          <div class="col-md-12 col-md-offset-0">
            <ul class="timeline animate-box">
              <li class="animate-box">
                <div class="timeline-badge first-meet-bg"></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">First We Meet</h3>
                    <span class="date">December 25, 2015</span>
                  </div>
                  <div class="timeline-body">
                    <p>티몬 스터디하면서 처음 만났습니다.</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted animate-box">
                <div class="timeline-badge first-date-bg"></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">First Date</h3>
                    <span class="date">December 28, 2015</span>
                  </div>
                  <div class="timeline-body">
                    <p>처음 데이트 한날</p>
                  </div>
                </div>
              </li>
              <li class="animate-box">
                <div class="timeline-badge relationship-bg"></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">In A Relationship</h3>
                    <span class="date">January 1, 2016</span>
                  </div>
                  <div class="timeline-body">
                    <p>만나서 사귀는 날</p>
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
  name: 'OurStory'
};
</script>
<style scoped>
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

.first-meet-bg {
  background-image:url(~@/assets/img/first-we-meet.png);
}

.first-date-bg {
  background-image:url(~@/assets/img/first-date.jpg);
}

.relationship-bg {
  background-image:url(~@/assets/img/in-a-relationship.jpeg);
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