<template>
  <greeting></greeting>
  <about-us></about-us>
  <contact-us></contact-us>
  <wedding-hall></wedding-hall>
  <gallery></gallery>
  <recent-letters></recent-letters>
  <write-letter></write-letter>
</template>
<script>
import Greeting from "@/components/Greeting";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import WeddingHall from "@/components/WeddingHall";
import RecentLetters from "@/components/letter/RecentLetters";
import Gallery from "@/components/Gallery";
import WriteLetter from "@/components/letter/WriteLetter";

export default {
  name: 'Main',
  components: {Greeting, AboutUs, ContactUs, WeddingHall, RecentLetters, Gallery, WriteLetter}
};
</script>

