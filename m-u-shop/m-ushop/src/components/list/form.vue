<template>
  <div>
    <div class="form">
      <form action="#">
        <input type="search" placeholder="搜索商品" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="" scoped>
.form form {
  padding-top: 0.24rem;
}
.form form input {
  width: 6.23rem;
  height: 0.77rem;
  background: #f26b11;
  border-radius: 0.35rem;
  text-align: center;
  color: #fff;
  font: 0.26rem/0.77rem "微软雅黑";
  margin-left: 0.62rem;
}
.form form input::-webkit-input-placeholder {
  color: #fff;
}
.form form input::-moz-placeholder {
  color: #fff;
}
</style>