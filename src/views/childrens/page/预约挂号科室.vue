<template>
  <div class="yyghks">
    <nut-navbar @on-click-back="back" :rightShow="false">选择科室</nut-navbar>
    <div class="content">
      <ul>
        <li class="hospital_list">
          <div class="hospital_img">
            <img :src="$api + info.logo_url" />
          </div>
          <div class="hospital_info">
            <h4>{{ info.name }}</h4>
            <p>{{ info.address }}</p>
            <p class="home">
              <span class="level">{{ info.hospital_grade }}</span>
              <router-link class="yyzy" tag="span" :to="'/yyzy'">医院主页 ></router-link>
            </p>
          </div>
        </li>
      </ul>
      <div class="search">
        <input placeholder="搜索医生、科室" />
        <img class="sc" src="../../../assets/icons/search.png" />
      </div>
      <div class="main">
        <div id="title">
          <ul>
            <li
              :class="index == select_index ? 'selected' : ''"
              v-for="(item, index) in department"
              @click="change(index)"
              :key="index"
            >{{ item.name }}</li>
          </ul>
        </div>
        <div id="content">
          <!-- <ul v-for="item in department">
						<a href="select_doctor.html" v-for="i in item.secondary_department">
          <li>-->
          <ul v-for="(item, index) in department" v-show="select_index == index" :key="index">
            <router-link
              tag="a"
              :to="'/xzys'"
              v-for="(i, index) in item.secondary_department"
              :key="index"
            >
              <li>{{ i.name }}</li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select_index: 0,
      department: [],
      info: ""
    };
  },
  created() {
    const that = this;
	
	this.$post(
		'/hospital/department'
	).then(res=>{
		if (res.code) {
		  that.department = res.list;
		}
	})
	this.$post(
		'/hospital/institution/info',
		{
			institution_id: that.$route.params.id
		}
	).then(res=>{
		if (res.code) {
		  that.info = res.info;
		  that.$store.commit("Public/SET_STATE", {
			institution_info: res.info
		  });
		}
	})
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    change(e) {
      this.select_index = e;
    }
  }
};
</script>
<style lang="scss" scoped>
.yyghks {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nut-navbar {
  height: 44px;
  /deep/h3 {
    font-size: 17px;
    font-weight: 500;
  }
}
.address {
  font-size: 14px;
  padding-right: 10px;
  flex-shrink: 0;
}

.filter {
  height: 40px;
  display: flex;
  margin-top: 10px;
  background: #fff;
}

.filter > div {
  width: 50%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-bottom: 1px solid #eeeeee;
}

.filter > div:first-child {
  border-right: 1px solid #eeeeee;
}

.filter > div > i {
  height: 10px;
  width: 10px;
  border: 5px solid transparent;
  border-top-color: #b3b3b3;
  transform: translateY(2px);
  margin-left: 5px;
}

.hospital_list {
  display: flex;
  align-items: center;
  padding: 22px 15px;
  background-color: white;
  margin-top: 2px;
}

.hospital_img {
  width: 80px;
  height: 66px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-right: 10px;
  margin-left: 3px;
}
.hospital_img img {
  width: 100%;
  height: 100%;
}

.hospital_info {
  width: 100%;
}

.hospital_info h4 {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  color: #353535;
}

.hospital_info p {
  display: flex;
  margin-top: 3px;
  font-size: 12px;
  position: relative;
  color: #a8a4a4;
}
.yyzy {
  margin-right: 2px;
  font-size: 12px;
}

.level {
  display: flex;
  padding: 1px 5px;
  font-size: 10px;
  padding-top: 2px;
  background-color: #15d187;
  border-radius: 3px;
  color: #fff;
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
  right: 0;
}

.mui-table-view {
  margin-top: 0px !important;
}

.home {
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

ul,
li {
  list-style: none;
  padding: 0;
  font-size: 12px;
}

#title {
  background: #f1f1f1;
}

#content {
  background: #fff;
}

.main {
  display: flex;
  margin-top: 1px;
}

#title {
  width: 29%;
  justify-content: center;
}

#content {
  width: 70%;
}

#title,
#content {
  display: flex;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
}

ul {
  width: 100%;
  margin: 0;
}
.main {
  height: 100%;
}
.main li {
  padding: 10px 0;
}

#title li {
  text-align: left;
  padding-left: 18px;
}

#title li.selected {
  background: #fff;
}

#content {
  display: flex;
  flex-direction: column;
}

#content ul {
  flex-shrink: 0;
  height: 100%;
}

#content {
  display: flex;
  flex-direction: column;
}

#content ul {
  height: 100%;
  flex-shrink: 0;
}

#content li {
  padding-left: 35px;
}

#content a {
  color: #333333;
}
.search {
  border-top: 7px solid #f7f7f7;
  display: flex;
  background-color: white;
  padding: 15px 10px 16px 10px;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
  }
  img {
    width: 13px;
    height: 13px;
    position: absolute;
    left: 35px;
  }
  input {
    margin-left: 9px;
    height: 29px;
    background-color: #ebecf0;
    border-radius: 15px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    padding-left: 40px;
  }
}
</style>
