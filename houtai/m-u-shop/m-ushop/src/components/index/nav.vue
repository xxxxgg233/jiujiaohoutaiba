<template>
  <div>
    <div class="nav">
      <ul>
        <!-- <li class="active"><a href="#">推荐</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">鞋包</a></li>
                <li><a href="#">居家</a></li>
                <li><a href="#">母婴儿童</a></li>
                <li><a href="#">美食</a></li>
                <li><a href="#">果品</a></li>
                <li><a href="#">果品</a></li>
                <li><a href="#">果品</a></li>
        <li><a href="#">果品</a></li>-->
        <li v-for="item in list" :key="item.id" @click="toList(item.id)">
          <a href="#">{{item.navMsg}}</a>
        </li>
      </ul>
      <div class="arr"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          navMsg: "推荐"
        },
        {
          id: 2,
          navMsg: "女装"
        },
        {
          id: 3,
          navMsg: "鞋包"
        },
        {
          id: 4,
          navMsg: "居家"
        },
        {
          id: 5,
          navMsg: "母婴儿童"
        },
        {
          id: 6,
          navMsg: "美食"
        },
        {
          id: 7,
          navMsg: "果品"
        },
        {
          id: 8,
          navMsg: "果品"
        }
      ]
    };
  },
  methods: {
    toList(id) {
      this.$router.push({
        path: "/list",
        query: {
          id
        }
      });
    }
  }
};
</script>
<style lang="" scoped>
.nav {
  background: #fff;
  border-top: 1px solid #e4e4e4;
  position: relative;
}
.nav ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 0.12rem;
  overflow: hidden;
}
.nav ul li {
  border-bottom: 0.04rem solid transparent;
  margin: 0 0.2rem;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.nav ul li a {
  display: block;
  font: 0.28rem/0.31rem "微软雅黑";
  color: #212121;
  margin: 0.23rem 0 0.18rem 0;
  border-right: 1px solid transparent;
}
.nav ul .active {
  border-bottom: 0.04rem solid #ff003c;
}
.nav ul .active a {
  color: #ff003c;
  position: relative;
}
.nav ul .active a::after {
  content: "";
  display: block;
  width: 1px;
  height: 0.28rem;
  background: #f1f1f1;
  position: absolute;
  right: -0.21rem;
  top: 0.03rem;
}
.nav .arr {
  height: 0.75rem;
  width: 0.75rem;
  background: #ffffff url(../../assets/images/arrow.jpg) no-repeat center /
    0.35rem 0.21rem;
  position: absolute;
  top: 0;
  right: 0;
}
</style>