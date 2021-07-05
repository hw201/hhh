<template>
  <div class="bigbox">
    <div class="title"><span>村警精神：扎根基层 为民奉献 固本安民</span></div>

    <div class="outbox">
      <div class="work">
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            >点击上传文件
          </el-upload>
        </div>
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            >点击上传文件
          </el-upload>
        </div>
      </div>

      <div class="work">
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            >点击上传文件
          </el-upload>
        </div>
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            >点击上传文件
          </el-upload>
        </div>
      </div>

      <div class="work">
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            >点击上传文件
          </el-upload>
        </div>
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            >点击上传文件
          </el-upload>
        </div>
      </div>
    </div>

    <div class="player">
      <div class="swiper">
        <el-carousel height="280px">
          <el-carousel-item v-for="item in 4" :key="item.id">
            <!-- <h3 class="small">{{ item.img }}</h3> -->
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="videos">
        <el-carousel height="280px">
          <el-carousel-item v-for="item in 4" :key="item.id">
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { getdetail } from "@/network/swipwe";
export default {
  components: {},
  name: "ContentWord",
  data() {
    return {
      // goods: {
      //   1: { list: [] },
      //   2: { list: [] },
      //   3: { list: [] },
      // },
      // result: null,
      // attr4: [],

      topImages: [],
    };
  },
  created() {
    //保存传入的id
    // this.id = this.$route.params.id; //根据id请求详情数据

    getdetail().then((res) => {
      console.log(res);
      // this.topImages = res.details.split(",");
    });
  },

  // methods: {
  //   gethomegoods(type) {
  //     gethomegoods(type).then((res) => {
  //       this.result = res;
  //       // this.attr4 = res.result.attr4.split(",");
  //       // this.goods[type].list.push(...res);
  //     });
  //   },
  // },
};
</script>

<style scoped>
/deep/ .el-upload-dragger {
  width: 200px;
  height: 100px;
  background-color: red;
  color: white;
  border: none;
}
.bigbox {
  position: relative;
  margin: 0 auto;
  height: 700px;
  width: 750px;
  text-align: center;
  padding: 40px 0px;
  /* text-align: center;
  position: absolute; */
  /* justify-content: space-between; */
}
.title {
  /* margin: 20px 2px; */
  font-size: 28px;
  font-weight: blod;
  color: red;
  height: 50px;
}
.outbox {
  height: 300px;
  display: flex;
}

.work {
  flex: 1;
  justify-self: auto;
}
.work div {
  width: 200px;
  height: 100px;
  background-color: red;
  margin: 20px;
  border-radius: 5%;
  line-height: 100px;
  text-align: center;
  color: white;
}
.player {
  display: flex;
  /* flex: 1; */
  /* justify-self: auto; */
  justify-content: space-around;
  height: 300px;
}
.swiper {
  width: 400px;
  height: 280px;

  margin: 15px;
  padding: 30px 0px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.videos {
  padding: 30px 0px;
  width: 400px;
  height: 280px;

  margin: 15px;
}
</style>