<template>
  <div id="app">
    <home />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: { Home },
  data() {
    return {
      msg: "hello",
    };
  },
};
</script>

<style scoped>
/* #app {
  width: 1670px;

  height: 100vh;
} */
</style>
