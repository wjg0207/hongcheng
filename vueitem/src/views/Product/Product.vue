<!--  -->
<template>
  <div class>
    <Header></Header>
    <div class="imgs">
      <img src="../../assets/img/1478226825103039.jpg" alt />
    </div>
    <div class="content_wrap">
      <div class="about">
        当前位置 :
        <router-link to="/">首页</router-link>>
        <span>液晶拼接屏</span>
      </div>
      <div class="content">
        <div class="about_left">
          <div class="left_list">
            <div class="title">
              <h3>
                <span>产品</span>中心
              </h3>
            </div>
            <ul>
              <router-link to="/product/productcontrol" tag="li">
                <span>液晶拼接屏</span>
              </router-link>
              <router-link to="/product/productliquid" tag="li">
                <span>监控显示屏</span>
              </router-link>
              <div class="contact">
                <img src="../../assets/img/contactUs.jpg" />
              </div>
            </ul>
          </div>
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  name: "Product",
  components: {
    Footer,
    Header
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.content_wrap {
  width: 100%;
  height: 580px;
}
</style>