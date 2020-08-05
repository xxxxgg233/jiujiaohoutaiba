<template>
  <div>
     <div class="bill">
            <ul>
                <li>
                    <p>商品金额</p>
                    <em>￥{{getPrice.toFixed(2)}}</em>
                </li>
                <li>
                    <p>运费</p>
                    <em>+￥0.00</em>
                </li>
                <li>
                    <p>优惠券</p>
                    <em>-￥0.00</em>
                </li>
                <li>
                    <p>会员优惠</p>
                    <em>-￥0.00</em>
                </li>
                <li>
                    <p>积分抵扣</p>
                    <em>-￥0.00</em>
                </li>
            </ul>
            <div class="billBottom">
                <div class="pay">
                    <p>实付金额 :&nbsp;</p>
                    <em>￥{{getPrice.toFixed(2)}}</em>
                </div>
                <input type="button" value="提交订单">
            </div>
        </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    // getgift(e){
    //   console.log(e)
    //   this.msg3=e
    // }
  },
  computed: {
    getPrice() {
      let data = "";
      data = sessionStorage.getItem("priceAll1")
        ? JSON.parse(sessionStorage.getItem("priceAll1"))
        : "";
      return data
    },
  },
};
</script>

<style  scoped>
.bill {
  margin-top: 0.12rem;
  background: #fff;
  width: 100%;
}
.bill ul {
  padding: .25rem .37rem 0 .25rem;
}
.bill ul li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font: 0.24rem/0.44rem "微软雅黑";
  color: #5e5e5e;
}
.bill ul li em {
  color: #e44235;
}
.bill ul li:nth-child(5) {
  line-height: .37rem;
  padding-bottom: .22rem;
  border-bottom: 0.01rem solid #efefef;
}
.bill .billBottom {
  height: 2.59rem;
  border-bottom: 0.01rem solid #ededed;
  font: 0.36rem/1.25rem "微软雅黑";
  color: #636363;
  padding: 0 .38rem;
}
.bill .billBottom .pay {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: right;
      -ms-flex-pack: right;
          justify-content: right;
}
.bill .billBottom em {
  color: #ef3b3c;
}
.bill .billBottom input {
  width: 3.55rem;
  height: 1.12rem;
  background: #f26b11;
  border-radius: 0.05rem;
  font: 0.3rem/1.12rem "微软雅黑";
  color: #fff;
  margin-left: 1.55rem;
}
</style>
