<template>
  <div>
    //src：相对应的音乐文件地址
    <audio id="audio" :src="require('../static/bg-music.mp3')"></audio>
  </div>
</template>

  <script>
export default {
  name: "ContentMusic",
  mounted() {
    // 播放音乐
    let oAudio = document.querySelector("#audio");
    oAudio.onended = function () {
      //播放完毕，重新循环播放
      oAudio.load();
      oAudio.play();
    };
    this.audioAutoPlay();
  },

  methods: {
    audioAutoPlay() {
      let audio = document.getElementById("audio");
      audio.play();
      document.removeEventListener("touchstart", this.audioAutoPlay);
    },
  },
};
</script>
