<template>
  <div>
    <div class="banner">
      <a href="#">
        <img :src="bannerImg" alt="banner" />
      </a>
    </div>
  </div>
</template>
<script>
import getbanner from '../../util/axios'
export default {
  data() {
    return {
      banner: [],
      bannerImg: require("../../assets/images/banner.jpg"),
    };
  },
  mounted() {
    getbanner().then((res) => {
      console.log(res);
    });
  },
};
</script>
<style lang="" scoped>
.banner a img {
  width: 100%;
  height: auto;
}
</style>