<template>
  <div>
    <div class="list">
      <ul>
        <li v-for="item in goodsList" :key="item.id">
          <a class="clearfix" @click="toDetails(item.id)">
            <img :src="$imgUrl+item.img" alt="商品" />
            <div class="fl">
              <h3>
                {{item.goodsname}}
                <br />
              </h3>
              <p>
                <i>￥</i>{{item.price}}
              </p>
              <!-- <span>{{item.goodsSpan}}</span> -->
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getgoods} from '../../util/axios'
export default {
    data() {
        return {
            goodsList:[]
        }
    },
    mounted() {
        console.log(this.$route)
        //组件加载调取接口
        this.getGoods()
    },
    methods:{
        //封装获取商品列表的方法
        getGoods(){
            getgoods({
                fid:this.$route.query.id
            })
            .then(res=>{
                console.log(res)
                if(res.code==200){
                    this.goodsList = res.list
                }
            })
        },
    }
}
</script>
<style lang="" scoped>
.list ul li {
  height: 2.07rem;
  margin: 0.28rem 0.25rem 0 0.23rem;
  border-bottom: 1px solid #d1d1d1;
}
.list ul li a {
  display: block;
}
.list ul li a img {
  float: left;
  width: 1.47rem;
  height: 1.6rem;
  padding: 0.29rem 0 0 0.2rem;
}
.list ul li a .fl {
  height: 2.07rem;
  margin-left: 0.43rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.list ul li a .fl h3 {
  font: 0.26rem/0.37rem "微软雅黑";
  color: #343434;
}
.list ul li a .fl p {
  font: 0.3rem/0.53rem Arial;
  color: #ed3638;
}
.list ul li a .fl p i {
  font-size: 0.24rem;
  font-family: "微软雅黑";
}
.list ul li a .fl span {
  font: 0.26rem/0.41rem "微软雅黑";
  color: #9b9b9b;
}
</style>