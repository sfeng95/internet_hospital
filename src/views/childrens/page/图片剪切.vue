<template>
  <div class="剪切">
    <nut-navbar @on-click-back="this.$common.back"
                :leftShow="true"
                :rightShow="false">头像裁剪</nut-navbar>
    <cropper @getCropImg="getCropImg(arguments)"
             :originImg="slide2.oriUrl"
             :previewImg="slide2.preUrl" />
  </div>
</template>

<script>
import Cropper from "../../../components/cropper.vue";

export default {
  components: {
    Cropper
  },
  data () {
    return {
      slide2: {
        oriUrl: this.$store.state.Public.img_url, // 原图
        preUrl: this.$store.state.Public.img_url // 裁剪后的预览图片，初始化为原图
      },
      cropData: null
    };
  },
  methods: {
    getCropImg (argument) {
      this.slide2.preUrl = argument[0];
      this.cropData = argument[1];
      this.$store.commit("Info/SET_STATE", {
        headshot: argument[0]
      });
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.nut-navbar .nav-left .back .back-icon {
  filter: drop-shadow(300px 0 0 #fff);
  transform: translateX(-300px);
}
.nut-navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 100;
  color: #fff;
}
</style>
