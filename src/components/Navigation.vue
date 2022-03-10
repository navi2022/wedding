<template>
  <nav class="sticky-navi">
    <div class="row text-center">
      <div class="col">
        <a href="/" class="router-link">Home</a>
      </div>
      <div class="col">
        <a href="/weddingHall" class="router-link">ContactUs</a>
      </div>
      <div class="col">
        <a href="/guestBook" class="router-link">GuestBook</a>
      </div>
      <div class="col">
        <a href="/gallery" class="router-link">Gallery</a>
      </div>
    </div>
  </nav>
</template>
<script>

export default {
  name: 'Navigation'
};
</script>
<style>
.sticky-navi {
  position: sticky;
  top: 0;
  opacity: 80%;
  background-color: #ffffff;
  padding: 0.8rem;
  z-index: 999;
  font-size: 1.3rem;
  font-family: "Sacramento", Arial, serif;
  /*background-image: url(~@/assets/img/bridesmaid-3.jpg);*/
}

.router-link {
  color: #0b0b0b;
}
</style>