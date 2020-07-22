<template>
  <div>
    <div class="address">
            <div class="left">
                <p class="name">收货人：YouSu</p>
                <p class="tel fr">10000000000</p>
                <p>收货地址：北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</p>
            </div>
            <img src="../../assets/images/arrowRight.jpg" alt="#">
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
.address {
  background: #fff;
  height: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.address .left p {
  padding-left: .29rem;
  font: 0.24rem/0.3rem "微软雅黑";
  color: #6d6d6d;
  padding-top: .17rem;
}
.address .left .name {
  display: inline-block;
  padding-top: .22rem;
}
.address .left .tel {
  display: inline-block;
  padding-top: .22rem;
  padding-right: .13rem;
}
.address img {
  width: .19rem;
  height: .26rem;
  padding: .64rem .30rem 0 .4rem;
}
</style>
