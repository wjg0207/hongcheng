<template>
  <div class>
    <Header></Header>
    <div class="imgs">
      <img src="../../assets/img/1478226907133140.jpg" alt />
    </div>
    <div class="content_wrap">
      <div class="about">
        当前位置 :
        <router-link to="/">首页</router-link>>
        <span>液晶拼接案例</span>
      </div>
      <div class="content">
        <div class="about_left">
          <div class="left_list">
            <div class="title">
              <h3>
                <span>案例</span>展示
              </h3>
            </div>
            <ul>
              <router-link to="/sucessful/casesplit" tag="li">
                <span>液晶拼接案例</span>
              </router-link>
              <router-link to="/sucessful/caseshow" tag="li">
                <span>商用显示案例</span>
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
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default {
  name: "Sucessful",
  components: {
    Footer,
    Header
  }
};
</script>
<style lang='less' scoped>
.content_wrap {
  height: 700px;
}
</style>