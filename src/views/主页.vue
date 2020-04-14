<template>
  <div class="包裹">

	<router-view class="内容" @monitor = 'change'/>
    <nut-tabbar @tab-switch="tabSwitch3"
                :tabbarList="tabList3"
                :bottom="true"></nut-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabList3: [
        {
          tabTitle: "首页",
          curr: true,
          icon:
            "http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg",
          activeIcon:
            "http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg",
          href_: "index"
        },
        {
          tabTitle: "我的",
          curr: false,
          icon:
            "http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg",
          activeIcon:
            "http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg",
          href_: "mine"
        }
      ]
    };
  },
  created () { },
  methods: {
    tabSwitch3: function (value) {
	  this.$router.replace({name:value.href_})
    },
	change(data){
		for(let i in this.tabList3){
			this.tabList3[i].curr = false;
		}
		switch (data){
			case 'index':
				this.tabList3[0].curr = true
				break;
			case 'mine':
			this.tabList3[1].curr = true
				break;
			default:
				break;
		}
		console.info(data)
	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.包裹 {
  width: 100%;
  height: 100%;
  .内容 {
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 56px;
  }
}
</style>
