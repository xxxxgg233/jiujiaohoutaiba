<template>
  <div>
    <div class="class">
      <classLeft></classLeft>
      <classRight></classRight>
    </div>
  </div>
</template>


<script>
import classLeft from "./classLeft";
import classRight from "./classRight";

export default {
  data() {
    return {};
  },
  components: {
    classLeft,
    classRight
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
.class {
  border-top: 0.02rem solid #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  min-height: calc(100% - 1.28rem);
}
</style>
