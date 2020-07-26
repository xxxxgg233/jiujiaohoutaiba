<template>
  <div>
    <div class="form">
      <form onclick="return false">
        
        <label for="phone">
          手机号：
          <input type="text" id="phone" v-model="userInfo.phone" />
        </label>
        <label for="password">
          密码：
          <input type="password" id="password" v-model="userInfo.password" />
        </label>
        <p id="forget">忘记密码</p>
        <button @click="login">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
import { getlogin, getregister } from '../../util/axios'
export default {
  data() {
    return {
      userInfo: {
        phone: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    login() {
      // console.log(this.userInfo);
      getlogin(this.userInfo).then((res) => {
        if (res.data.code == 200) {
          console.log(res)
          console.log(res.data.msg);
          sessionStorage.setItem('userInfo',JSON.stringify(res.data.list))
          this.$router.push({
            path: "/index"
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
.form #forget{
  margin: 0.3rem;
  text-align: right;
  float: right;
}
</style>