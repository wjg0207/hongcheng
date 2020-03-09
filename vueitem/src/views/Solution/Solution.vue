<!--  -->
<template>
  <div class>
    <Header></Header>
    <div class="imgs">
      <img src="../../assets/img/1478226879315293.jpg" alt />
    </div>
    <div class="content_wrap">
      <div class="about">
        当前位置 :
        <router-link to="/">首页</router-link>>
        <span>社区监控</span>
      </div>
      <div class="content">
        <div class="about_left">
          <div class="left_list">
            <div class="title">
              <h3>
                <span>解决</span>方案
              </h3>
            </div>
            <ul>
              <router-link to="/solution/solutioncommunity" tag="li">
                <span>社区监控</span>
              </router-link>
              <router-link to="/solution/solutionbusiness" tag="li">
                <span>商业广告</span>
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
  name: "Solution",
  components: {
    Footer,
    Header
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>