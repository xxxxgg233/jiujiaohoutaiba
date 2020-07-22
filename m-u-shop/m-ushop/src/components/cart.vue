<template>
  <div id="app">
    <div class="wrap">
      <head1></head1>
      <cartIn></cartIn>
      <refer></refer>
    </div>
  </div>
</template>


<script>
import head1 from "./cart/header";
import cartIn from "./cart/cartIn";
import refer from "./cart/refer";

export default {
  data() {
    return {};
  },
  components: {
    head1,
    cartIn,refer
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
  background: #fff;
}
</style>
