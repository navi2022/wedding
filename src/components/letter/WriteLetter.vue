<template>
  <div class="syw-section syw-write-letter-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="syw-section-head text-center">
          <span>Celebrate Us</span>
          <h2>Write a Letter</h2>
        </div>
      </div>
      <form class="form-inline" v-on:submit.prevent>
        <div class="row animate__animated animate__animated animate__fadeInDown">
          <div class="form-group text-center pb-4">
            <a-input v-model:value="nameInfo.name"
                     placeholder="성함"
                     size="default"
                     style="width:200px;"
                     :maxLength="18"
                     :class="{ 'is-invalid': nameInfo.invalid}"
                     @keydown.enter.prevent="isValidName()"
                     @focusout.prevent="isValidName()"
            >
              <template #prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </div>
        </div>
<!--        <div v-if="titleInfo.show" class="row animate__animated animate__animated animate__fadeInDown">-->
<!--          <div class="form-group text-center pb-4">-->
<!--            <a-input v-model:value="titleInfo.title"-->
<!--                     placeholder="제목"-->
<!--                     @keydown.enter.prevent="isValidTitle()"-->
<!--                     @focusout.prevent="isValidTitle()"-->
<!--                     :class="{ 'is-invalid': titleInfo.invalid}"-->
<!--            >-->
<!--            </a-input>-->
<!--          </div>-->
<!--        </div>-->
        <div v-if="contentInfo.show" class="row animate__animated animate__fadeInDown">
          <div class="form-group text-center pb-2">
            <a-textarea v-model:value="contentInfo.content"
                        placeholder="내용"
                        show-count
                        :maxlength="150"
                        :auto-size="{ minRows: 2, maxRows: 5}"
                        @focusout.prevent="isValidContent()"
                        :class="{ 'is-invalid': contentInfo.invalid}"
            >
            </a-textarea>
          </div>
        </div>
        <div v-if="submitStatus.show" class="row animate__animated animate__fadeInUp">
          <div class="form-group text-center pb-3">
            <button @click="submit"
                    class="btn btn-primary btn-block"
                    style="width: 150px"
            >
              편지 보내기
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
import {UserOutlined} from '@ant-design/icons-vue';
import axios from "axios";
import router from "@/config/router";

export default {
  name: 'WriteLetter',
  components: {
    UserOutlined,
  },
  setup: function () {
    const nameInfo = ref({"show": true, "invalid": false, "name": "",});
    const isValidName = () => {
      nameInfo.value.name = nameInfo.value.name.trim();
      if (nameInfo.value.name.length == 0) {
        nameInfo.value.invalid = true;
        setTimeout(() => {
          nameInfo.value.invalid = false;
        }, 1300);
        return false;
      }
      contentInfo.value.show = true;
      return true;
    };
    // const titleInfo = ref({"show": false, "invalid": false, "title": ""});
    // const isValidTitle = () => {
    //   titleInfo.value.title = titleInfo.value.title.trim();
    //   if (titleInfo.value.title.length == 0) {
    //     titleInfo.value.invalid = true;
    //     setTimeout(() => {
    //       titleInfo.value.invalid = false;
    //     }, 1300);
    //     return false;
    //   }
    //   contentInfo.value.show = true;
    //   return true;
    // };
    const contentInfo = ref({"show": false, "invalid": false, "content": ""});
    const isValidContent = () => {
      contentInfo.value.content = contentInfo.value.content.trim();
      if (contentInfo.value.content.length == 0) {
        contentInfo.value.invalid = true;
        setTimeout(() => {
          contentInfo.value.invalid = false;
        }, 1300);
        return false;
      }
      submitStatus.value.show = true;
      return true;
    };
    const submitStatus = ref({"show": false, "invalid": false});
    const submit = () => {
      if (isValidName()
          && isValidContent()) {
        const url = "https://seungmin-yikyung.duckdns.org/api/wedding/letters"
        const letter = {
          "creator": nameInfo.value.name,
          // "title": titleInfo.value.title,
          "content": contentInfo.value.content
        }
        axios.put(url, letter).then((response) => {
          alert("감사합니다.")
          router.go();
          if (!response) {
            console.log(response);
          }
        }).catch((Error) => {
          console.log(Error);
        })
      }
    }
    return {
      nameInfo,
      name,
      isValidName,
      // titleInfo,
      // isValidTitle,
      contentInfo,
      isValidContent,
      submitStatus,
      submit,
    }
  }
};
</script>
<style scoped>
.syw-write-letter-bg {
  position: relative;
  z-index: 1;
}

.syw-write-letter-bg::before {
  content: "";
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 450px;
  opacity: 0.8;
  z-index: -1;
  background-image: url(~@/assets/img/bg/flowers-pink.jpeg);
  background-size: 100% 100%;
}

.is-invalid {
  outline: rgb(235, 27, 27);
  border: 1px solid rgb(235, 27, 27);
  animation: shake 1.2s;
}

@keyframes shake {
  10%,
  90% {
    transform: scale(0.9) translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: scale(0.9) translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: scale(0.9) translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: scale(0.9) translate3d(4px, 0, 0);
  }
}
</style>
