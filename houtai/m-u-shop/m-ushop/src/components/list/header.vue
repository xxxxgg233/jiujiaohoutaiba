<template>
    <div>
        <div class="header">
            <a @click='$router.go(-1)'>
                <i class="left_arr"></i>
                <i></i>
            </a>
            <a class="logo" href="#"><img src="../../assets/images/logo.jpg" alt="logo"></a>
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
  background: #fff;
  padding: 0.43rem 0.23rem 0 0.24rem;
}
 .header a {
  padding: 0.28rem 0 0.28rem;
  display: block;
  width: .28rem;
  height: .28rem;
  background: #fff;
  position: relative;
}
 .header a i {
  width: 0;
  height: 0;
  border-width: .14rem .14rem .14rem 0;
  border-style: solid;
  border-color: transparent #fff;
  position: absolute;
  right: 0;
  top: .28rem;
}
 .header a .left_arr {
  border-right-color: #101010;
  left: .1rem;
}
 .header .logo {
  width: 1.5rem;
  height: 0.29rem;
}
 .header .logo img {
  width: 1.5rem;
  height: 0.29rem;
}
 .header .menu span {
  background: #101010;
}
</style>