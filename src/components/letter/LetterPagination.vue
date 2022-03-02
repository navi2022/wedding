<template>
  <div class="syw-cover syw-section syw-letter-pagination-bg">
    <div class="container">
      <div class="row animate__animated animate__fadeInDown">
        <div class="syw-section-head text-center">
          <span>thanks everyone</span>
          <h2 style="color: white">Guest Book</h2>
        </div>
      </div>
      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="letters">
        <template #renderItem="{ item }">
          <a-list-item key="item.id">
            <template #extra>
              <pre class="syw-letter-content-text syw-letter-pagination-content">{{ item.content }}</pre>
            </template>
            <a-list-item-meta :description="item.createdAt">
              <template #title>
                <span class="syw-letter-content-text">From : {{ item.creator }}</span>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>
<script>
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
    const pagination = ref({pageSize: 2});
    onMounted(() => {
      loading.value = true;
      const url = "https://seungmin-yikyung.duckdns.org/api/wedding/letters"
      axios.get(url).then((response) => {
        console.log(response);
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
  width: 240px;
  max-height: 180px;
  overflow: auto;
}

.syw-letter-content-text {
  font-size: 22px;
  color: white;
  font-family: 'Hi Melody', cursive;
}

.ant-pagination li {
  border-radius: 3rem;
}

</style>
