<template>
  <div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in list">
          <a class="clearfix" @click="toDetails(index)">
            <img :src="item.imgSrc" alt="商品" />
            <div class="fl">
              <h3>
                {{item.goodsName1}}
                <br />
                {{item.goodsName2}}
              </h3>
              <p>
                <i>￥</i>{{item.goodsPrice}}
              </p>
              <span>{{item.goodsSpan}}</span>
            </div>
          </a>
        </li>
        <!-- <li>
          <a class="clearfix" @click="select(index)">
            <img src="../../assets/images/pic.jpg" alt="商品" />
            <div class="fl">
              <h3>滋源修护滋养洗发香乳 520ml*2瓶</h3>
              <p>
                <i>￥</i>123.00
              </p>
              <span>3625条评论</span>
            </div>
          </a>
        </li>
        <li>
          <a class="clearfix" @click="select(index)">
            <img src="../../assets/images/pic.jpg" alt="商品" />
            <div class="fl">
              <h3>
                阿道夫修护滋养洗发香乳 洗发水 持久留香
                <br />520ml*2瓶 旗舰店正品焕新升级款
              </h3>
              <p>
                <i>￥</i>123.00
              </p>
              <span>3625条评论</span>
            </div>
          </a>
        </li>
        <li>
          <a class="clearfix" @click="select(index)">
            <img src="../../assets/images/pic.jpg" alt="商品" />
            <div class="fl">
              <h3>滋源修护滋养洗发香乳 520ml*2瓶</h3>
              <p>
                <i>￥</i>123.00
              </p>
              <span>3625条评论</span>
            </div>
          </a>
        </li>-->
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
          goodsName1: "阿道夫修护滋养洗发香乳 洗发水 持久留香",
          goodsName2: "520ml*2瓶 旗舰店正品焕新升级款",
          goodsPrice: "123.00",
          goodsSpan: "3625条评论",
          imgSrc: require("../../assets/images/pic.jpg")
        },
        {
          id: 2,
          goodsName1: "滋源修护滋养洗发香乳 520ml*2瓶",
          goodsName2: "",
          goodsPrice: "123.00",
          goodsSpan: "36条评论",
          imgSrc: require("../../assets/images/pic.jpg")
        },
        {
          id: 3,
          goodsName1: "阿道夫修护滋养洗发香乳 洗发水 持久留香",
          goodsName2: "520ml*2瓶 旗舰店正品焕新升级款",
          goodsPrice: "123.00",
          goodsSpan: "3625条评论",
          imgSrc:require("../../assets/images/pic.jpg")
        },
        {
          id: 4,
          goodsName1: "滋源修护滋养洗发香乳 520ml*2瓶",
          goodsName2: "",
          goodsPrice: "123.00",
          goodsSpan: "3625条评论",
          imgSrc: require("../../assets/images/pic.jpg")
        }
      ]
    };
  }
};
</script>
<style lang="" scoped>
.list ul li {
  height: 2.07rem;
  margin: 0.28rem 0.25rem 0 0.23rem;
  border-bottom: 1px solid #d1d1d1;
}
.list ul li a {
  display: block;
}
.list ul li a img {
  float: left;
  width: 1.47rem;
  height: 1.6rem;
  padding: 0.29rem 0 0 0.2rem;
}
.list ul li a .fl {
  height: 2.07rem;
  margin-left: 0.43rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.list ul li a .fl h3 {
  font: 0.26rem/0.37rem "微软雅黑";
  color: #343434;
}
.list ul li a .fl p {
  font: 0.3rem/0.53rem Arial;
  color: #ed3638;
}
.list ul li a .fl p i {
  font-size: 0.24rem;
  font-family: "微软雅黑";
}
.list ul li a .fl span {
  font: 0.26rem/0.41rem "微软雅黑";
  color: #9b9b9b;
}
</style>