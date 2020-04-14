<template>
  <div class="基本信息">
    <nut-navbar @on-click-back="this.$common.back"
                :leftShow="true"
                :rightShow="false">
      添加就诊人</nut-navbar>
    <label>
      <span>与本人关系</span>
      <div id="sex"
           @click="isVisible1 = true">
        {{ Patients.relationship || "请选择关系" }}
      </div>
    </label>
    <label>
      <span>姓名</span>
      <div>
        <input type="text"
               placeholder="1-10个字"
               v-model="Patients.name" />
      </div>
    </label>
    <label>
      <span>身份证号码</span>
      <div>
        <input type="text"
               placeholder="请输入您的身份证号码"
               v-model="Patients.IDcode" />
      </div>
    </label>
    <label>
      <span>性别</span>
      <div id="sex"
           @click="isVisible = true">
        {{ Patients.sex || "请选择性别" }}
      </div>
    </label>
    <label>
      <span>手机号码(中国大陆+86)</span>
      <div>
        <input type="text"
               placeholder="请填真实的号码，方便我们联系"
               v-model="Patients.telephone" />
      </div>
    </label>
    <p class="tips">温馨提示：绑定的信息将作为就诊参考凭证</p>

    <div class="协议">
      <nut-checkbox v-model="selected"
                    size="small"> </nut-checkbox>
      <p>我已阅读并同意《<router-link to="">用户协议</router-link>》</p>
    </div>

    <btn @click-btn="over" />

    <!-- 性别 -->
    <nut-picker :is-visible="isVisible"
                :list-data="listData"
                @close="switchPicker('isVisible')"
                @confirm="setValue"></nut-picker>
    <nut-picker :is-visible="isVisible1"
                :list-data="listData1"
                @close="switchPicker('isVisible1')"
                @confirm="setValue1"></nut-picker>
  </div>
</template>
<script>
import btn from "../../../components/按钮.vue";
export default {
  components: {
    btn
  },
  data () {
    return {
      isVisible: false,
      listData: [["男", "女"]],
      isVisible1: false,
      listData1: [["本人", "父母", "子女", "配偶", "亲戚", "朋友", "其他"]],
      imgList1: [],
      selected: false
    };
  },
  computed: {
    Patients () {
      return this.$store.state.Patients;
    },
    endTime () {
      let time = new Date();
      return (
        time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()
      );
    }
  },
  methods: {
    switchPicker (param) {
      this[`${param}`] = !this[`${param}`];
    },
    setValue (chooseData) {
      this.sex = chooseData[0];
      if (chooseData[0] == "男") {
        this.$store.commit("Patients/SET_STATE", {
          sex: chooseData[0],
          sexIndex: 1
        });
      } else {
        this.$store.commit("Patients/SET_STATE", {
          sex: chooseData[0],
          sexIndex: 2
        });
      }
    },
    setValue1 (chooseData) {
      for (let i in this.listData1[0]) {
        if (chooseData[0] == this.listData1[0][i]) {
          this.$store.commit("Patients/SET_STATE", {
            relationship: chooseData[0],
            relationshipIndex: parseInt(i + 1)
          });
        }
      }
    },
    setChooseValue1 (param) {
      // this.date1 = [...[param[0][3], param[1][3]]];
      console.info(param);
    },
    over () {
      const that = this;
      console.info(1);
      const store = this.$store.state.Patients;
      if (
        store.relationship == "" ||
        store.name == "" ||
        store.IDcode == "" ||
        store.sexIndex == "" ||
        store.telephone == ""
      ) {
        this.$toast.text("请全部填写完成之后提交");
        return;
      }

      if (!this.selected) {
        this.$dialog({
          title: "系统提示",
          content: "您是否阅读并同意用户协议",
          closeBtn: false, //显式右上角关闭按钮
          onOkBtn (event) {
            //确定按钮点击事件
            that.selected = true;
            this.close(); //关闭对话框
          }
        });
        return;
      }

      that.$post("/hospital/patient/add", {
          token: localStorage.getItem("token"),
          relationship: store.relationshipIndex,
          patient_name: store.name,
          patient_sex: store.sexIndex,
          patient_id_number: store.IDcode,
          patient_phone_number: store.telephone
        })
        .then(function (res) {
          if (res.code) {
            localStorage.setItem("is_patient", 1);
            that.$router.push({ name: "mine" });
          } else {
            that.$toast.text(res.msg);
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.协议 {
  label {
    margin: 0 !important;
    width: 100%;
  }
  p {
    position: absolute;
    margin-left: 40px;
    transform: translateY(-1px);
    a {
      color: #5a75f6;
    }
  }
  display: flex;
  align-items: center;
}
.tips {
  padding: 15px 18px;
  color: #999999;
}
/deep/.nut-checkbox input:checked {
  background-color: #5a75f6;
  border-color: #5a75f6;
}
.select {
  position: absolute;
  opacity: 0;
}
.nut-checkbox-size-small {
  justify-content: flex-start;
}
/deep/.nut-checkbox-ani {
  border-radius: 50%;
}
/deep/.nut-checkbox-label {
  display: block;
  padding-left: 5px;
}
/deep/.nav-right {
  color: #86b0ed;
}
/deep/.nut-actionsheet-panel {
  border-radius: 25px 25px 0 0;
  overflow: hidden;
}
/deep/.nut-picker {
  display: flex;
  flex-direction: column-reverse;
}
/deep/.nut-picker-control {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  transform: translateY(-10px);
  border: none;
}
/deep/.nut-picker-cancel-btn,
/deep/.nut-picker-confirm-btn {
  width: 140px;
  height: 36px;
  background-color: #5a75f6;
  border-radius: 8px;
  color: #fff;
}
/deep/.nut-picker-confirm-btn {
  background-color: transparent;
  font-size: 17px;
  color: #bababa;
}

.nut-navbar {
  border-bottom: 1px solid #f3f3f3;
}
#sex {
  text-align: right;
  height: 14px;
  width: 100px;
  font-size: 12px;
  color: #757575;
}
input {
  outline: none;
  border: none;
  text-align: right;
  color: #757575;
}
label {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  border-bottom: 1px solid rgba(227, 227, 227, 0.5);
  span {
    font-family: HiraginoSansGB-W3;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 12px;
    letter-spacing: 0px;
    color: #353535;
  }
  .head {
    position: relative;
    overflow: hidden;
    display: block;
    width: 43px;
    height: 43px;
    background-color: #ededed;
    border-radius: 50%;
  }
  div {
    input,
    span {
      font-size: 12px;
    }
  }
}
label:first-of-type {
  margin-top: 10px;
}
.margin_m {
  margin-bottom: 10px;
}
.right::after {
  position: absolute;
  right: 18px;
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  border: 2px solid #636363;
  border-bottom: 0;
  border-left: 0;
  transform: rotateZ(45deg);
}
</style>
