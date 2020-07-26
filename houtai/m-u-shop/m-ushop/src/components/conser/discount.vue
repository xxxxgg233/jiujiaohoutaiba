<template>
  <div>
    <div class="discount">
      <div class="top">
        <p>优惠券</p>
        <p>无可用&nbsp;</p>
      </div>
      <div class="bottom">
        <p>使用积分</p>
        <form action="#">
          <input type="text" placeholder="输入积分" />
          <input type="button" value="使用" />
          <p>
            可用
            <em>50</em>积分
          </p>
        </form>
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
  }
};
</script>

<style  scoped>
.discount {
  background: #fff;
  margin-top: .12rem;
}
.discount .top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font: 0.24rem/0.93rem "微软雅黑";
  color: #606060;
  padding-top: .03rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.discount .top p {
  padding: 0 .27rem;
}
.discount .bottom {
  height: 1.02rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font: 0.24rem/0.93rem "微软雅黑";
  color: #606060;
  padding-top: .03rem;
}
.discount .bottom p {
  padding: 0 .27rem;
}
.discount .bottom form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.discount .bottom form input {
  height: .69rem;
  border: .02rem solid #d8d8d8;
  border-radius: 0.05rem;
  margin-top: .16rem;
  font: 0.24rem/0.69rem "微软雅黑";
}
.discount .bottom form input[type=text] {
  width: 1.49rem;
  text-align: center;
  margin-right: .09rem;
}
.discount .bottom form input[type=text]::-webkit-input-placeholder {
  color: #e7e7e7;
}
.discount .bottom form input[type=text]::-moz-placeholder {
  color: #e7e7e7;
}
.discount .bottom form input[type=button] {
  width: .69rem;
  background: #f26b11;
  border-color: #faa42d;
  color: #fff;
}
.discount .bottom form p {
  color: #969696;
}
.discount .bottom form p em {
  color: #dd3242;
}
</style>
