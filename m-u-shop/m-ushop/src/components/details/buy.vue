<template>
  <div>
    <div class="buy">
            <a href="/cart" class="buyCart">
                <img src="../../assets/images/footericon_05.jpg" alt="#">
                <p>购物车</p>
                <span>2</span>
            </a>
            <a href="/cart" class="buyAttend">
                加入购物车
            </a>
            <a href="/conser" class="buyNow">
                立即购买
            </a>
        </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style  scoped>
.buy {
  height: 1.14rem;
  background: #fff;
  position: fixed;
  left: 50% -3.75rem;
  bottom: 0;
  width: 7.5rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.buy a {
  display: inline-block;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  text-align: center;
}
.buy .buyCart {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
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
  height: 1.13rem;
  border-top: 0.01rem solid #f1f1f1;
  position: relative;
}
.buy .buyCart img {
  padding-top: 0.19rem;
  width: .49rem;
  height: .49rem;
}
.buy .buyCart p {
  font: 0.18rem/0.43rem "微软雅黑";
  color: #888888;
}
.buy .buyCart span {
  display: block;
  width: .24rem;
  height: .24rem;
  background: #e6393b;
  border-radius: 50%;
  font: 0.19rem/0.24rem Arial;
  color: #fff;
  text-align: center;
  position: absolute;
  top: .16rem;
  right: .58rem;
}
.buy .buyAttend {
  background: #f26b11;
  width: 2.89rem;
  border-right: 0.01rem solid #f38456;
}
.buy .buyNow {
  background: #e43a3d;
  width: 2.88rem;
}
</style>
