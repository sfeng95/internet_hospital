<template>
  <div class="yygh">
    <div class="cengji">
      <nut-navbar @on-click-back="back" :rightShow="false">选择医院</nut-navbar>
      <div class="search">
        <span>重庆</span>
        <nut-icon type="down"></nut-icon>

        <input placeholder="搜索医生、医院、科室、疾病" />
        <img class="sc" src="../../../assets/icons/search.png" />
      </div>
      <div class="content">
        <div class="content1" @click="visible.isVisible1 = true">
          <a>{{ menuTitle }}</a>
          <i></i>
        </div>

        <div class="content2" @click="visible.isVisible2 = true">
          <a>{{ menuTitle2 }}</a>
          <i></i>
        </div>
      </div>
    </div>
    <nut-menu
      :isVisible="visible.isVisible1"
      :list="list1"
      type="simple"
      @close="switchMenu('isVisible1', 1)"
      @choose="chooseMenu"
    ></nut-menu>
    <nut-menu
      :isVisible="visible.isVisible2"
      :list="list2"
      type="simple"
      @close="switchMenu('isVisible2', 1)"
      @choose="chooseMenu1"
    ></nut-menu>

    <div class="show">
      <ul>
        <router-link
          :to="{
            name: 'yyghks',
            params: {
              id: item.i_id
            }
          }"
          v-for="(item, index) in hospital_list"
          :key="index"
        >
          <li class="hospital_list">
            <div class="hospital_img">
              <img :src="$api + item.logo_url" height="100%" />
            </div>
            <div class="hospital_info">
              <h4>
                {{ item.name }}
                <span class="hospital_address">{{ item.juli }}m</span>
              </h4>
              <p>
                <span class="level">{{ item.hospital_grade }}</span>
                {{ item.address }}
              </p>
              <p>
                <span class="tags">妇科</span>
                <span class="tags">内分泌科</span>
                <span class="tags">脑外科</span>
              </p>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hospital_list: [],
      num: 1,
      titlenum: 1,
      max: 6,

      visible: {
        isVisible1: false,
        isVisible2: false
      },
      menuTitle: "",
      menuTitle2: "",

      list1: [
        {
          id: 1,
          text: "综合排序",
          selected: true
        },
        {
          id: 1,
          text: "离我最近",
          selected: false
        }
      ],
      list2: [
        {
          id: 1,
          text: "筛选",
          selected: true
        },
        {
          id: 1,
          text: "最新上架",
          selected: false
        }
      ]
    };
  },
  created() {
    const that = this;
    this.menuTitle = this.list1[0].text;
    this.menuTitle2 = this.list2[0].text;
	this.$post(
		'hospital/institution/list',
		{
			grade: 1,
			page: 1
		}
	).then(res=>{
		if (res.code) {
		  that.hospital_list = res.info.data;
		}
	})
  },
  methods: {
    back() {
      this.$router.push({ path: "/index" });
    },

    switchMenu(param, num) {
      this.num = num;
      this.titlenum = param.split("isVisible")[1];
      for (let key in this.visible) {
        if (key !== param) {
          this.visible[key] = false;
        }
      }
      Array.from(document.querySelectorAll(".list")).forEach(item => {
        item.style.zIndex = 0;
      });
      if (!this.visible[`${param}`]) {
        document.querySelector(".list" + this.num).style.zIndex = 9999;
      }
      this.visible[`${param}`] = !this.visible[`${param}`];
    },
    chooseMenu(item, index) {
      this.switchMenu("isVisible1", 1);
      this.list1.map((value, key) => (value.selected = false));
      this.$set(this.list1[index], "selected", true);
      this.menuTitle = item.text;
    },
    chooseMenu1(item, index) {
      this.switchMenu("isVisible2", 1);
      this.list2.map((value, key) => (value.selected = false));
      this.$set(this.list2[index], "selected", true);
      this.menuTitle2 = item.text;
    },

    reset(list) {
      this.$refs[`title${this.titlenum}`].innerText = "menu";
    },
    ok(list) {
      let arr = [];
      list.forEach((item, index) => {
        if (item.selected) {
          arr.push(item.text);
        }
      });

      if (arr.length) {
        this.$refs[`title${this.titlenum}`].innerText = arr.join();
      }
    },
    maxTip() {
      alert("超过了最大选择数");
    }
    //menu2
  }
};
</script>
<style lang="scss" scoped>
.yygh {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/deep/.nut-icon {
  width: 10px;
}
.hospital_img {
  width: 90px;
  height: 65px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-right: 10px;
  display: flex;
  overflow: hidden;
  justify-content: center;
}
.hospital_list {
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #f5f5f5;
}
.hospital_info {
  width: 100%;
}

.hospital_info h4 {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  color: #353535;
  font-family: "黑体";
}

.hospital_info p {
  display: flex;
  margin-top: 8px;
  font-size: 10px;
  position: relative;
  color: rgb(119, 114, 114);
  line-height: 15px;
}
.level {
  font-size: 6px;
  background-color: #15d187;
  border-radius: 3px;
  padding: 0 5px;
  color: #fff;
  margin-right: 4px;
  display: block;
  height: 15px;
}
.tags {
  margin-right: 3px;
  font-size: 10px;
  padding: 0 10px;
  border: solid 1px #cfcfcf;
  border-radius: 14px;
}

.hospital_address {
  position: absolute;
  right: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
}

.cengji {
  position: relative;
  z-index: 9999;
}
.nut-navbar {
  height: 44px;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
.search {
  border-top: 2px solid #f5f5f5;
  display: flex;
  background-color: white;
  padding: 11px 15px 13px 15px;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 14px;
  }
  img {
    width: 13px;
    height: 13px;
    position: absolute;
    left: 80px;
  }
  input {
    margin-left: 9px;
    height: 29px;
    background-color: #ebecf0;
    border-radius: 15px;
    border: none;
    width: calc(100% - 55px);
    box-sizing: border-box;
    padding: 0 31px;
  }
}

.content {
  position: relative;
  background-color: white;

  display: flex;
  font-size: 13px;
  color: rgb(119, 114, 114);
  z-index: 9999;
  border-top: 7px solid #f5f5f5;
  i {
    height: 10px;
    width: 10px;
    border: 5px solid transparent;
    border-top-color: #b3b3b3;
    transform: translateY(2px);
    margin-left: 5px;
    position: relative;
    top: 16px;
  }
  a {
    position: relative;
    top: 6px;
  }

  .content1 {
    text-align: center;
    height: 35px;
    width: 50%;
  }

  .content2 {
    text-align: center;
    height: 35px;
    width: 50%;
  }
}
.show {
  background-color: white;
  height: 100%;
  overflow-y: auto;
  width: 100%;
}
/deep/.nut-menu .nut-menu-panel .menu-simple ul {
  min-height: 0;
}
</style>
