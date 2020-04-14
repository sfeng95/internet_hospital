<template>
  <div class="rc-cropper"
       v-if="originImg">
    <div class="rc-cropper__canvasCrop2">
      <img :src="originImg"
           v-if="!cropper" />
      <canvas :id="originImg"
              ref="canvas" />
      <span @click="sureCropper()"
            v-if="cropper"
            class="el-icon-check">完成 <nut-icon class="top"
                  type="top"
                  color="#fff"> </nut-icon></span>
    </div>
  </div>
</template>
<script>
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
export default {
  name: "rc-cropper2",
  props: {
    originImg: {
      required: true
    },
    previewImg: {
      type: String
    }
  },
  data () {
    return {
      cropper: null,
      croppShow: false
    };
  },
  mounted () {
    this.drawImg();
  },
  methods: {
    // 在canvas上绘制图片
    drawImg () {
      const _this = this;
      this.$nextTick(() => {
        let canvas = document.getElementById(this.originImg);
        if (canvas) {
          let ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          let img = new Image();
          img.crossOrigin = "Anonymous";
          img.src = this.originImg;
          canvas.width = document.body.clientWidth;
          canvas.height = (img.height * document.body.clientWidth) / img.width;

          img.onload = function () {
            ctx.drawImage(
              img,
              0,
              0,
              canvas.width,
              (img.height * document.body.clientWidth) / img.width
            );
            _this.initCropper();
          };
        }
      });
    },
    // 显示裁剪框
    initCropper () {
      this.croppShow = true;
      this.cropper = new Cropper(this.$refs.canvas, {
        checkCrossOrigin: true,
        viewMode: 1,
        zoomOnWheel: false, // 是否可以通过移动鼠标来放大图像
        aspectRatio: 1 / 1,
        ready: () => {
          this.cropper.setData({
            x: 0,
            y: 0,
            width: 300,
            height: 300
          });
        }
      });
      // this.cropper = cropper
    },
    // 确认裁剪
    sureCropper () {
      let _this = this;
      const cropParam = this.cropper.getData();
      this.cropper.getCroppedCanvas().toBlob(function (blob) {
        let oFileReader = new FileReader();
        oFileReader.onloadend = function (e) {
          let base64 = e.target.result;
          _this.$emit("getCropImg", base64, cropParam);
        };
        oFileReader.readAsDataURL(blob);
      }, "image/jpeg");
    }
  }
};
</script>
<style>
.剪切 {
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.rc-cropper {
  display: flex;
  height: 100%;
  align-items: center;
  align-content: center;
}
.el-icon-check {
  position: fixed;
  color: #fff;
  top: 5px;
  z-index: 999;
  right: 0;
  font-size: 14px;
  padding: 5px 20px;
  background: #3399ff;
  display: flex;
  align-items: center;
  border-radius: 20px 0 0 20px;
}
.top {
  transform: rotateZ(90deg);
  margin-left: 10px;
}
</style>
