<template>
  <div>
    <div class="form">
      <form onclick="return false">
        <label for="nikname">
          昵称：
          <input type="text" id="nikname" v-model="userInfo.nikname" />
        </label>
        <label for="phone">
          手机号：
          <input type="text" id="phone" v-model="userInfo.phone" />
        </label>
        <label for="password">
          密码：
          <input type="password" id="password" v-model="userInfo.password" />
        </label>
        <label for="code">
          验证码:
          <input type="text" id="code" v-model="userInfo.code" />
        </label>
        <button @click="regist">下一步</button>
      </form>
    </div>
  </div>
</template>
<script>
import { getlogin, getregister } from "../../util/axios";
export default {
  data() {
    return {
      userInfo: {
        nikname: "",
        phone: "",
        password: "",
        code: "",
      },
    };
  },
  mounted() {},
  methods: {
    regist() {
      // console.log(this.userInfo);
      getregister(this.userInfo).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.msg);
          this.$router.push({
            path: "/login"
          });
        } else {
          console.log(res.data.msg);
        }
      });
    },
  },
};
</script>
<style lang="" scoped>
.form form {
  padding-top: 0.24rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.form form label {
  display: block;
  font: 0.34rem/0.38rem "微软雅黑";
}
.form form input {
  width: 5.23rem;
  height: 0.77rem;
  border-bottom: 0.02rem solid #000;
  /* text-align: center; */
  color: #000;
  font: 0.26rem/0.77rem "微软雅黑";
  margin-left: 0.62rem;
}
.form form input::-webkit-input-placeholder {
  color: #000;
}
.form form input::-moz-placeholder {
  color: #000;
}
.form form button {
  width: 5.23rem;
  height: 0.77rem;
  margin: 0 auto;
  border: none;
  background: #f26b11;
  color: #fff;
}
</style>