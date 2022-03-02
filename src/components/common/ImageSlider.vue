<template>
  <img class="animate__animated animate__fadeIn animate__slower w-100 h-100"
       v-bind:src="image" />
</template>
<script>
import {onMounted, ref} from "vue";

export default {
  name: "ImageSlider",
  props: {
    images: {type: Array, default: () => []},
  },
  setup: (props) => {
    const images = ref(props.images);
    const index = ref(0);
    const image = ref();
    const next = () => {
      index.value = (index.value + 1) % images.value.length;
      image.value = images.value[index.value];
    }
    onMounted(() => {
      next();
      setInterval(() => {
        next();
      }, 3000);
    })
    return {
      image,
    };
  }
};
</script>