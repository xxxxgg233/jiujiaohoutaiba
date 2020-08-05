<template>
  <div>
    <div class="goods">
      <div v-for="item in  wasChecked" :key='item.id'>
        <a href="details.html">
          <img :src="$imgUrl+item.img" alt="#" />
          <div>
            <em>￥item.price.toFixed(2)</em>
            <p>item.goodsname</p>
            <!-- <span>规格：50g</span> -->
            <br />
          </div>
        </a>
        <div class="quantity">
          <p>购买数量：</p>
          <div>
            <a href="#" class="del">-</a>
            <input type="text" v-model="item.num" />
            <a class="add" href="#">+</a>
          </div>
        </div>
        <div class="express">
          <p>配送方式：</p>
          <p>XX快递</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nickname: "",
      wasChecked: [],
    };
  },
  mounted() {
    this.getGoods()
    this.getPrice()
    },
  components: {},
  methods: {
    getGoods() {
      let data = "";
      data = sessionStorage.getItem("wasChecked")
        ? JSON.parse(sessionStorage.getItem("wasChecked"))
        : "";
      this.wasChecked = data.wasChecked;
    },
    
  },
  computed: {
    getName() {
      let data = "";
      data = sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : "";
      return data.nickname;
    },
  },
};
</script>

<style  scoped>
.goods {
  background: #fff;
  margin-top: 0.12rem;
}
.goods a {
  padding-left: 0.34rem;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 2.74rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.goods a img {
  margin: 0.23rem 0.39rem 0 0;
  height: 1.02rem;
  /* width: 1.01rem; */
}
.goods a div {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font: 0.24rem/0.47rem "微软雅黑";
}
.goods a div p {
  padding-top: 0.29rem;
  color: #333333;
}
.goods a div span {
  color: #666666;
}
.goods a div em {
  float: right;
  font: 0.4rem/1.13rem Arial;
  color: #e5383c;
  margin-right: 0.31rem;
}
.goods .quantity {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 0.24rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 0.01rem solid #f0f0f0;
  padding-bottom: 0.11rem;
  margin-right: 0.26rem;
}
.goods .quantity p {
  font: 0.24rem/1.27rem "微软雅黑";
  color: #666666;
}
.goods .quantity div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 0.34rem;
}
.goods .quantity div a {
  display: block;
  font: 0.28rem/0.57rem Arial;
  color: #505050;
  width: 0.62rem;
  height: 0.57rem;
  text-align: center;
  border: 1px solid #505050;
  padding: 0;
  border-radius: 0.04rem;
}
.goods .quantity div input {
  width: 0.79rem;
  height: 0.57rem;
  font: 0.28rem/0.57rem Arial;
  color: #505050;
  text-align: center;
  border: 1px solid #505050;
  border-radius: 0.04rem;
}
.goods .quantity div .del {
  margin-right: 0.12rem;
}
.goods .quantity div .add {
  margin-left: 0.12rem;
}
.goods .express {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font: 0.24rem/0.93rem "微软雅黑";
  color: #606060;
  padding-top: 0.03rem;
}
.goods .express p {
  padding: 0 0.27rem;
}
</style>
