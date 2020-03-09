<!-- 头部组件 -->
<template>
  <div id="header">
    <div class="logo">
      <img src="../assets/img/logo.jpg" />
    </div>
    <div class="contact_way">
      <img src="../assets/img/phone.png" />
      <strong>400 - 9657 - 186</strong>
    </div>
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我们</router-link>
      <router-link to="/product">产品中心</router-link>
      <router-link to="/news">新闻动态</router-link>
      <router-link to="/solution">解决方案</router-link>
      <router-link to="/sucessful">案例展示</router-link>
      <router-link to="/contact">联系我们</router-link>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "Header"
};
</script>
<style scoped lang='less'>
#header {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  position: relative;
  .logo {
    width: 222px;
    height: 56px;
    float: left;
    img {
      margin-top: 20px;
    }
  }
  .contact_way {
    position: absolute;
    right: 0;
    top: 0;
    strong {
      color: #1881d5;
      font-size: 20px;
    }
  }
  #nav {
    float: right;
    line-height: 100px;
    a {
      float: left;
      margin-left: 40px;
      font-size: 14px;
      cursor: pointer;
    }
    a:hover {
      color: #e70012;
    }
  }
  .router-link-exact-active {
    color: red !important;
  }
}
</style>