<template>
  <div>
    <div class="cartIn">
      <form action="#">
        <ul>
          <li v-for="item in carList" :key="item.goodsid" class @click="changeActive">
            <input type="checkbox" @change="changed" ref="checkboxes" />
            <a @click="goDetails">
              <img :src="$imgUrl+item.img" alt="#" />
              <div>
                <p>{{item.goodsname}}</p>
                <!-- <span>规格：50g</span> -->
                <br />
                <em>￥{{item.price.toFixed(2)}}</em>
              </div>
            </a>
            <div class="quantity">
              <a href="#" class="del">-</a>
              <input type="text" v-model="item.num" />
              <a class="add" href="#">+</a>
            </div>
            <div class="delete">
              <a @click="del(item.id)">删除</a>
            </div>
          </li>
          <li v-if="carList==null">
            <h5>啥也没有！你个穷13！</h5>
          </li>
          <!-- <li class>
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
          <li class>
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
          </li>-->
        </ul>
      </form>
    </div>
    <div class="refer clearfix">
      <label>
        <input type="checkbox" @change="selectAll" v-model="checkAll" />全选
      </label>
      <div class="total">
        <p>
          总计：
          <span>&nbsp;{{priceAll1}}</span>
          <br />
          <i>不含运费，已优惠￥0.00</i>
        </p>
        <a @click="goConser">去结算({{pieceNum1}}件)</a>
      </div>
    </div>
  </div>
</template>


<script>
import { cartlist, cartdelete } from "../../util/axios";
export default {
  data() {
    return {
      carList: [],
      flag: true, //删除按钮
      wasChecked: [],
      checkAll: false,
      pieceNum1: 0,
      priceAll1: 0,
    };
  },
  components: {},
  mounted() {
    // console.log(JSON.parse(sessionStorage.getItem("userInfo")).uid);
    this.getCartlist();
    this.priceAll();
    this.pieceNum();
  },
  methods: {
    goConser() {
      sessionStorage.setItem("priceAll1", JSON.stringify(this.priceAll1));
     
      sessionStorage.setItem("wasChecked", JSON.stringify(this.wasChecked));
      this.$router.push("/conser");
    },
    goDetails() {
      this.$router.push("/details");
    },
    getCartlist() {
      cartlist({
        uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
      }).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data);
          this.carList = res.data.list;
          this.carList.map((item) => {
            item.status = item.status == 1 ? true : false;
          });
        } else if (res.data.code == 403) {
          this.$router.push("/login");
        } else {
          console.log(res.data.msg);
        }
      });
    },
    del(id) {
      console.log(id);
      cartdelete({ id }).then((res) => {
        if (res.data.code == 200) {
          this.getCarList();
        }
      });
    },
    changeActive(e) {
      // console.log(e.target.localName == "li");
      if (e.target.localName == "li") {
        e.path[0].className
          ? (e.path[0].className = "")
          : (e.path[0].className = "active");
      }
    },
    changed() {
      let aa = this.$refs.checkboxes.reduce((flag, item) => {
        return flag && item.checked;
      }, true);
      if (aa) {
        this.checkAll = true;
        this.priceAll();
        this.pieceNum();
      } else {
        this.checkAll = false;
        this.priceAll();
        this.pieceNum();
      }
    },
    selectAll() {
      if (this.checkAll) {
        this.carList.map((items) => {
          this.$refs.checkboxes.map((item) => {
            item.checked = true;
          });
        });
        this.priceAll();
        this.pieceNum();
      } else {
        this.carList.map((items) => {
          this.$refs.checkboxes.map((item) => {
            item.checked = false;
          });
        });
        this.priceAll();
        this.pieceNum();
      }
    },
    // 计算总价
    priceAll() {
      // let pp = this.carList.reduce((total, item) => {
      //   return total + item.price * item.num;
      //   // item.checked = true;
      // }, 0);
      setTimeout(() => {
        this.wasChecked = this.carList.map((item, index) => {
          return this.$refs.checkboxes[index].checked ? item : "";
        });
        this.priceAll1 = this.wasChecked.reduce((total, item) => {
          return item ? total + item.price * item.num : total;
          // item.checked = true;
        }, 0);
      }, 500);

      // return pp.toFixed(2);
    },
    pieceNum() {
      setTimeout(() => {
        this.wasChecked = this.carList.map((item, index) => {
          return this.$refs.checkboxes[index].checked ? item : "";
        });
        this.pieceNum1 = this.wasChecked.reduce((total, item) => {
          return item ? total +item.num : total;
          // item.checked = true;
        }, 0);
      }, 500);
    },
  },
  computed: {},
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
.refer {
  height: 1.14rem;
  background: #fff;
  border-top: 1px solid #ebebeb;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: fixed;
  left: 50% -3.75rem;
  bottom: 1.2rem;
  /* bottom: 0; */
  width: 7.5rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.refer label {
  font: 0.24rem/1.14rem "微软雅黑";
  color: #666666;
}
.refer label input {
  -webkit-appearance: checkbox;
  width: 0.34rem;
  height: 0.34rem;
  margin-left: 0.24rem;
  margin-right: 0.15rem;
  vertical-align: middle;
}
.refer .total {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.refer .total p {
  padding: 0.15rem 0.38rem 0 0;
  font: 0.3rem/0.46rem "微软雅黑";
  color: #333333;
  text-align: right;
}
.refer .total p span {
  color: #e43a3b;
}
.refer .total p i {
  font: 0.2rem/0.37rem "微软雅黑";
  color: #a4a4a4;
}
.refer .total a {
  display: block;
  width: 2.47rem;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  text-align: center;
  background: #f26b11;
}
</style>
