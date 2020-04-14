<template>
  <div class="包裹">
    <router-link to class="搜索框">
      <img class="search" src="../assets/icons/search.png" />
      <div>
        <input placeholder="搜索医生、医院、科室、疾病" />
        <i>
          <img src="../assets/icons/tz.png" alt />
        </i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search {
  height: 13px;
  position: absolute;
  left: 24px;
}
.搜索框 {
  display: flex;
  align-items: center;
  div {
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 6px 10px;
    input {
      height: 29px;
      background-color: #ebecf0;
      border-radius: 15px;
      border: none;
      width: calc(100% - 38px);
      box-sizing: border-box;
      padding: 0 31px;
    }
    i {
      padding: 0 5px;
      img {
        padding-left: 10px;
        width: 18px;
        height: 21px;
      }
    }
  }
}
</style>
