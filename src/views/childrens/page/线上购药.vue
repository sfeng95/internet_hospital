<template>
  <div>
    <nut-navbar @on-click-back="warntips" :rightShow="false">线上购药</nut-navbar>
    <div class="xsgw-wrap">
      <div class="xsgw-user">
        <div class="xsgw-user-sup">
          <div>
            <img src="../../../assets/icons/position.png" class="xsgw-position-img" />
            <span class="name">张晓</span>
          </div>
          <div class="xsgw-tel">185***3987</div>
        </div>
        <div class="xsgw-position">
          <span class="position">重庆四渝北区保利香雪17栋112-5</span>
          <img src="../../../assets/icons/goright.png" class="goright" />
        </div>
      </div>
      <drug-info class="xsgw-drug-info" />
      <div class="xsgw-tcharge">
        <div class="charge">
          <span>配送费</span>
          <span>快递费：10.0</span>
        </div>
        <div class="total">
          <span>共一件，合计：</span>
          <span class="total-price">147.56</span>
        </div>
      </div>
    </div>
    <bottom-btn />

    <nut-dialog
      title="温馨提示"
      class="changedefault"
      :visible="dialogShow"
      @cancel-btn-click="stillPay"
      @ok-btn-click="cancelPay"
      cancelBtnTxt= "继续支付" 
      okBtnTxt= "取消支付"
    >
      <a
        href="javascript:;"
        @click="dialogShow=false"
        :noCancelBtn="true"
      >您的订单已生成，请在30分钟内完成支付，否则系统将为您自动取消订单</a>
    </nut-dialog>   
  </div>
</template>
<script>
import DrugInfo from "../../../components/药品信息";
import BottomBtn from "../../../components/底部按钮";

export default {
  components: {
    DrugInfo,
    BottomBtn
  },
  data() {
    return {
      dialogShow:true
    };
  },
  methods: {
    warntips() {
      this.dialogShow = true;
    },
    stillPay() {
      this.dialogShow=false;
      console.log('stillpay');
    },
    cancelPay() {
      this.dialogShow=false;
      console.log('cancelpay');
      this.$common.back;
    }

  }
};
</script>

<style scoped lang="scss">
.xsgw-wrap {
  padding: 0 24px 0 25px;
  .xsgw-user {
    background-color: #fff;
    margin: 16px 0 15px 0;
    border-radius: 5px;
    padding: 27px 16px;

    &-sup {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 28px;

      & div:first-child {
        display: flex;
        align-items: center;
      }
      img {
        width: 14px;
        height: 17px;
      }
      .name {
        font-size: 15px;
        font-weight: bold;
        padding-left: 14px;
      }
      .xsgw-tel {
        color: #353535;
        font-size: 13px;
        padding-right: 39px;
      }
    }

    .xsgw-position {
      .position {
        color: #888;
        font-size: 12px;
      }
      .goright {
        float: right;
        width: 12px;
        height: 23px;
      }
    }
  }
  .xsgw-tcharge {
    margin: 15px 0;
    border-radius: 5px;
    background-color: #fff;
    font-size: 14px;
    color: #5a5a5a;
    padding: 0 16px;

    .charge {
      height: 47px;
      border-bottom: 1px solid #f3f3f3;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .total {
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &-price {
        color: #ff2400;
      }
    }
  }
}
.changedefault /deep/ {
  .nut-dialog-content a {
    font-size: 13px;
    line-height: 24px;
    color: #5a5a5a;
  }
  .nut-dialog-btn {
    height: 32px;
    border-radius: 16px;
    font-size: 15px;
    color: #fff;
  }
  .nut-dialog-cancel {
    margin-left: 34px; 
    margin-right: 13px;
    background-color: #5a75f6;
  }
  .nut-dialog-ok {
    margin-left: 13px; 
    margin-right: 34px;
    background: #dadada;
  }
}
</style>