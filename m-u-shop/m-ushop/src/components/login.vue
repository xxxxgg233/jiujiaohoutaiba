<template>
  <div id="app">
    <div class="wrap">
      <head1></head1>
      <form1></form1>
    </div>
  </div>
</template>


<script>
import head1 from "./login/header";
import form1 from "./login/form";
// import mineMenu1 from "./mine/mineMenu";
export default {
  data() {
    return {
     
    };
  },
  components: {
    head1,
    form1,
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
