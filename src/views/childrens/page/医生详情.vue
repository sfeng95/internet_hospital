<template>
  <div class="ysxq">
    <nut-navbar @on-click-back="$common.back" :rightShow="false">产科主产门诊</nut-navbar>
    <div class="header">
      <div class="left">
        <div class="img_box">
          <img :src="$api+info.thumb" />
        </div>
        <div>
          <p>
            <span>{{ info.name }}</span>
            <span>{{ info.level }}</span>
          </p>
          <p>{{ info.institution_name }} {{ info.department_name }}</p>
        </div>
      </div>
      <div v-if="is_up==0" class="weizan" @click="go_up">
        <img src="../../../assets/icons/goods.png" />
        {{up_number}}人赞过
      </div>
      <div v-else-if="is_up==1" class="yizan" @click="no_more">
        <img src="../../../assets/icons/goods.png" />
        {{up_number}}人赞过
      </div>
    </div>

    <div class="jianjie">
      {{ info.introduce }}
      <router-link
        tag="span"
        :to="{
            name: 'ysjj',params:{
              id:$route.params.id
            }
          }"
      >
        医生简介
        <img src="../../../assets/icons/icon_right.png" />
      </router-link>
    </div>

    <div class="title">本周</div>
    <div class="content">
      <div class="c1" v-for="(item,index) in scheduling" :key="index">
        <div class="left2">
          <p>{{ item.date }} {{ item.server_time }}</p>
          <p>
            <span>普通号-[ 医院平台 ]</span>
            <span></span>
          </p>
        </div>
        <div
          class="right2"
          @click="select_code(item.date,item.data)"
        >预约 (余{{ item.total_remain_number }})</div>
      </div>
    </div>

    <nut-dialog
      title
      :visible="dialogShow"
      :noOkBtn="true"
      :noCancelBtn="true"
      :closeCallback="close"
    >
      <div class="就诊日期">
        <h5>就诊日期: {{ select_date }}</h5>
        <p>号源时段 以医院实际情况为准</p>
      </div>
      <div class="号源">
        <router-link
          to="/ghcg"
          :class="index == active ? 'active' : ''"
          v-for="(item, index) of select_date_data"
          :key="index"
        >
          <span @click="change(index)">{{ item.server_time }} {{item.price}}</span>
        </router-link>
      </div>
    </nut-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: "",
      scheduling: "",
      dialogShow: false,
      active: 0,
      select_date: "",
	    select_date_data:[],
      is_up: 0,
      up_number: 0,
      specialist_id: ""
    };
  },
  created() {
    const that = this;
    that.loading = that.$toast.loading("加载中...");
    that.$post("/hospital/specialist/info", {
        specialist_id: that.$route.params.id,
        token: localStorage.getItem("token")
      })
      .then(function(res) {
        console.log(res);
        if (res.code) {
          that.$store.commit("Public/SET_STATE", {
            doctor_info: res.info
          });
          that.info = res.info;
          that.is_up = res.info.is_thumbs_up;
          that.up_number = res.info.thumbs_up_number;
          that.scheduling = res.scheduling;
          that.loading.hide();
        }
      })
      .catch(function(res) {
        // 请求失败处理
        console.log(res);
        that.$toast.text("请求失败，请检查网络！");
        that.loading.hide();
      });
  },
  methods: {
    go_up() {
      const that = this;
      that.loading = that.$toast.loading("加载中...");
      that.$post("/hospital/thumbs/up", {
          specialist_id: that.$route.params.id,
          token: localStorage.getItem("token")
        })
        .then(function(res) {
          console.log(res);
          if (res.code) {
            that.is_up = 1;
            that.up_number++;
            that.loading.hide();
          } else {
            that.$toast.text("今日已经点过赞了哦，亲");
            that.loading.hide();
          }
        })
        .catch(function(res) {
          // 请求失败处理
          console.log(res);
          that.$toast.text("网络错误，请稍后再试");
          that.loading.hide();
        });
    },
    no_more() {
      const that = this;
      that.$toast.text("今日已经点过赞了哦，亲");
    },
    close() {
      this.dialogShow = false;
    },
    change(index) {
      console.info(index);
      this.active = index;
    },
    select_code(date,data) {
      this.dialogShow = true;
	  this.select_date = date;
	  this.select_date_data = data
      // this.$store.commit("Public/SET_STATE", {
      //   registered_time: {
      //     date: date,
      //     server_time: time,
      //     price: price
      //   }
      // });
      // this.$router.push({ name: "ghxx" });
    }
  }
};
</script>
<style lang="scss" scoped>
.就诊日期 {
  position: fixed;
  width: 100%;
  padding: 20px 15px;
  text-align: left;
  background: #fff;
  h5 {
    font-family: HiraginoSansGB-W3;
    font-size: 14px;
    font-weight: normal;
    color: #353535;
  }
  p {
    font-family: HiraginoSansGB-W3;
    font-size: 12px;
    font-weight: normal;
    color: #999999;
  }
}
.号源 {
  padding-top: 75px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: scroll;
  a {
    width: 163px;
    background-color: #f2f2f2;
    border-radius: 17px;
    margin: 7px 5px;
    font-size: 12px;
    color: #aeaeae;
    span {
      padding: 10px;
      box-sizing: border-box;
      display: block;
      height: 100%;
      width: 100%;
    }
  }
  a.active {
    background-color: #5a75f6;
    color: #fff;
  }
}
/deep/.nut-dialog-box {
  display: flex;
  align-items: flex-end !important;
}
/deep/.nut-dialog {
  width: 100%;
  border-radius: 0;
}
/deep/.nut-dialog-body,
/deep/.nut-dialog-content {
  padding: 0;
}
/deep/.nut-dialog-footer {
  height: auto;
}
/deep/.back-icon {
  filter: drop-shadow(300px 0 0 #fff);
  transform: translateX(-300px);
}
.ysxq {
  background: url("../../../assets/images/xzyysj_bg.png") 0 -22px;
  background-repeat: no-repeat;
  background-size: contain;
  height: auto;
}
.nut-navbar {
  height: 44px;
  background-color: transparent;
  color: white;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
.left {
  padding-left: 15px;
  display: flex;
  align-items: center;
  div {
    margin-left: 9px;
  }
  p {
    font-size: 12px;
    color: white;
  }
  span:nth-child(1) {
    font-size: 15px;
  }
  span:nth-child(2) {
    margin-left: 10px;
  }
  .img_box {
    height: 52px;
    width: 52px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
}
.yizan {
  height: 27px;

  background: url("../../../assets/images/xzyysj_right.png");

  background-size: cover;
  background-repeat: no-repeat;
  font-size: 12px;
  color: white;
  line-height: 27px;
  padding-left: 15px;
  padding-right: 18px;
  img {
    height: 11px;
    margin-right: 7px;
  }
}

.weizan {
  height: 27px;
  border-radius: 20px 0 0 20px;
  background: white;

  background-size: cover;
  background-repeat: no-repeat;
  font-size: 12px;
  color: #5a75f6;
  line-height: 27px;
  padding-left: 15px;
  padding-right: 18px;
  img {
    height: 11px;
    margin-right: 7px;
    filter: drop-shadow(400px 0 0 #5a75f6);
    transform: translateX(-400px);
  }
}
.header {
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.jianjie {
  padding: 15px 16px 25px 16px;
  margin: 13px 15px 0 15px;
  background-color: white;
  border-radius: 7px;
  color: #6c6c6c;
  font-size: 12px;
  line-height: 21px;
  box-shadow: 0 4px rgb(238, 238, 238);

  span {
    color: #5a75f6;
    display: flex;
    float: right;
    padding-top: 5px;
    align-items: center;

    img {
      height: 11px;
    }
  }
}
.title {
  margin: 10px 15px 0 15px;
  padding: 19px 0 13px 17px;
  background-color: white;
  font-size: 13px;
  color: #5a5a5a;
}
.content {
  margin: 0 15px 25px 15px;

  .c1 {
    border-top: 1px solid #f5f5f5;
    padding: 19px 17px 13px 17px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right2 {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 3px 8px;
      background-color: #6192f9;
      font-size: 12px;
      color: white;
      height: 22px;
      border-radius: 15px;
    }
    .left2 {
      line-height: 20px;
      p:nth-child(1) {
        color: #5a5a5a;
        font-size: 13px;
      }
      p {
        font-size: 12px;
        color: #aeaeae;
        span:nth-child(2) {
          margin-left: 4px;
          color: #ff3700;
        }
      }
    }
  }
}
</style>
