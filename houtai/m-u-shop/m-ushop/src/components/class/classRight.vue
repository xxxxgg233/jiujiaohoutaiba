<template>
  <div>
    <div class="classRight">
      <ul>
        <li>
          <div class="title">
            <p>洗发类</p>
            <a href="#">更多></a>
          </div>
          <ul>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_2.jpg" alt="洗发水" />
                <p>护亮泽洗发水</p>
              </a>
            </li>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_2.jpg" alt="洗发水" />
                <p>滋养洗发水</p>
              </a>
            </li>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_2.jpg" alt="洗发水" />
                <p>柔顺洗发露</p>
              </a>
            </li>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_2.jpg" alt="洗发水" />
                <p>去屑洗发露</p>
              </a>
            </li>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_2.jpg" alt="洗发水" />
                <p>柔顺洗发露</p>
              </a>
            </li>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_2.jpg" alt="洗发水" />
                <p>焕彩洗发水</p>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div class="title">
            <p>洗发类</p>
            <a href="#">更多></a>
          </div>
          <ul>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_1.jpg" alt="洗发水" />
                <p>施华蔻染色</p>
              </a>
            </li>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_1.jpg" alt="洗发水" />
                <p>施华蔻双氧乳</p>
              </a>
            </li>
            <li>
              <a href="list.html">
                <img src="../../assets/images/shopClassify_1.jpg" alt="洗发水" />
                <p>施华蔻染发膏</p>
              </a>
            </li>
          </ul>
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
.class .classRight {
  padding-top: 0.43rem;
}
 .classRight ul li {
  padding-bottom: .86rem;
}
 .classRight ul li .title {
  padding: 0 .44rem .38rem .55rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
 .classRight ul li .title p {
  font: 0.26rem/0.47rem "微软雅黑";
  color: #454545;
}
 .classRight ul li .title a {
  font: 0.2rem/0.47rem "微软雅黑";
  color: #666666;
}
 .classRight ul li ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding: 0 .36rem 0 .26rem;
}
 .classRight ul li ul li {
  padding: 0;
}
 .classRight ul li ul li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
 .classRight ul li ul li a img {
  width: auto;
  height: 1.52rem;
  margin: 0 auto;
}
 .classRight ul li ul li a p {
  font: 0.24rem/0.67rem "微软雅黑";
  color: #878787;
  padding-bottom: .1rem;
}
</style>
