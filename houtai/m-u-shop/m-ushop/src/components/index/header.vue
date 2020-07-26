<template>
    <div>
        <div class="header">
            <a ><img :src="headerImg" alt="logo"></a>
            <form action="#">
                <input type="search" placeholder="寻找商品">
            </form>
            <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            headerImg:require('../../assets/images/logo.jpg')
        }
    }
}
</script>
<style lang="" scoped>
 .header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background: #ffffff;
  padding: 0.43rem 0.23rem 0 0.24rem;
}
 .header a {
  padding: 0.28rem 0 0.28rem;
}
 .header a img {
  width: 1.5rem;
  height: 0.29rem;
}
 .header form {
  padding-top: .24rem;
}
 .header form input {
  width: 3.03rem;
  height: 0.38rem;
  background: #eee;
  border-radius: 0.05rem;
  text-align: center;
  color: #b8b8b8;
  font: 0.18rem/0.38rem "微软雅黑";
}
 .header .menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 0.55rem;
  padding-top: .36rem;
}
 .header .menu span {
  display: inline-block;
  width: 0.12rem;
  height: 0.11rem;
  background: #101010;
  border-radius: 50%;
}
</style>