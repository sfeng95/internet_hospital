<template>
  <div class="rec-address">
    <div class="address-info">
      <div class="add-tit">
        <img src="../assets/icons/location.png">
        <span>收货地址</span>
      </div>
      <div class="user">
        <span class="user-name">{{user.username}}</span>
        <span class="user-tel">{{user.usertel}}</span>
      </div>
      <div class="add-detail">{{user.useradd}}</div>
    </div>
    <div class="goright">
      <img src="../assets/icons/goright.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "RecAddress",
  props: {
      user : {
          default: {username: "陈某某",usertel: "15823690002",useradd: "重庆市渝北区广告产业园13东"},
          type: Object
      }
  }
};
</script>

<style lang="scss" scoped>
.rec-address {
    background-color: #fff;
    border-radius: 5px;
    padding-left: 8px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .add-tit {
        padding: 14px 0 17px;
        display: flex;
        align-items: center;

        img {
            width: 14px;
            height: 17px;
        }
        span {
            font-size: 15px;
            font-weight: bold;
            color: #353535;
            padding-left: 8px;
        }
    }
    .user {
        font-size: 12px;
        color: #888888;
        line-height: 25px;
    }
    .add-detail {
        font-size: 12px;
        color: #888888;
        line-height: 25px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .goright {
        padding-right: 18px;
        transform: translate(0, 20px);

        img {
            width: 12px;
	        height: 23px;
        }
    }
}
</style>