<template>
  <div>
    <div class="class">
      <div class="classLeft">
        <ul>
          <li v-for="(item,index) in cateList1" :key="item.id">
            <a @click="select(index)" :class="[index==num ?'active':'' ]">{{item.catename}}</a>
          </li>
        </ul>
      </div>
      <div class="classRight">
        <ul>
          <li>
            <div class="title">
              <p>{{title2}}</p>
              <a href="#">更多></a>
            </div>
            <ul>
              <li  v-for="(item) in cateList2" :key="item.id"
              >
                <a @click="toLists(item.id)">
                  <img :src="$imgUrl+item.img" alt="洗发水" />
                  <p>{{item.catename}}</p>
                </a>
              </li>
              <!-- <li ><p>啥也没有，傻了吧</p></li> -->
            </ul>
          </li>
          <!-- <li>
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
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { getcate, getcatetree } from "../../util/axios";
export default {
  data() {
    return {
      num: 0,
      cateList1: [],
      cateList2: [],
      title2: "",
    };
  },
  components: {},
  mounted() {
    getcatetree().then((res) => {
      this.cateList1 = res.data.list;
      this.cateList2 = res.data.list[this.num].children;
      this.title2 = res.data.list[this.num].catename;
    });
  },
  methods: {
    getTree() {},
    select(index) {
      this.num = index;
      this.title2 = this.cateList1[index].catename;
      getcatetree().then((res) => {
        this.cateList2 = res.data.list[index].children;
        console.log(this.cateList2);
      });
    },
    toLists() {
      this.$router.push({
        path: "/list",
      });
    },
  },
};
</script>

<style  scoped>
.class {
  border-top: 0.02rem solid #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  min-height: calc(100% - 1.28rem);
}
.class .classLeft {
  border-right: 1px solid #d9d9d9;
  width: 1.63rem;
  min-height: 100%;
}
.classLeft ul {
  padding-top: 0.38rem;
}
.classLeft ul li {
  padding-bottom: 0.61rem;
  padding-right: 0.4rem;
}
.classLeft ul li a {
  display: block;
  width: 1.55rem;
  font: 0.26rem/0.52rem "微软雅黑";
  color: #666666;
  padding-left: 0.38rem;
  border-left: 8px solid transparent;
}
.classLeft ul li .active {
  border-left-color: #f26b11;
  color: #f26b11;
}
.class .classRight {
  padding-top: 0.43rem;
}
.classRight ul li {
  padding-bottom: 0.86rem;
}
.classRight ul li .title {
  padding: 0 0.44rem 0.38rem 0.55rem;
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
  float: right;
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
  padding: 0 0.36rem 0 0.26rem;
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
  padding-bottom: 0.1rem;
}
</style>
