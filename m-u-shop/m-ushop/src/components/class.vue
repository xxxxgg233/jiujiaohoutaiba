<template>
  <div id="app">
    <div class="wrap">
      <head1></head1>
      <classWrap></classWrap>
    </div>
  </div>
</template>


<script>
import head1 from "./class/header";
import classWrap from "./class/classWrap";

export default {
  data() {
    return {};
  },
  components: {
    head1,
    classWrap
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
