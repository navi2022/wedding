<template>
  <recent-letters></recent-letters>
  <write-letter></write-letter>
  <letter-pagination></letter-pagination>
</template>
<script>
import RecentLetters from "@/components/letter/RecentLetters";
import WriteLetter from "@/components/letter/WriteLetter";
import LetterPagination from "@/components/letter/LetterPagination";

export default {
  name: 'GuestBook',
  components: {RecentLetters, WriteLetter, LetterPagination}
};
</script>
