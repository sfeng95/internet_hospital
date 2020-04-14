<template>
  <div class="jkkp">
    <nut-navbar @on-click-back="back" :rightShow="false">健康科普</nut-navbar>
    <div class="content">
      <h1>{{info.title}}</h1>
      <span class="num">{{time}}</span>
      <span class="num">阅读{{info.hit}}</span>
      <p v-html="info.body"></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return { info: "", time: 0 };
  },
  created() {
    const that = this;
    that.loading = that.$toast.loading("加载中...");
    this.$post(`/hospital/news/detail`)
      .then(function(res) {
        console.info(res);
        that.loading.hide();
      })
      .catch(function(res) {
        // 请求失败处理
        console.log(res);
        that.loading.hide();
      });
  },

  methods: {
    back() {
      this.$router.push({ path: "/index" });
    }
  }
};
</script>
<style lang="scss" scoped>
.content > .table-view:first-child {
  margin: 0;
}
.content {
  padding: 10px;
  background: #fff;
}
.content h1 {
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  color: rgba(53, 53, 53, 1);
}
.nut-navbar {
  height: 44px;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
.num {
  display: block;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  color: rgba(153, 153, 153, 1);
  margin: 10px 0;
}
.num:first-of-type {
  margin-bottom: 0;
}
.num:last-of-type {
  margin-top: 0;
}
img {
  width: 100%;
}
</style>