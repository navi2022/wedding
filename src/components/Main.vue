<template>
  <greeting></greeting>
  <about-us></about-us>
  <contact-us></contact-us>
  <wedding-hall></wedding-hall>
  <simple-gallery></simple-gallery>
  <recent-letters></recent-letters>
  <write-letter></write-letter>
</template>
<script>
import Greeting from "@/components/Greeting";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import WeddingHall from "@/components/WeddingHall";
import SimpleGallery from "@/components/SimpleGallery";
import RecentLetters from "@/components/letter/RecentLetters";
import WriteLetter from "@/components/letter/WriteLetter";


export default {
  name: 'Main',
  components: {Greeting, AboutUs, ContactUs, WeddingHall, RecentLetters, SimpleGallery, WriteLetter}
};
</script>

