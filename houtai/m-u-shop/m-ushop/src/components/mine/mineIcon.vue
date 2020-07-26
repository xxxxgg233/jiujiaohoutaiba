<template>
  <div>
    <div class="mineIcon">
      <a href="#">
        <img class="mineIcon1" src="../../assets/images/iconMine_1.jpg" alt="#" />
        <p>全部订单</p>
      </a>
      <a href="#">
        <img class="mineIcon2" src="../../assets/images/iconMine_2.jpg" alt="#" />
        <p>待付款</p>
      </a>
      <a href="#">
        <img class="mineIcon3" src="../../assets/images/iconMine_3.jpg" alt="#" />
        <p>待收货</p>
      </a>
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
.mineIcon {
  height: 1.42rem;
  padding: 0 0.66rem 0 0.52rem;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.mineIcon a {
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
  font: 0.24rem/0.57rem "微软雅黑";
  color: #676767;
  margin-top: 0.35rem;
}
.mineIcon a .mineIcon1 {
  width: 0.34rem;
  height: 0.34rem;
  margin-bottom: 0;
}
.mineIcon a .mineIcon2 {
  width: 0.38rem;
  height: 0.3rem;
  margin-bottom: 0.04rem;
}
.mineIcon a .mineIcon3 {
  width: 0.34rem;
  height: 0.29rem;
  margin-bottom: 0.05rem;
}
</style>