<template>
  <div class="ghxx">
    <nut-navbar @on-click-back="$common.back"
                :rightShow="false">挂号信息</nut-navbar>
    <div class="header">
      <p>请您在15分钟内完成支付，超时订单将自动取消</p>
    </div>
    <div class="title">
      <div class="img_box">
        <img :src="$api + registered.doctor_info.thumb" />
      </div>
      <div class="right">
        <p>
          <span>{{ registered.doctor_info.name }}</span>
          <span>{{ registered.doctor_info.level }}</span>
        </p>
        <p>
          <span>{{ registered.doctor_info.institution_name }}</span>
          <span>{{ registered.doctor_info.department_name }}</span>
        </p>
      </div>
    </div>
    <div class="content1">
      <div class="c1">
        <span>就诊日期</span>
        <span>{{ registered.registered_time.date }}</span>
      </div>
      <div class="c1">
        <span>就诊时间</span>
        <span>
          {{ registered.registered_time.server_time }}
          <br />
          <span>具体时间以医院时间为主</span>
        </span>
      </div>
    </div>
    <div class="content2">
      <div class="c1">
        <span>就诊人</span>
        <span class="icon">
          陈某某
          <nut-icon type="right"
                    color="#999999"></nut-icon>
        </span>
      </div>
      <div class="c1">
        <span>预计费用</span>
        <span class="rd">{{ registered.registered_time.price }}元</span>
      </div>
      <div class="c1">
        <span>支付方式</span>
        <span>到医院支付</span>
      </div>
    </div>
    <router-link tag="div"
                 :to="'/ghcg'"
                 class="button">
      <p>确认挂号</p>
    </router-link>
  </div>
</template>
<script>
export default {
  computed: {
    registered () {
      return this.$store.state.Public;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.img_box {
  height: 49px;
  width: 49px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.ghxx {
  text-align: center;
}
.nut-navbar {
  height: 44px;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
.header {
  text-align: center;
  height: 48px;
  background-color: #f1f3f9;
  font-size: 14px;
  color: #6d7ed1;
  line-height: 48px;
}
.title {
  height: 87px;

  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
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
.content2,
.content1 {
  margin-top: 7px;

  .c1:nth-child(1) {
    border-bottom: 1px solid #f7f7f7;
  }
  .c1 {
    color: black;
    height: 50px;
    background-color: white;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #5a5a5a;
    span:nth-child(2) {
      color: black;
    }
  }
}
.c1:nth-child(2) {
  span:nth-child(2) {
    text-align: right;

    span {
      font-size: 11px;
      color: #999999;
    }
  }
}

.content2 {
  .c1:nth-child(2) {
    border-bottom: 1px solid #f7f7f7;
  }
  .c1 {
    span:nth-child(2) {
      color: #5a5a5a;
    }
  }
}
.rd {
  color: red !important;
}
.button {
  height: 37px;
  background-color: #5a75f6;
  margin: 43px 9% 0 9%;
  border-radius: 20px;
  line-height: 37px;
  p {
    height: 37px;
    color: white;
  }
}
.nut-icon {
  height: 11px;
  width: 6px;
  margin-left: 8px;
}
.icon {
  display: flex;
  align-items: center;
}
</style>
