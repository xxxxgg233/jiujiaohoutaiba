<template>
  <div id="app">
    <div class="wrap">
      <head1></head1>
      <form1></form1>
      <list1></list1>
    </div>
  </div>
</template>


<script>
import head1 from "./list/header";
import form1 from "./list/form";
import list1 from "./list/listL";
// import mineMenu1 from "./mine/mineMenu";
export default {
  data() {
    return {
     
    };
  },
  components: {
    head1,
    form1,
    list1,
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
