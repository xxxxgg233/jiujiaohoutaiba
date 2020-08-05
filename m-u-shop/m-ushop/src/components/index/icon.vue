<template>
  <div>
    <div class="icon">
      <ul>
        <li v-for="item in list" :key="item.key">
          <a :href="item.hhref">
            <img :src="item.imgSrc" alt />
            <p>{{item.msg}}</p>
          </a>
        </li>
        <!-- <li><a href="#">
                    <img src="images/icon_2.jpg" alt="">
                    <p>积分商城</p>
                </a></li>
                <li><a href="#">
                    <img src="images/icon_3.jpg" alt="">
                    <p>联系我们</p>
                </a></li>
                <li><a href="class.html">
                    <img src="images/icon_4.jpg" alt="">
                    <p>商品分类</p>
        </a></li>-->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          imgSrc: require("../../assets/images/icon_1.jpg"),
          msg: "限时抢购",
          hhref:'#'
        },
        {
          id: 2,
          imgSrc: require("../../assets/images/icon_2.jpg"),
          msg: "积分商城",
          hhref:'#'
        },
        {
          id: 3,
          imgSrc: require("../../assets/images/icon_3.jpg"),
          msg: "联系我们",
          hhref:'#'
        },
        {
          id: 4,
          imgSrc: require("../../assets/images/icon_4.jpg"),
          msg: "商品分类",
          hhref:'/class'
        }
      ]
    };
  }
};
</script>
<style lang="" scoped>
.icon {
  height: 1.79rem;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  padding: 0 0.48rem 0 0.38rem;
}
.icon ul {
  padding-top: 0.31rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.icon ul li a {
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
.icon ul li a img {
  width: 0.64rem;
  height: 0.62rem;
}
.icon ul li a p {
  font: 0.28rem/0.68rem "微软雅黑";
  color: #686868;
}
</style>