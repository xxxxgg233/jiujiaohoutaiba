<template>
  <div id="app">
    <div class="wrap">


      <head1></head1>
    <address1></address1>
    <goods1></goods1>
    <discount1></discount1>
    <bill1></bill1>
      
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>


<script>
import head1 from "./conser/header";
import address1 from "./conser/address";
import goods1 from "./conser/goods";
import discount1 from "./conser/discount";
import bill1 from "./conser/bill";

export default {
  data() {
    return {
     
    };
  },
  components: {
    head1,
    address1,goods1,discount1,bill1
    
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
