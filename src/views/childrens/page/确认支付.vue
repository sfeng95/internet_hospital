<template>
  <div class="surepay">
      <nut-navbar @on-click-back="$common.back" :rightShow="false">确认支付</nut-navbar>
      <div class="drugitems">
          <div class="drugitems-yfname">医治云康大药房</div>
          <ul class="druglists">
              <li class="druglist"><span>爱玲大 媲美莫斯乳膏</span><span>￥36.00</span></li>
              <li class="druglist"><span>爱玲大 媲美莫斯乳膏</span><span>￥36.00</span></li>
          </ul>
          <div class="totle"><span>总计：</span><span>￥72.00</span></div>
      </div>
      <div class="payhander">
          <div class="choose">选择支付方式</div>
          <ul class="payhander-lists">
              <li class="wxpay list"><img src="../../../assets/icons/wx.png" class="icon">
              <span class="payname ">微信支付</span>
              <img src="../../../assets/icons/blue.png" class="choose"></li>
              <li class="zfbpay list"><img src="../../../assets/icons/zfb.png" class="icon">
              <span class="payname">支付宝支付</span>
              <img src="../../../assets/icons/tuoyuan.png" class="choose"></li>
              <li class="ysfpay list"><img src="../../../assets/icons/ysf.png" class="icon">
              <span class="payname">云闪付</span>
              <img src="../../../assets/icons/tuoyuan.png" class="choose"></li>
          </ul>
      </div>
      <div class="makesure">确认支付</div>
  </div>
</template>

<script>
export default {
    // name: 'SurePay'

}
</script>

<style lang="scss" scoped>
.drugitems {
    color: #5a5a5a;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .1);
    font-size: 14px;
        line-height: 50px;
    &-yfname {
        // line-height: 46px;
        padding: 0 16px 0 15px;
        border-bottom: 1px solid #f3f3f3;
    }

    .druglist {
        border-bottom: 1px solid #f3f3f3;
        padding: 0 16px 0 15px;
        display: flex;
        justify-content: space-between;

        & span:last-child {
            color: #ff2400;
        }
        // &:last-child {
        //     border-bottom: none;
        // }
    }
    .totle {
        text-align: right;
        padding-right: 16px;
        font-weight: bold;
    }
}
.payhander {
    .choose {
        height: 49px;
        line-height: 49px;
        font-size: 17px;
        font-weight: normal;
        color: #353535;
        padding: 0 16px 0 15px;
    }
    &-lists {
        background-color: #fff;
        padding: 0 16px 0 15px;

        .list {
            height: 47px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
                width: 17px;
                height: 17px;
            }
            span {
                padding-left: 9px;
                flex-grow: 1;
            }
            // .choose {
            //     align-self: flex-end;
            // }
        }
    }
}
.makesure {
    margin: 28px 33px 0;
    background-color: #5a75f6;
    border-radius: 19px;
    height: 38px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 38px;
}
</style>