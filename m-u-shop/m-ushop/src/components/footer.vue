<template>
  <div>
    <router-view></router-view>

    <div class="footer">
      <router-link  to="/home" active-class="active">
        <a ref="footIndex" @click="indexTouch">
          <img class="foicon1" :src="list.footIndex" alt="#" />
          <i>首页</i>
        </a>
      </router-link>
      <router-link to="/cart" active-class="active">
        <a ref="footCart" @click="cartTouch">
          <img class="foicon2" :src="list.footCart" alt="#" />
          <i>购物车</i>
        </a>
      </router-link>
      <router-link to="/mine" active-class="active">
        <a ref="footMine" @click="footTouch">
          <img class="foicon3" :src="list.footMine" alt="#" />
          <i>我的</i>
        </a>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {
        footIndex: require("../assets/images/footericon2_03.jpg"),
        footCart: require("../assets/images/footericon_05.jpg"),
        footMine: require("../assets/images/footericon_07.jpg"),
        footMineActive: require("../assets/images/footericon2_07.jpg"),
        footCartActive: require("../assets/images/footericon3_05.jpg"),
        footIndexActive: require("../assets/images/footericon_03.jpg")
      }
    };
  },
  methods: {
    indexTouch() {
      console.log(this.$refs.footIndex.parentNode.className=='router-link-exact-active active')
      
    },
    cartTouch() {
      console.log(this.$refs.footCart.parentNode.className);
    },
    footTouch() {
      console.log(this.$refs.footMine.parentNode.className);
    }
  }
};
</script>
<style lang="" scoped>
.footer {
  height: 1.2rem;
  background: #fff;
  border-top: 1px solid #ebebeb;
  padding: 0 0.67rem 0 0.49rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  bottom: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 7.5rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.footer a {
  margin-top: 0.17rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.footer a .foicon1 {
  width: 0.51rem;
  height: 0.56rem;
}
.footer a .foicon2 {
  width: 0.57rem;
  height: 0.57rem;
}
.footer a .foicon3 {
  width: 0.51rem;
  height: 0.59rem;
}
.footer a i {
  font: 0.2rem/0.41rem "微软雅黑";
  color: #808080;
}
.footer .active i {
  color: #ef6b16;
}
</style>