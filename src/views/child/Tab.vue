<template>
  <div class="tab">
    <div class="title">
      <img src="@/assets/jh.png" alt="" />
      <span>惠州市公安机关 “一村（居）一警察”</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
};
</script>

<style scoped>
.tab {
  height: 40px;
  width: 100%;
  background-color: red;
}
.title {
  padding: 7px 15px;
  margin: 2px;
}
img {
  position: relative;
  top: 3px;
}
span {
  color: white;
  font-size: 13px;
  margin: 0px 5px;
}
</style>