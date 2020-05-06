<template>
  <div class="xsgw-detail">
    <nut-navbar @on-click-back="$common.back" :rightShow="false">订单详情</nut-navbar>
    <div class="xsgw-detail-wrap">
      <div class="wait-wrap-pay">
        <span class="wait-pay">待支付</span>
        <span class="wait-pay-text">请您尽快支付</span>
      </div>
      <rec-address />
      <drug-info class="drug-info" />
      <div class="postcharge">
        <span>配送费</span>
        <span>快递：10.0</span>
      </div>
      <div class="oderNum">
        <p>
          <span>订单号：</span>
          <span>6512665222</span>
        </p>
        <p>
          <span>付款时间：</span>
          <span>2019-08-10</span>
        </p>
      </div>
    </div>
    <bottom-btn btn="完成支付" />
  </div>
</template>
<script>
import RecAddress from "../../../components/收货地址";
import DrugInfo from "../../../components/药品信息";
import BottomBtn from "../../../components/底部按钮";

export default {
  components: {
    DrugInfo,
    BottomBtn,
    RecAddress
  }
};
</script>

<style scoped lang="scss">
.xsgw-detail-wrap {
  padding: 0 24px 15px 25px;
  .wait-wrap-pay {
    margin: 16px auto 21px;
    display: flex;
    flex-direction: column;
    .wait-pay {
      font-size: 18px;
      font-weight: normal;
      color: #353535;
      margin-bottom: 14px;
    }
    .wait-pay-text {
      font-size: 13px;
      color: #5a5a5a;
    }
  }
  .drug-info {
    margin-top: 8px;
  }
  .postcharge {
    height: 52px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
  }
  .oderNum {
        height: 77px;
        background-color: #ffffff;
        border-radius: 5px;
        margin-top: 8px;
        color: #5a5a5a;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 8px;
        
        p {
          display: flex;
          width: 148px;
          justify-content: space-between;
        }
  }
}
</style>