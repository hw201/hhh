<template>
  <div class="content">
    <content-word />
    <set-bar />
  </div>
</template>

<script>
import ContentWord from "./ContentWord.vue";
import SetBar from "../sidebar/SetBar.vue";
export default {
  components: { ContentWord, SetBar },
  name: "ContentBg",
};
</script>

<style scoped>
.content {
  background: url("~@/assets/img/bg.jpeg") no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100%;
}
</style>