<template>
  <div class="wdgh">
    <nut-navbar @on-click-back="back" :rightShow="false">我的挂号</nut-navbar>
    <div class="header">
      <span>选择就诊人</span>
      <nut-icon type="down" size="15px"></nut-icon>
    </div>
    <div class="choose">
      <p :class="xian=== 1 ?'select':''" @click="xian=1;xian2=0;xian3=0">全部订单</p>
      <p :class="xian2=== 1 ?'select':''" @click="xian=0;xian2=1;xian3=0">待就诊</p>
      <router-link
        tag="p"
        :to="{name:'pj'}"
        :class="xian3=== 1 ?'select':''"
        @click="xian=0;xian2=0;xian3=1"
      >待评价</router-link>
    </div>
    <div class="content">
      <div class="c1">
        <div class="dingdan">
          <div class="top">
            <p>订单号:52368226</p>
            <p>已就诊</p>
          </div>
        </div>
        <div class="zhong">
          <img src="../../../assets/icons/hospital.png" />
          <span>重庆市人民医院 ></span>
          <img src="../../../assets/icons/departments.png" />
          <span>眼科普通... ></span>
        </div>
        <div class="zhong1">
          <div class="tu">
            <img src />
          </div>
          <div class="right">
            <p>
              周华生
              <span>主任医师</span>
            </p>
            <p>擅长：擅长眼科常见病多发病的诊治，特别在在特...</p>
          </div>
        </div>
        <div class="zhong2">
          <p>
            <span>就诊人:</span>
            <span>就诊人:张晓</span>
          </p>
          <p>
            <span>就诊时间:</span>
            <span>2019-05-15 周三 08：30：-09：00</span>
          </p>
          <p>
            <span>费用:</span>
            <span>费用：22.00元</span>
          </p>
        </div>
        <div class="down">
          <span>取消订单</span>
          <span>再次挂号</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xian: 1,
      xian2: 0,
      xian3: 0
    };
  },
  created() {
    const that = this;
    that.loading = that.$toast.loading("加载中...");
    that.$axios
      .post(that.$api + "/hospital/register/list", {
        token: localStorage.getItem("token")
      })
      .then(function(res) {
        console.log(res);
        if (res.data.code) {
          that.loading.hide();
        }
      })
      .catch(function(res) {
        // 请求失败处理
        that.$toast.text("请求失败，请检查网络！");
        that.loading.hide();
      });
  },
  methods: {
    back() {
      this.$router.push({ path: "/mine" });
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
  padding: 13px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1px;
  font-size: 14px;
}
.choose {
  background-color: white;
  padding: 0 17px;
  color: #808080;
  font-size: 14px;
  display: flex;
  p {
    margin-right: 18px;
    padding: 15px 0;
  }
  p.select {
    border-bottom: 1px solid #5a75f6;
    color: #5a75f6;
  }
}
.c1 {
  background-color: white;
}
.dingdan {
  margin-top: 10px;
  background-color: white;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 13px 17px;
    p:nth-child(2) {
      color: #909090;
    }
  }
}
.zhong {
  padding: 14px 17px 16px 17px;
  background-color: white;
  border-top: 1px solid #e6e6e6;
  color: #5a5a5a;
  font-size: 13px;
  display: flex;
  align-items: center;
  img {
    height: 14px;
    margin: 0 10px;
  }
}
.zhong1 {
  margin-top: 20px;
  padding: 0 17px;
  display: flex;
  .right {
    margin-left: 8px;
    p:nth-child(1) {
      font-size: 15px;
      color: #353535;
      margin-top: 3px;
      span {
        color: #aaaaaa;
        font-size: 13px;
        margin-left: 5px;
      }
    }
    p:nth-child(2) {
      font-size: 12px;
      color: #aaaaaa;
      margin-top: 5px;
    }
  }
  .tu {
    height: 50px;
    width: 50px;
    background-color: red;
    overflow: hidden;
  }
}
.zhong2 {
  padding: 10px 17px 8px 17px;
  font-size: 12px;
  background-color: #f9f9f9;
  color: #aaaaaa;
  margin: 16px 17px 0 17px;
  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span:nth-child(2) {
      color: #5a5a5a;
    }
  }
}
.down {
  padding: 16px 17px;
  text-align: right;
  font-size: 13px;
  color: #5a5a5a;
  span {
    margin-left: 10px;
    border-radius: 50px;
    border: 1px solid #dbdbdb;
    padding: 6px 11px;
  }
}
</style>