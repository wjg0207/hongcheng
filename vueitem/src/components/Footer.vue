<template>
  <div class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <div class="navimg">
          <i class="iconfont icon-shouye2" v-if="active==='home'"></i>
          <i class="iconfont icon-1" v-else></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/category/1" tag="li">
        <div class="navimg">
          <i class="iconfont icon-leimupinleifenleileibie2" v-if="active==='category'"></i>
          <i class="iconfont icon-leimupinleifenleileibie" v-else></i>
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <div class="navimg">
          <i class="iconfont icon-gouwucheman" v-if="active==='cart'"></i>
          <i class="iconfont icon-gouwuche" v-else></i>
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <div class="navimg">
          <i class="iconfont icon-wodedangxuan" v-if="active==='mine'"></i>
          <i class="iconfont icon-wode" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  },
  mounted() {
    this.active = this.$route.path.slice(1);
  }
};
</script>

<style lang="less">
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  ul {
    display: flex;
    height: 1.4rem;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    li {
      width: 20%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 0.32rem;
      }
    }
  }
}
.router-link-active {
  color: #721c24;
}
</style>
