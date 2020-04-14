<template>
  <div class="包裹">
    <button @click="click">{{ content }}</button>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "确定"
    }
  },
  data () {
    return {};
  },
  methods: {
    click () {
      this.$emit("click-btn");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.包裹 {
  padding: 27px 35px;
  button {
    width: 100%;
    height: 40px;
    background-color: #5a75f6;
    border-radius: 20px;
    border: none;
    color: #fff;
    outline: none;
  }
}
</style>
