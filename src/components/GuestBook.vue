<template>
  <write-letter></write-letter>
  <letter-pagination></letter-pagination>
</template>
<script>
import WriteLetter from "@/components/letter/WriteLetter";
import LetterPagination from "@/components/letter/LetterPagination";


export default {
  name: 'GuestBook',
  components: {WriteLetter, LetterPagination}
};
</script>
