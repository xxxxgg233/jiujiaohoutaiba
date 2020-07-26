<template>
  <div id="app">
    <div class="wrap">
      <head1></head1>
      <pic1></pic1>
      <title1></title1>
      <choise1></choise1>
      <goodsDetails1></goodsDetails1>
      <appraise1></appraise1>
      <buy></buy>

      
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import head1 from "./details/header";
import pic1 from "./details/pic";
import title1 from "./details/title";
import choise1 from "./details/choise";
import goodsDetails1 from "./details/goodsDetails";
import appraise1 from "./details/appraise";
import buy from "./details/buy";

export default {
  data() {
    return {
     
    };
  },
  components: {
    head1,pic1,title1,
    choise1,
    goodsDetails1,
    appraise1,buy

    
  },
  methods: {
  }
};
</script>

<style  scoped>
.wrap {
  height: 100%;
}
</style>
