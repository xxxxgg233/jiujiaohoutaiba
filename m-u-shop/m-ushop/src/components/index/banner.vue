<template>
    <div>
        <div class="banner">
            <a href="#">
                <img :src="bannerImg" alt="banner">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bannerImg:require('../../assets/images/banner.jpg')
        }
    }
}
</script>
<style lang="" scoped>
.banner a img {
  width: 100%;
  height: auto;
}
</style>