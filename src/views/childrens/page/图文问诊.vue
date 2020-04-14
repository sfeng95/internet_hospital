<template>
  <div class="twwz"></div>
</template>
<script>
export default {
  data () {
    return {};
  },
  methods: {
    chooseItem (itemParams) {
      this.sex = itemParams.name;
    },
    back () {
      this.$router.push({ path: "/jswzchoose" });
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
.c {
  width: 100%;
  height: 100px;
  background-color: white;
}
</style>
