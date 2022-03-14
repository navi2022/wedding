<template>
  <greeting></greeting>
  <about-us></about-us>
  <contact-us></contact-us>
  <wedding-hall></wedding-hall>
  <recent-letters></recent-letters>
  <gallery></gallery>
</template>
<script>
import Greeting from "@/components/Greeting";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import WeddingHall from "@/components/WeddingHall";
import RecentLetters from "@/components/letter/RecentLetters";
import Gallery from "@/components/Gallery";

export default {
  name: 'Main',
  components: {Greeting, AboutUs, ContactUs, WeddingHall, RecentLetters, Gallery}
};
</script>

