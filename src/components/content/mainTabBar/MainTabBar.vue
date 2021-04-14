<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:icon><img src="../../../assets/img/tabbar/home.png" alt=""></template>
      <template v-slot:icon_active><img src="../../../assets/img/tabbar/home_active.png" alt=""></template>
      <template v-slot:text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/categary">
      <template v-slot:icon><img src="../../../assets/img/tabbar/categary.png" alt=""></template>
      <template v-slot:icon_active><img src="../../../assets/img/tabbar/categary_active.png" alt=""></template>
      <template v-slot:text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template v-slot:icon><img src="../../../assets/img/tabbar/shopcart.png" alt=""></template>
      <template v-slot:icon_active><img src="../../../assets/img/tabbar/shopcart_active.png" alt=""></template>
      <template v-slot:text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:icon><img src="../../../assets/img/tabbar/profile.png" alt=""></template>
      <template v-slot:icon_active><img src="../../../assets/img/tabbar/profile_active.png" alt=""></template>
      <template v-slot:text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar';
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
