<template>
  <div class="cart">
    <Header title="分类" />
    <CategoryMain />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CategoryMain from "./components/CategoryMain.vue";
export default {
  components: {
    Header,
    CategoryMain,
    Footer
  }
};
</script>

<style>
</style>
