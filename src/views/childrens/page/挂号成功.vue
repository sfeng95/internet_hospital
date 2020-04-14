<template>
  <div class="ghcg">
    <nut-navbar @on-click-back="back" :rightShow="false">挂号信息</nut-navbar>
    <div class="header">
      <img src="../../../assets/images/ghcg.png" />
      <p>挂号成功</p>
      <span>
        预约成功短信已发送到手机
        <span>158****0981</span>，请注意查收
      </span>
    </div>
    <div class="title">
      <img src="../../../assets/images/失败.png" />
      <div class="right">
        <p>
          <span>陈屿洋</span>
          <span>主治医师</span>
        </p>
        <p>
          <span>重庆市人民医院</span>
          <span>妇产科</span>
        </p>
      </div>
    </div>
    <div class="content2">
      <div class="c1">
        就诊人:
        <span>陈某某</span>
      </div>
      <div class="c1">
        费用:
        <span>22.00元</span>
      </div>
      <div class="c1">
        身份证:
        <span>500106199712111111</span>
      </div>
    </div>
    <div class="button">
      <router-link tag="span" :to="'ddxq'" class="left">订单详情</router-link>
      <span class="right">完成</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.nut-navbar {
  height: 44px;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
.header {
  background-color: white;
  text-align: center;
  padding-bottom: 25px;
  span {
    font-size: 12px;
    color: #99a2cd;
    line-height: 50px;
  }
  p {
    font-size: 18px;
    color: #5a75f6;
    margin-top: 13px;
  }
  img {
    margin-top: 32px;
  }
}
.title {
  height: 87px;
  margin-top: 7px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  img {
    height: 49px;
    width: 49px;
    border-radius: 49px;
  }
}
.right {
  margin-left: 12px;
  p:nth-child(1) {
    font-size: 15px;
    color: #353535;
    text-align: left;
    span:nth-child(2) {
      margin-left: 8px;
      font-size: 12px;
      color: #999999;
    }
  }
  p:nth-child(2) {
    font-size: 12px;
    color: #5a5a5a;
    span:nth-child(2) {
      margin-left: 9px;
    }
  }
}
.content2 {
  margin-top: 7px;
  .c1:nth-child(2) {
    span {
      margin-left: 41px;
      color: #ff2400;
    }
  }
}
.c1 {
  color: black;
  height: 50px;
  background-color: white;
  padding: 0 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #5a5a5a;
  border-bottom: 1px solid #f7f7f7;

  span {
    margin-left: 28px;
  }
}
.button {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  span:nth-child(2) {
    background-color: #5a75f6;
  }
  span {
    background-color: #24b1f8;
    height: 37px;
    border-radius: 20px;
    width: 40%;
    text-align: center;
    line-height: 37px;
    color: white;
  }
}
</style>