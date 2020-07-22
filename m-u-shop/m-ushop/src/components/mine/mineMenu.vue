<template>
  <div>
    <div class="mineMenu">
            <ul>
                <li><a href="#">
                    <p>地址管理</p>
                    <span>
                        <i class="right_arr"></i>
                        <i></i>
                    </span>
                </a></li>
                <li><a class="mineMenu2" href="#">
                    <p>我的钱包</p>
                    <span>
                        <b>200余额</b>
                        <i class="right_arr"></i>
                        <i></i>
                    </span>
                </a></li>
                <li><a class="mineMenu3" href="#">
                    <p>我的优惠券</p>
                    <span>
                        <i class="right_arr"></i>
                        <i></i>
                    </span>
                </a></li>
                <li><a class="mineMenu4" href="#">
                    <p>我的二维码</p>
                    <span>
                        <i class="right_arr"></i>
                        <i></i>
                    </span>
                </a></li>
                <li><a class="mineMenu5" href="#">
                    <p>我的小伙伴</p>
                    <span>
                        <i class="right_arr"></i>
                        <i></i>
                    </span>
                </a></li>
            </ul>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="" scoped>
.mineMenu {
  margin-top: .21rem;
  min-height: calc(100% - 4.97rem);
  background: #fff;
}
.mineMenu ul li {
  padding: 0 .23rem;
  height: 1.17rem;
  border-bottom: .01rem solid #d8d8d8;
}
.mineMenu ul li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background: url(../../assets/images/iconMine_4.jpg) no-repeat 0.14rem center / 0.36rem 0.4rem;
}
.mineMenu ul li a p {
  margin-left: .71rem;
  font: 0.26rem/1.17rem "微软雅黑";
  color: #5d5d5d;
}
.mineMenu ul li a span {
  margin-top: .50rem;
  width: .24rem;
  height: .24rem;
  background: #fff;
  position: relative;
}
.mineMenu ul li a span i {
  width: 0;
  height: 0;
  border-width: .12rem 0 .12rem .12rem;
  border-style: solid;
  border-color: transparent #fff;
  position: absolute;
  left: 0;
  top: 0;
}
.mineMenu ul li a span .right_arr {
  border-left-color: #adadad;
  left: 1px;
}
.mineMenu ul li a span b {
  display: block;
  width: 1rem;
  position: absolute;
  left: -1.1rem;
  bottom: -0.03rem;
  font: 0.24rem "微软雅黑";
  color: #f26b11;
}
.mineMenu ul li .mineMenu2 {
  background: url(../../assets/images/iconMine_5.jpg) no-repeat 0.12rem center / 0.36rem 0.36rem;
}
.mineMenu ul li .mineMenu3 {
  background: url(../../assets/images/iconMine_6.jpg) no-repeat 0.05rem center / 0.46rem 0.32rem;
}
.mineMenu ul li .mineMenu4 {
  background: url(../../assets/images/iconMine_7.jpg) no-repeat 0.13rem center / 0.36rem 0.34rem;
}
.mineMenu ul li .mineMenu5 {
  background: url(../../assets/images/iconMine_8.jpg) no-repeat 0.1rem center / 0.38rem 0.36rem;
}

</style>