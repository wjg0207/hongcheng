<template>
  <div class="context">
    <Header></Header>
    <Banner></Banner>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "./Banner.vue";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Content from "./Content.vue";
export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Footer,
    Content
  }
};
</script>

<style lang="less">
</style>
