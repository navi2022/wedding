<template>
  <navigation></navigation>
  <router-view></router-view>
</template>
<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'Main',
  components: {Navigation}
};
</script>