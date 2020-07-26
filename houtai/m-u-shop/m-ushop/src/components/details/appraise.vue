<template>
  <div>
    <div class="appraise">
      <h3>商品评价</h3>
      <ul>
        <li>
          <a href="#">1235668fg</a>
          <p>效果很好，物流到位，下次继续来！</p>
          <img src="../../assets/images/picDetail_8.jpg" alt="pic" />
          <img src="../../assets/images/picDetail_9.jpg" alt="pic" />
          <img src="../../assets/images/picDetail_10.jpg" alt="pic" />
          <span>2020-01-13</span>
        </li>
        <li class="more">
          <a href="#">
            <i>
              共
              <span>1000</span>+条评论
            </i>
            <i>查看更多 ></i>
          </a>
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
  methods: {}
};
</script>

<style  scoped>
.appraise {
  margin-top: 0.3rem;
  background: #fff;
  padding-bottom: 1.14rem;
}
.appraise h3 {
  margin-left: 0.25rem;
  font: 0.3rem/0.93rem "微软雅黑";
  color: #464646;
}
.appraise ul {
  padding: 0 0.23rem;
}
.appraise ul li {
  border-top: 0.01rem solid #eeeeee;
}
.appraise ul li a {
  padding-top: 0.12rem;
  font: 0.26rem/0.54rem Arial;
  color: #666666;
}
.appraise ul li p {
  font: 0.26rem/0.6rem "微软雅黑";
  color: #464646;
}
.appraise ul li span {
  display: block;
  font: 0.26rem/0.76rem Arial;
  color: #999999;
}
.appraise ul li img {
  height: 1.51rem;
  width: auto;
  margin: 0.16rem 0 0.09rem 0.09rem;
}
.appraise ul .more {
  padding-bottom: 0.09rem;
}
.appraise ul .more a {
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.appraise ul .more a i {
  font: 0.24rem/0.82rem "微软雅黑";
  color: #999999;
  padding-right: 0.05rem;
}
.appraise ul .more a i span {
  display: inline;
  line-height: 0.82rem;
}
</style>
