<template>
  <greeting></greeting>
  <about-us></about-us>
  <our-story></our-story>
  <wedding-hall></wedding-hall>
  <contact-us></contact-us>
  <recent-letters></recent-letters>
  <write-letter></write-letter>
  <gallery></gallery>
</template>
<script>
import Greeting from "@/components/Greeting";
import AboutUs from "@/components/AboutUs";
import OurStory from "@/components/OurStory";
import ContactUs from "@/components/ContactUs";
import WeddingHall from "@/components/WeddingHall";
import Gallery from "@/components/Gallery";
import RecentLetters from "@/components/letter/RecentLetters";
import WriteLetter from "@/components/letter/WriteLetter";

export default {
  name: 'Main',
  components: {Greeting, AboutUs, OurStory, ContactUs, WeddingHall, RecentLetters, WriteLetter, Gallery}
};
</script>

