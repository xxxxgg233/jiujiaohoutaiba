<template>
  <div id="app">
    <div class="wrap">


      <head1></head1>
      <infor1></infor1>
      <mineIcon1></mineIcon1>
      <mineMenu1></mineMenu1>

      
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>


<script>
import head1 from "./mine/header";
import infor1 from "./mine/infor";
import mineIcon1 from "./mine/mineIcon";
import mineMenu1 from "./mine/mineMenu";
export default {
  data() {
    return {
     
    };
  },
  components: {
    head1,
    infor1,
    mineIcon1,
    mineMenu1
    
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
  height: 100%;
}
</style>
