<template>
  <div>
    <div class="content" id="content">
      <div class="title clearfix">
        <!-- <a class="active first" href="">热门推荐</a>
                <a href="">发现好货</a>
                <a href="">只看专场</a>
        <a href="">只看商品</a>-->
        <a
          @click="select(index)"
          :class="[index==num ?'active':'' ]"
          v-for="(item,index) in titleArr"
          :key="item.id"
        >{{item}}</a>
      </div>
      <div class="goods goods1" v-for="goodsItem in list[num]" :key="goodsItem.id">
        <a @click="toDetails(goodsItem.id)">
          <img v-bind:src="goodsItem.imgSrc" alt="shop4" />
          <div class="fl">
            <h3>{{goodsItem.title}}</h3>
            <p>
              <i>￥</i>
              {{goodsItem.price}}
            </p>
            <span>{{goodsItem.sold}}</span>
            <br />
            <em>立即抢购</em>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      titleArr: ["热门推荐", "发现好货", "只看专场", "只看商品"],
      list: [
        [
          {
            id: 1,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "雅诗兰黛染发膏60ml111",
            price: "123.00",
            sold: "已售800件"
          },
          {
            id: 2,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "雅诗兰黛染发膏60ml222",
            price: "123.00",
            sold: "已售800件"
          },
          {
            id: 3,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "雅诗兰黛染发膏60ml333",
            price: "123.00",
            sold: "已售800件"
          }
        ],
        [
          {
            id: 1,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "第二页的染发膏60ml111",
            price: "1684.00",
            sold: "已售800件"
          },
          {
            id: 2,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "第二页的染发膏60ml222",
            price: "3574.00",
            sold: "已售800件"
          },
          {
            id: 3,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "第二页的染发膏60ml333",
            price: "981.00",
            sold: "已售800件"
          }
        ],
        [
          {
            id: 1,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "第三页的染发膏60ml哦1",
            price: "156.00",
            sold: "已售800件"
          },
          {
            id: 2,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "第三页的染发膏60ml哦2",
            price: "984.00",
            sold: "已售800件"
          },
          {
            id: 3,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "第三页的染发膏60ml哦3",
            price: "354.00",
            sold: "已售800件"
          }
        ],
        [
          {
            id: 1,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "已经是第四页了哦1",
            price: "999.00",
            sold: "已售800件"
          },
          {
            id: 2,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "已经是第四页了哦2",
            price: "777.00",
            sold: "已售800件"
          },
          {
            id: 3,
            imgSrc: require("../../assets/images/shop_4.jpg"),
            title: "已经是第四页了哦3",
            price: "666.00",
            sold: "已售800件"
          }
        ]
      ]
    };
  },
  methods: {
    select(index) {
      this.num = index;
      console.log(this.num);
    },
  }
};
</script>
<style lang="" scoped>
.content {
  margin-top: .28rem;
  background: #fff;
  padding: .2rem;
  margin-bottom: 1.2rem;
}
.content .title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  padding-bottom: .2rem;
}
.content .title a {
  display: block;
  width: 1.76rem;
  height: .68rem;
  font: 0.28rem/0.68rem "微软雅黑";
  color: #212121;
  text-align: center;
  border: 0.01rem solid #e4e4e4;
  border-left: none;
}
.content .title .first {
  border-left: 0.01rem solid #e4e4e4;
}
.content .title .active {
  color: #fff;
  background: #f26b11;
  outline: 0.01rem solid #ea5a01;
  position: relative;
  outline-offset: -1px;
}
.content .goods {
  height: 2.99rem;
  -webkit-box-shadow: 0 0 0.06rem .06rem #e0e0e0;
          box-shadow: 0 0 0.06rem .06rem #e0e0e0;
  margin-bottom: 0.34rem;
}
.content .goods a img {
  float: left;
  width: 2.16rem;
  height: 2.2rem;
  padding-top: .54rem;
  padding-left: .45rem;
}
.content .goods a .fl {
  margin-left: .52rem;
}
.content .goods a .fl h3 {
  padding-top: .31rem;
  font: 0.3rem/0.57rem "微软雅黑";
  color: #343434;
}
.content .goods a .fl p {
  font: 0.3rem/0.51rem Arial;
  color: #ed3638;
}
.content .goods a .fl p i {
  font-size: .24rem;
  font-family: "微软雅黑";
}
.content .goods a .fl span {
  font: 0.24rem/0.59rem "微软雅黑";
  color: #9b9b9b;
}
.content .goods a .fl em {
  display: block;
  width: 1.64rem;
  height: .52rem;
  font: 0.24rem/0.52rem "微软雅黑";
  color: #fff;
  text-align: center;
  background: #f26b11;
  border-radius: .04rem;
  margin-top: .13rem;
}
</style>