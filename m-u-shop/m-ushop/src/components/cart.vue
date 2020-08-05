<template>
  <div id="app">
    <div class="wrap">
      <head1></head1>
      <cartIn></cartIn>
    </div>
  </div>
</template>


<script>
import head1 from "./cart/header";
import cartIn from "./cart/cartIn";

export default {
  data() {
    return {};
  },
  components: {
    head1,
    cartIn,
  },
  methods: {
  
  }
};
</script>

<style  scoped>
.wrap {
  height: 100%;
  background: #fff;
}
</style>
