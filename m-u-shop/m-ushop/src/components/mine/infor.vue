<template>
  <div>
    <div class="infor">
            <div class="id">
                <a href="#"><img src="../../assets/images/mine.png" alt="#"></a>
                <div>
                    <p >{{getName}}</p>
                    <span>V1</span>
                </div>
            </div>
            <a href="#" class="sign">每日签到</a>
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
          nickname:''
        }
    },
    computed: {
        getName(){
            let data =''
            data = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : ''
            return data.nickname
        }
    },
    mounted() {
    },
};
</script>
<style lang="" scoped>
.infor {
  height: 2.06rem;
  background: #f26b11;
  padding: 0 .38rem 0 .23rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.infor .id {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.infor .id a {
  display: block;
  width: 1.42rem;
  height: 1.42rem;
  border: 0.05rem solid #fff;
  border-radius: 50%;
  overflow: hidden;
  margin: .28rem .26rem 0 .09rem;
}
.infor .id a img {
  width: 1.42rem;
  margin: 0 auto;
}
.infor .id div p {
  font: 0.3rem/0.53rem "微软雅黑";
  color: #fff;
  margin-top: .6rem;
}
.infor .id div span {
  font: italic 0.28rem/0.42rem "微软雅黑";
  color: #090816;
}
.infor .sign {
  display: block;
  width: 1.59rem;
  height: .71rem;
  font: 0.26rem/0.71rem "微软雅黑";
  color: #f26b11;
  text-align: center;
  margin-top: .74rem;
  background: #fff;
  border-radius: .05rem;
}
</style>