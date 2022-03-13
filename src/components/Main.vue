<template>
  <greeting></greeting>
  <simple-about-us></simple-about-us>
<!--  <about-us></about-us>-->
  <contact-us-detail></contact-us-detail>
  <wedding-hall></wedding-hall>
<!--  <recent-letters></recent-letters>-->
<!--  <write-letter></write-letter>-->
  <gallery></gallery>
</template>
<script>
import Greeting from "@/components/Greeting";
import AboutUs from "@/components/AboutUs";
import SimpleAboutUs from "@/components/SimpleAboutUs";
import WeddingHall from "@/components/WeddingHall";
import Gallery from "@/components/Gallery";
import RecentLetters from "@/components/letter/RecentLetters";
import WriteLetter from "@/components/letter/WriteLetter";
import ContactUsDetail from "./ContactUsDetail";

export default {
  name: 'Main',
  components: {Greeting, AboutUs, SimpleAboutUs, ContactUsDetail, WeddingHall, RecentLetters, WriteLetter, Gallery}
};
</script>

