<template>
  <div id="app">
    <div class="wrap">
      <!-- // 练习内容…… -->
      <!-- <h1>{{msg}}</h1> -->
      <!-- <h1>{{msg}}</h1>
    <aa aqa='111' :bqb='msg2' @getInfo='getgift'></aa>
      <h2>{{msg3}}</h2>-->


      <head1></head1>
      <nav1></nav1>
      <banner1></banner1>
      <icon1></icon1>
      <recommend1></recommend1>
      <bar1></bar1>
      <content1></content1>
      <!-- <footer1></footer1> -->
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>


<script>
import head1 from "./index/header";
import nav1 from "./index/nav";
import banner1 from "./index/banner";
import icon1 from "./index/icon";
import recommend1 from "./index/recommend";
import bar1 from "./index/bar";
import content1 from "./index/content";
// import footer1 from "./index/footer";
export default {
  data() {
    return {
      msg: "1112333"
      // msg2:'96196',
      // msg3:''
    };
  },
  components: {
    head1,
    nav1,
    banner1,
    icon1,
    recommend1,
    bar1,
    content1,
    // footer1
  },
  methods: {
    // getgift(e){
    //   console.log(e)
    //   this.msg3=e
    // }
  }
};
</script>

<style  scoped>
.wrap {
  max-width: 7.5rem;
  margin: 0 auto;
}
</style>
