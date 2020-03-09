<!-- 轮播图组件 -->
<template>
  <div id="banner">
    <div id="banner_img">
      <ul>
        <li class="new">
          <img src="../../assets/img/banner01.jpg" alt />
        </li>
        <li>
          <img src="../../assets/img/banner02.jpg" alt />
        </li>
      </ul>
      <div id="prev"></div>
      <div id="next"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MyBanner from "../../assets/js/banner.js";
export default {
  mounted() {
    MyBanner.Baner.fn();
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
#banner {
  width: 100%;
  height: 480px;
  position: relative;
  #banner_img {
    width: 100%;
    height: 480px;
    overflow: hidden;
    li {
      float: left;
      width: 100%;
      height: 480px;
      display: none;
      img {
        float: left;
        width: 100%;
        height: 480px;
        cursor: pointer;
      }
    }
    .now {
      display: block;
    }
  }
  #prev {
    width: 34px;
    height: 60px;
    position: absolute;
    background: url("../../assets/img/left.png") no-repeat;
    top: 50%;
    margin-top: -50px;
    margin-left: 40px;
    cursor: pointer;
  }
  #next {
    width: 34px;
    height: 60px;
    position: absolute;
    background: url("../../assets/img/right.png") no-repeat;
    right: 0;
    top: 50%;
    margin-top: -50px;
    margin-left: 40px;
    cursor: pointer;
  }
}
</style>