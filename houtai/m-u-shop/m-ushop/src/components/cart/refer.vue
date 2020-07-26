<template>
  <div>
    <div class="refer">
      <label>
        <input type="checkbox" checked="checked" />全选
      </label>
      <div class="total">
        <p>
          总计：
          <span>&nbsp;163.00</span>
          <br />
          <i>不含运费，已优惠￥0.00</i>
        </p>
        <a @click="goConser">去结算(2件)</a>
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
    goConser() {
      //路由编程式导航
      this.$router.push("/conser");
    }

  }
};
</script>

<style  scoped>
.refer {
  height: 1.14rem;
  background: #fff;
  border-top: 1px solid #ebebeb;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  position: fixed;
  left: 50% -3.75rem;
  /* bottom: 1.2rem; */
  bottom: 0;
  width: 7.5rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.refer label {
  font: 0.24rem/1.14rem "微软雅黑";
  color: #666666;
}
.refer label input {
  -webkit-appearance: checkbox;
  width: .34rem;
  height: .34rem;
  margin-left: .24rem;
  margin-right: .15rem;
  vertical-align: middle;
}
.refer .total {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.refer .total p {
  padding: .15rem .38rem 0 0;
  font: 0.3rem/0.46rem "微软雅黑";
  color: #333333;
  text-align: right;
}
.refer .total p span {
  color: #e43a3b;
}
.refer .total p i {
  font: 0.2rem/0.37rem "微软雅黑";
  color: #a4a4a4;
}
.refer .total a {
  display: block;
  width: 2.47rem;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  text-align: center;
  background: #f26b11;
}

</style>
