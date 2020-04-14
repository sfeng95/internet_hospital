<template>
  <div class="jswzchoose">
    <nut-navbar @on-click-back="back" :rightShow="false">选择问诊方式</nut-navbar>
    <router-link tag="a" :to="'/twwz'" class="choose">
      <img src="../../../assets/images/menu1.png" />
      <div class="wz1">
        <p>图文问诊</p>
        <a>使用语音、图文与医生直接沟通</a>
      </div>
      <img class="right_icon" src="../../../assets/icons/right_icon.png" />
    </router-link>
    <router-link tag="a" :to="'/dhwz'" class="choose">
      <img src="../../../assets/images/menu2.png" />
      <div class="wz">
        <p>电话问诊</p>
        <a>电话直接沟通病情，通话时长15分钟</a>
      </div>
      <img class="right_icon" src="../../../assets/icons/right_icon.png" />
    </router-link>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.push({ path: "/jswz" });
    }
  }
};
</script>
<style lang="scss" scoped>
.wz1 {
  position: relative;
  right: 21px;
}
.wz {
  position: relative;
  right: 10px;
}
.nut-navbar {
  height: 44px;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
.choose {
  display: flex;
  background-color: white;
  margin: 10px 14px 10px 14px;
  align-items: center;
  justify-content: space-between;
  padding: 21px 12px 22px 14px;
  border-radius: 8px;
  box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.04);

  p {
    font-size: 18px;
    font-family: "黑体" ；;
    color: black;
  }
  a {
    font-size: 13px;
    color: #a6a6a6;
    font-family: "黑体";
  }
  img {
    height: 45px;
  }
}
.right_icon {
  height: 16px !important;
}
</style>