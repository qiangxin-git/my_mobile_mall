<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <swiper :banners="banners"></swiper>
  </div>
</template>

<script>
import NavBar from 'components//common/navbar/NavBar'
import {getHomeMultiData} from 'network/home'
import Swiper from 'components/swiper/Swiper'

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper
  },
  data() {
    return {
      banners: [],
      recommends: [],
      dKeyword: [],
      keywords: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res)
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
