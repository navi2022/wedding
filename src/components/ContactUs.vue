<template>
  <div class="syw-section syw-cover">
    <div class="container">
      <div class="col syw-section-head text-center">
        <h2>Contact Us</h2>
      </div>
      <div class="couple-wrap animate-box">
        <div class="couple-half">
          <div class="row syw-section-content syw-section-white-bg text-center">
            <div class="desc">
              <h3>이승민</h3>
              <p><strong>신랑에게 연락하기</strong></p>
              <div>
                <a href='tel:010-4947-8993'>
                  <span class=icon>
                    <i class="bi bi-telephone-fill"></i>
                  </span>
                </a>
                <a href='sms:010-4947-8993'>
                  <span class=icon>
                    <i class="bi bi-chat-text-fill"></i>
                  </span>
                </a>
                <span class=icon>
                  <p><strong>계좌</strong></p>
                </span>
                <span class=icon>
                  <p><strong>pay</strong></p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="couple-half">
          <div class="row syw-section-content syw-section-white-bg text-center">
            <div class="desc">
              <h3>강이경</h3>
              <p><strong>신부에게 연락하기</strong></p>
              <div>
                <a href='tel:010-7758-0292'>
                  <span class=icon>
                    <i class="bi bi-telephone-fill"></i>
                  </span>
                </a>
                <a href='sms:010-4947-8993'>
                  <span class=icon>
                    <i class="bi bi-chat-text-fill"></i>
                  </span>
                </a>
                <span class=icon>
                  <p><strong>계좌</strong></p>
                </span>
                <span class=icon>
                  <p><strong>pay</strong></p>
                </span>
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
  name: 'ContactUs',
  data() {
    return {
      text: 'This will get copied!'
    };
  },
  methods: {
    copy() {
      this.$refs.clone.focus();
      document.execCommand('copy');
    }
  }
};
</script>