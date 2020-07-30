<template>
  <div>
    <div class="cartIn">
      <form action="#">
        <ul>
          <!-- <li class="shops1">
            <input type="checkbox" checked="checked" />
            <a @click="goDetails">
              <img src="../../assets/images/shop_4.jpg" alt="#" />
              <div>
                <p>欧莱雅面霜</p>
                <span>规格：50g</span>
                <br />
                <em>￥123.00</em>
              </div>
            </a>
            <div class="quantity">
              <a href="#" class="del">-</a>
              <input type="text" value="1" />
              <a class="add" href="#">+</a>
            </div>
            <div class="delete">
              <a href="#">删除</a>
            </div>
          </li>
          <li class="shops2 active">
            <input type="checkbox" checked="checked" />
            <a @click="goDetails">
              <img src="../../assets/images/shop_4.jpg" alt="#" />
              <div>
                <p>雅诗兰黛护手霜</p>
                <span>规格：50g</span>
                <br />
                <em>￥26.00</em>
              </div>
            </a>
            <div class="quantity">
              <a href="#" class="del">-</a>
              <input type="text" value="1" />
              <a class="add" href="#">+</a>
            </div>
            <div class="delete">
              <a href="#">删除</a>
            </div>
          </li>
          <li class="shops3">
            <input type="checkbox" />
            <a @click="goDetails">
              <img src="../../assets/images/cart3_03.jpg" alt="#" />
              <div>
                <p>雅诗兰黛素颜霜</p>
                <span>规格：50g</span>
                <br />
                <em>￥226.00</em>
              </div>
            </a>
            <div class="quantity">
              <a href="#" class="del">-</a>
              <input type="text" value="1" />
              <a class="add" href="#">+</a>
            </div>
            <div class="delete">
              <a href="#">删除</a>
            </div>
          </li> -->
        </ul>
      </form>
    </div>
  </div>
</template>


<script>
import cartlist from "../../util/axios";
export default {
  data() {
    return {
      carList: [],
    };
  },
  components: {},
  methods: {
    goDetails() {
      //路由编程式导航
      this.$router.push("/details");
    },
  },
  mounted() {
    cartlist({
      uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
    }).then((res) => {
      if (res.code == 200) {
        console.log(res)
        this.carList = res.list;
        this.carList.map((item) => {
          item.status = item.status == 1 ? true : false;
        });
      } else {
        console.log(res.msg);
      }
    });
  },
};
</script>

<style  scoped>
.cartIn {
  background: #fff;
  min-height: calc(100% - 1.28rem);
}
.cartIn ul {
  padding-top: 0.3rem;
  overflow: hidden;
}
.cartIn ul li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 1.72rem;
  -webkit-box-shadow: 0 0 0.06rem 0.06rem #eeecec;
  box-shadow: 0 0 0.06rem 0.06rem #eeecec;
  margin-bottom: 0.3rem;
  position: relative;
}
.cartIn ul li input[type="checkbox"] {
  -webkit-appearance: checkbox;
  width: 0.34rem;
  height: 0.34rem;
  margin: 0.7rem 0.43rem 0 0.24rem;
  vertical-align: middle;
}
.cartIn ul li a {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 2.74rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.cartIn ul li a img {
  margin: 0.39rem 0.39rem 0 0;
  width: 1.01rem;
  height: 1.02rem;
}
.cartIn ul li a div p {
  padding-top: 0.06rem;
  font: 0.26rem/0.55rem "微软雅黑";
  color: #333333;
}
.cartIn ul li a div span {
  font: 0.23rem/0.52rem "微软雅黑";
  color: #666666;
}
.cartIn ul li a div em {
  font: 0.32rem/0.47rem Arial;
  color: #e5383c;
  margin-left: -0.03rem;
}
.cartIn ul li .quantity {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0.89rem 0.31rem 0 0;
}
.cartIn ul li .quantity a {
  display: block;
  font: 0.28rem/0.57rem Arial;
  color: #505050;
  width: 0.62rem;
  height: 0.57rem;
  text-align: center;
  border: 1px solid #505050;
}
.cartIn ul li .quantity input {
  width: 0.79rem;
  height: 0.57rem;
  font: 0.28rem/0.57rem Arial;
  color: #505050;
  text-align: center;
  border: 1px solid #505050;
  border-left: none;
  border-right: none;
}
.cartIn ul li .quantity .del {
  border-radius: 0.04rem 0 0 0.04rem;
}
.cartIn ul li .quantity .add {
  border-radius: 0 0.04rem 0.04rem 0;
}
.cartIn ul li .delete a {
  display: block;
  font: 0.24rem/1.72rem "微软雅黑";
  color: #fff;
  text-align: center;
  width: 0.98rem;
  background: #e43a3d;
  position: absolute;
  right: -0.98rem;
  bottom: 0;
}
.cartIn ul .active {
  -webkit-transform: translateX(-0.98rem);
  transform: translateX(-0.98rem);
}
</style>
