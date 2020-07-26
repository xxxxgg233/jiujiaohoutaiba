<template>
  <div>
    <div class="header" >
      <a @click='$router.go(-1)'>
        <i class="left_arr"></i>
        <i></i>
      </a>
      <em>购物车</em>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
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
.header {
  background: #f26b11;
  padding: 0.43rem 0.23rem 0 0.24rem;
}
.header a {
  padding: 0.28rem 0 0.28rem;
  display: block;
  width: 0.28rem;
  height: 0.28rem;
  background: #f26b11;
  position: relative;
}
.header a i {
  width: 0;
  height: 0;
  border-width: 0.14rem 0.14rem 0.14rem 0;
  border-style: solid;
  border-color: transparent #f26b11;
  position: absolute;
  right: 0;
  top: 0.28rem;
}
.header a .left_arr {
  border-right-color: #fff;
  left: 0.1rem;
}
.header em {
  padding-top: 0.24rem;
  font: 0.34rem/0.38rem "微软雅黑";
  color: #fff;
}
.header .menu span {
  background: #fff;
}
</style>
