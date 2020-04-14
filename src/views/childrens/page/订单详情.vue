<template>
  <div class="ddxq">
    <nut-navbar @on-click-back="back" :rightShow="false">挂号信息</nut-navbar>
    <div class="header">
      <p>订单状态: 预约成功</p>
      <p>已过就诊日期</p>
    </div>
    <div class="content">
      <div class="c1">
        <span>医生:</span>
        <span>辽源 主任医师</span>
      </div>
      <div class="c1">
        <span>科室:</span>
        <span>产科</span>
      </div>
      <div class="c1">
        <span>医院地址：</span>
        <span>重庆市渝中区中山之路</span>
      </div>
      <div class="c1">
        <span>就诊日期：</span>
        <span>2019-08-14</span>
      </div>
      <div class="c1">
        <span>就诊预估时间：</span>
        <span>
          3号 08：00-08：30
          <span>具体时间以医院时间为主</span>
        </span>
      </div>
    </div>
    <div class="content2">
      <div class="c1">
        <span>姓名:</span>
        <span>陈某某</span>
      </div>
      <div class="c1">
        <span>下单时间:</span>
        <span>2019-08-10</span>
      </div>
    </div>
    <div class="button">
      <span class="left" @click="quxiao">取消订单</span>
      <span class="right">再次挂号</span>
    </div>
    <div class="footer">
      <p>您好，如果您要取消挂号订单，请在就诊前一天零点之前取消，</p>
      <p>否则系统将自动更改未不能取消状态</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    quxiao() {
      this.$dialog({
        title: "温馨提示",
        content: "是否要取消该订单？取消之后将无法恢复"
      });
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/.nut-dialog-cancel {
  background: #d0d0d0 !important;
}
/deep/.nut-dialog-ok {
  background: #899cf6 !important;
}
.button {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  span:nth-child(2) {
    background-color: #899cf6;
  }
  span {
    background-color: #d0d0d0;
    height: 37px;
    border-radius: 20px;
    width: 40%;
    text-align: center;
    line-height: 37px;
    color: white;
  }
}
.nut-navbar {
  height: 44px;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
.header {
  padding: 22px 15px;
  background-color: white;
  border-top: 1px solid #f5f5f5;
  line-height: 25px;
  border-bottom: 7px solid #f5f5f5;
  p:nth-child(2) {
    font-size: 12px;
    color: #999999;
  }
  p:nth-child(1) {
    font-size: 18px;
  }
}
.c1 {
  background-color: white;
  padding: 23px 15px 14px 15px;
  color: #5a5a5a;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f7f7f7;
  span:nth-child(2) {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    text-align: right;
    span {
      color: #999999;
    }
  }
}
.content2 {
  margin-top: 7px;
}
.footer {
  color: #999999;
  font-size: 12px;
  text-align: center;
  padding-top: 28px;
}
</style>