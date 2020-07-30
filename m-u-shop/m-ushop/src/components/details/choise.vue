<template>
  <div>
    <div class="choise">
      <ul>
        <li>
          <p>促销：</p>
          <i>满减</i>
          <b>满2件9折；3件8折</b>
          <div class="arr"></div>
        </li>
        <li>
          <p>购买数量</p>
          <div class="quantity">
            <a href="#" class="del">-</a>
            <input type="text" value="1" />
            <a class="add" href="#">+</a>
          </div>
        </li>
        <li>
          <p>商品属性</p>
          <br />
          <em>规格</em>
          <i class="i1 active">30g</i>
          <i class="i2">5g</i>
          <div class="arr"></div>
        </li>
      </ul>
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
    
  }
};
</script>

<style  scoped>
.choise {
  margin-top: 0.17rem;
  background: #fff;
}
.choise ul li {
  padding-left: 0.25rem;
  color: #454545;
  border-bottom: 0.01rem solid #f1f1f1;
  position: relative;
}
.choise ul li p {
  display: inline-block;
  font: 0.26rem/0.98rem "微软雅黑";
}
.choise ul li b {
  font: 0.24rem/0.98rem "微软雅黑";
}
.choise ul li .arr {
  height: 0.98rem;
  width: 0.64rem;
  background: #ffffff url(../../assets/images/arrow.jpg) no-repeat center / 0.24rem
    0.14rem;
  position: absolute;
  top: 0;
  right: 0;
}
.choise ul li:nth-child(1) {
  height: 0.98rem;
}
.choise ul li:nth-child(1) i {
  display: inline-block;
  width: 0.64rem;
  height: 0.35rem;
  font: 0.2rem/0.35rem "微软雅黑";
  color: #b3271a;
  text-align: center;
  border: 0.01rem solid #b3271a;
  border-radius: 0.04rem;
  margin: 0 0.15rem;
}
.choise ul li:nth-child(2) {
  height: 1.08rem;
}
.choise ul li:nth-child(2) p {
  line-height: 1.08rem;
}
.choise ul li:nth-child(2) .quantity {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  bottom: 0.24rem;
  right: 0.3rem;
}
.choise ul li:nth-child(2) .quantity a {
  display: block;
  font: 0.28rem/0.57rem Arial;
  color: #505050;
  width: 0.62rem;
  height: 0.57rem;
  text-align: center;
  border: 1px solid #505050;
}
.choise ul li:nth-child(2) .quantity input {
  width: 0.79rem;
  height: 0.57rem;
  font: 0.28rem/0.57rem Arial;
  color: #505050;
  text-align: center;
  border: 1px solid #505050;
  border-left: none;
  border-right: none;
}
.choise ul li:nth-child(2) .quantity .del {
  border-radius: 0.04rem 0 0 0.04rem;
}
.choise ul li:nth-child(2) .quantity .add {
  border-radius: 0 0.04rem 0.04rem 0;
}
.choise ul li:nth-child(3) {
  height: 1.9rem;
  border-bottom: none;
}
.choise ul li:nth-child(3) p {
  padding-top: 0.13rem;
  line-height: 0.8rem;
}
.choise ul li:nth-child(3) em {
  font: 0.24rem/0.59rem "微软雅黑";
  color: #b6b6b6;
  margin-right: 0.56rem;
}
.choise ul li:nth-child(3) i {
  display: inline-block;
  width: 1.5rem;
  height: 0.59rem;
  font: 0.28rem/0.59rem "微软雅黑";
  color: #fff;
  text-align: center;
  border-radius: 0.04rem;
  border: none;
  background: #e1e1e3;
  margin-right: 0.1rem;
}
.choise ul li:nth-child(3) .i2 {
  width: 1.17rem;
}
.choise ul li:nth-child(3) .active {
  background: #e43a3d;
}
</style>
