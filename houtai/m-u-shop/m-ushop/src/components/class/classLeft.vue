<template>
  <div>
    <div class="classLeft">
      <ul>
        <li>
          <a class="active" href="#">施华蔻</a>
        </li>
        <li>
          <a href="#">沙宣</a>
        </li>
        <li>
          <a href="#">欧莱雅</a>
        </li>
        <li>
          <a href="#">潘婷</a>
        </li>
        <li>
          <a href="#">资生堂</a>
        </li>
        <li>
          <a href="#">阿道夫</a>
        </li>
        <li>
          <a href="#">卡诗</a>
        </li>
        <li>
          <a href="#">海飞丝</a>
        </li>
        <li>
          <a href="#">资生堂</a>
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
    // getgift(e){
    //   console.log(e)
    //   this.msg3=e
    // }
  }
};
</script>

<style  scoped>
.class .classLeft {
  border-right: 1px solid #d9d9d9;
  width: 1.63rem;
  min-height: 100%;
}
 .classLeft ul {
  padding-top: .38rem;
}
 .classLeft ul li {
  padding-bottom: .61rem;
  padding-right: .4rem;
}
 .classLeft ul li a {
  display: block;
  width: 1.55rem;
  font: 0.26rem/0.52rem "微软雅黑";
  color: #666666;
  padding-left: .38rem;
  border-left: 8px solid transparent;
}
 .classLeft ul li .active {
  border-left-color: #f26b11;
  color: #f26b11;
}
</style>
