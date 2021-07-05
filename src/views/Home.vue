<template>
  <div class="home">
    <tab />
    <content-bg />
  </div>
</template>

<script>
import Tab from "@/views/child/Tab.vue";
import ContentBg from "@/views/child/ContentBg.vue";
// import ContentMusic from "./child/ContentMusic.vue";
// import ContentWord from "./child/ContentWord.vue";

export default {
  components: { Tab, ContentBg },
};
</script>

<style scoped>
.home {
  width: 1680px;
  /* width: 100%; */
  height: 800px;
}
</style>