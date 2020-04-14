<template>
  <div class="yyzy">
    <nut-navbar @on-click-back="$common.back"
                :rightShow="false">医院主页</nut-navbar>
    <div class="content">
      <img :src="$api + info.logo_url"
           width="100%" />
      <h4>医院介绍</h4>
      <p v-html="info.sketch"></p>
      <h4>来院路线</h4>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    info () {
      return this.$store.state.Public.institution_info;
    }
  }
};
</script>
<style lang="scss" scoped>
h4:before {
  content: "";
  display: block;
  width: 3px;
  height: 13px;
  background: #10a1fe;
  border-radius: 3px;
}
h4 {
  display: flex;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #353535;
  align-items: center;
  margin: 0;
  padding: 15px;
}
html,
body {
  height: 100%;
}
.content {
  height: 100%;
  background: #fff;
}
.content p {
  padding: 0 15px;
  font-size: 12px;
  text-indent: 2em;
}
.nut-navbar {
  height: 44px;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
</style>
