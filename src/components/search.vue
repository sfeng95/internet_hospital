<template>
  <div class="sc">
    <input placeholder="输入您要找到的专家" />
    <img class="s" src="../assets/icons/search.png" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.sc {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  img {
    width: 13px;
    height: 13px;
    position: absolute;
    left: 115px;
  }
  input {
    margin-left: 9px;
    height: 29px;
    background-color: #ebecf0;
    border-radius: 15px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    padding: 0 31px;
  }
}
</style>