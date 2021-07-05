<template>
  <div>
    <div class="opens">
      <a-button type="primary" @click="showDrawer" class="openbtn">
        <
      </a-button>
    </div>

    <a-drawer width="120" :closable="false" :visible="visible" @close="onClose">
      <div class="btn">
        <div>
          <a-button type="primary" @click="showChildrenDrawer">
            <i class="el-icon-setting">设置</i>
          </a-button>
        </div>

        <div>
          <a-button type="primary" @click="showChildrenDrawer">
            <i class="el-icon-s-promotion">网页</i>
          </a-button>
        </div>

        <div>
          <a-button type="primary" onclick="window.close();">
            <!-- <input
              type="button"
              name="close"
              value="关闭网页"
              onclick="window.close();"
            /> -->
            <i class="el-icon-switch-button">退出</i>
          </a-button>
        </div>
      </div>

      <a-drawer
        width="300"
        :closable="false"
        :visible="childrenDrawer"
        @close="onChildrenDrawerClose"
      >
        <div class="addbtn">
          <a-button type="primary" @click="showChildrenDrawer">
            <i class="el-icon-plus">增加</i>
          </a-button>
          <a-button type="primary" @click="showChildrenDrawer">
            <i class="el-icon-minus">移除</i>
          </a-button>
          <a-button type="primary" @click="showChildrenOut">
            <i class="el-icon-back">返回</i>
          </a-button>
        </div>
      </a-drawer>
      <div
        :style="{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px',
        }"
      ></div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  name: "SetBar",
  data() {
    return {
      visible: false,
      childrenDrawer: false,
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    showChildrenDrawer() {
      this.childrenDrawer = true;
    },
    onChildrenDrawerClose() {
      this.childrenDrawer = false;
    },
    showChildrenOut() {
      window.history.go(-1);
    },
  },
};
</script>
<style scoped>
.addbtn {
  position: relative;
  top: 450px;
}
.addbtn button {
  margin: 35px;
  position: relative;
}
.opens {
  float: right;
  margin-right: 22px;
  width: 20px;
}
.openbtn {
  height: 150px;

  position: relative;
  bottom: 400px;
}
.btn {
  position: relative;
  top: 530px;
}
.btn div {
  padding: 15px;
  position: relative;
  right: 18px;
  /* width: 10px;
  height: 30px; */
}
</style>
