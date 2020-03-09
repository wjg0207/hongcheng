<template>
  <div class="about">
    <Header></Header>
    <div class="imgs">
      <img src="../../assets/img/1478226470131066.jpg" alt />
    </div>
    <div class="content_wrap">
      <div class="about">
        当前位置 :
        <router-link to="/">首页</router-link>>
        <span>公司简介</span>
      </div>
      <div class="content">
        <div class="about_left">
          <div class="left_list">
            <div class="title">
              <h3>
                <span>关于</span>我们
              </h3>
            </div>
            <ul>
              <router-link to="/about/aboutcompany" tag="li">
                <span>公司简介</span>
              </router-link>
              <router-link to="/about/aboutculture" tag="li">
                <span>企业文化</span>
              </router-link>
              <router-link to="/about/aboutorganize" tag="li">
                <span>组织架构</span>
              </router-link>
              <div class="contact">
                <router-link to="/contact">
                  <img src="../../assets/img/contactUs.jpg" />
                </router-link>
              </div>
            </ul>
          </div>
          <div class="left_content"></div>
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
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer";
export default {
  name: "About",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less" scoped>
</style>