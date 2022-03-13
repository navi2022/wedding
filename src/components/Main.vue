<template>
  <greeting></greeting>
  <simple-about-us></simple-about-us>
  <contact-us-detail></contact-us-detail>
  <wedding-hall></wedding-hall>
  <recent-letters></recent-letters>
  <gallery></gallery>
</template>
<script>
import Greeting from "@/components/Greeting";
import SimpleAboutUs from "@/components/SimpleAboutUs";
import WeddingHall from "@/components/WeddingHall";
import Gallery from "@/components/Gallery";
import RecentLetters from "@/components/letter/RecentLetters";
import ContactUsDetail from "@/components/ContactUsDetail";

export default {
  name: 'Main',
  components: {Greeting, SimpleAboutUs, ContactUsDetail, WeddingHall, RecentLetters, Gallery}
};
</script>

