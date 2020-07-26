<template>
    <div>
        <div class="recommend">
            <div class="recomLeft">
                <h3>限时秒杀</h3>
                <p>每天零点场 好货秒不停</p>
                <div class="time">
                    <span>02</span><i>:</i>
                    <span>16</span><i>:</i>
                    <span>45</span>
                    <em>秒杀</em>
                </div>
                <a href="#"><img src="../../assets/images/shop_5.jpg" alt="毛巾"><div class="price"><b>￥</b>14.8</div></a>
                
            </div>
            <div class="recomRight">
                <div class="Rtop">
                    <a href="#">
                        <img src="../../assets/images/shop_1.jpg" alt="shop_1">
                    </a>
                    <h3>品牌上新</h3><i>折</i>
                    <p>每日9点 抢大牌</p>
                    <img src="../../assets/images/brand.jpg" alt="brand">
                </div>
                <div class="Rbottom">
                    <a href="#">
                        <h3>每日十件</h3>
                        <p>只为你选好货</p>
                        <img class="shop2" src="../../assets/images/shop_2.jpg" alt="shop2">
                    </a>
                    <a class="rbl" href="#">
                        <h3>拼啊</h3>
                        <p>超级好价拼团</p>
                        <img class="shop3" src="../../assets/images/shop_3.jpg" alt="shop3">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style lang="" scoped>
.recommend {
  height: 3.77rem;
  margin-top: .29rem;
  padding-left: 0.2rem;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 0.02rem solid #ededed;
}
.recommend .recomLeft {
  padding-top: .15rem;
  width: 3.57rem;
}
.recommend .recomLeft h3 {
  font: 0.3rem/0.36rem "微软雅黑";
  color: #ff1e72;
  background: url(../../assets/images/timer.jpg) no-repeat 0 0.03rem;
  background-size: 0.33rem auto;
  padding-left: 0.42rem;
}
.recommend .recomLeft p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #828282;
}
.recommend .recomLeft .time {
  font: 0.22rem/0.43rem Arial;
  padding-top: 0.04rem;
}
.recommend .recomLeft .time span {
  display: inline-block;
  width: .43rem;
  color: #fff;
  text-align: center;
  background: #27272f;
  border-radius: .06rem;
}
.recommend .recomLeft .time i {
  padding-left: 0.07rem;
}
.recommend .recomLeft .time em {
  display: inline-block;
  width: .96rem;
  background: url(../../assets/images/bg.jpg) no-repeat 0 0;
  background-size: 0.96rem 0.42rem;
  text-align: center;
  font: 0.26rem/0.42rem "微软雅黑";
  color: #392700;
  vertical-align: top;
  margin-left: .26rem;
}
.recommend .recomLeft a {
  display: inline-block;
  position: relative;
}
.recommend .recomLeft a img {
  padding-top: .3rem;
  padding-left: .28rem;
  width: 2.36rem;
  height: 2rem;
}
.recommend .recomLeft a .price {
  width: .84rem;
  height: .84rem;
  background: #ff3179;
  font: 0.3rem/0.84rem Arial;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  right: -0.5rem;
  bottom: .11rem;
}
.recommend .recomLeft a .price b {
  font-size: .18rem;
}
.recommend .recomRight {
  width: 3.52rem;
  border-left: 0.01rem solid #f0f0f0;
}
.recommend .recomRight .Rtop {
  height: 1.88rem;
  padding: 0 0.2rem;
  border-bottom: 0.01rem solid #eeeeee;
}
.recommend .recomRight .Rtop h3 {
  font: 0.3rem/0.36rem "微软雅黑";
  color: #ff1e72;
  display: inline-block;
  margin-top: .15rem;
}
.recommend .recomRight .Rtop p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #828282;
}
.recommend .recomRight .Rtop i {
  display: inline-block;
  width: .33rem;
  font: 0.18rem/0.25rem "微软雅黑";
  color: #f1f1f1;
  text-align: center;
  vertical-align: middle;
  background: #ff3294;
  margin-left: .1rem;
}
.recommend .recomRight .Rtop img {
  width: .93rem;
  height: .32rem;
  margin-top: .23rem;
}
.recommend .recomRight .Rtop a {
  float: right;
}
.recommend .recomRight .Rtop a img {
  margin: 0.05rem;
  width: 1.28rem;
  height: 1.78rem;
}
.recommend .recomRight .Rbottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.recommend .recomRight .Rbottom a {
  padding: .14rem .19rem 0 .2rem;
}
.recommend .recomRight .Rbottom a h3 {
  font: 0.3rem/0.36rem "微软雅黑";
  color: #ff1e72;
  font-size: .26rem;
}
.recommend .recomRight .Rbottom a p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #828282;
  white-space: nowrap;
}
.recommend .recomRight .Rbottom a .shop2 {
  width: .64rem;
  height: 1.02rem;
  margin-left: .35rem;
}
.recommend .recomRight .Rbottom a .shop3 {
  width: 1.08rem;
  height: .88rem;
  margin-left: .20rem;
}
.recommend .recomRight .Rbottom .rbl {
  border-left: 0.01rem solid #f0f0f0;
}
</style>