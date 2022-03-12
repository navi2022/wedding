<template>
  <div class="syw-cover syw-section syw-letter-pagination-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="syw-section-head text-center">
          <span>thanks everyone</span>
          <h2 style="color: white">Guest Book</h2>
        </div>
      </div>
      <a-list class="animate__animated animate__slow animate__fadeIn text-center"
              item-layout="vertical"
              show-less-items
              :pagination="pagination"
              :data-source="letters">
        <template #renderItem="{ item }">
          <a-list-item key="item.id">
            <a-list-item-meta>
              <template #title>
                <pre class="syw-letter-content-text syw-letter-pagination-content" >{{ item.content }}</pre>
                <div class="syw-letter-content-text">From: {{ item.creator }}</div>
                <div class="syw-letter-content-text">At: {{ item.createdAt }}</div>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>
<script lang="js">
import {onMounted, ref} from "vue";
import axios from "axios";

export default {
  name: 'LetterPagination',
  components: {},
  setup: function () {
    const columns = [
      {
        title: '성함',
        dataIndex: 'creator',
      },
      {
        title: '내용',
        dataIndex: 'content',
        ellipsis: true,
      },
      {
        title: '작성일',
        dataIndex: 'createdAt',
        ellipsis: true,
      },
    ];
    const letters = ref([]);
    const loading = ref(false);
    const pagination = ref({pageSize: 1, size:"small", showLessItems:false});
    onMounted(() => {
      loading.value = true;
      const url = "https://seungmin-yikyung.duckdns.org/api/wedding/letters"
      axios.get(url).then((response) => {
        letters.value = response.data;
        loading.value = false;

      }).catch((Error) => {
        this.loading = false;
        console.log(Error);
      })
    });
    return {
      columns,
      letters,
      loading,
      pagination,
    };
  }
};
</script>
<style scoped>
.syw-letter-pagination-bg {
  background-image: url(~@/assets/img/wallpaperbetter.jpg);
}

.syw-letter-pagination-content {
  white-space: pre-wrap;       /* css-3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

.syw-letter-content-text {
  font-size: 17px;
  color: white;
  font-family: 'Hi Melody', cursive;
}

.ant-pagination li {
  border-radius: 3rem;
}
</style>
