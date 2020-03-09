<!-- 页脚组件 -->
<template>
  <div id="footer">
    <div class="footer">
      <div class="footer_left">
        <div id="nav">
          <router-link to="/about">关于我们</router-link>
          <router-link to="/product">产品中心</router-link>
          <router-link to="/news">新闻动态</router-link>
          <router-link to="/solution">解决方案</router-link>
          <router-link to="/sucessful">案例展示</router-link>
          <router-link to="/contact">联系我们</router-link>
        </div>
        <span>Copyright &copy;成都宏程科技 All Rights Reserved.蜀ICP备16023362号-1</span>
      </div>
      <div class="footer_right">
        <div class="link">
          友情链接：
          <span>
            爱诚科技
            <img src="../assets/img/select.png" alt />
          </span>
        </div>
        <p>技术支持 : 爱诚科技</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style lang='less' scoped>
#footer {
  width: 100%;
  height: 140px;
  color: #fff;
  margin-top: 20px;
  background: url("../assets/img/footer_bg.png");
  .footer {
    width: 1200px;
    height: 140px;
    margin: 0 auto;
    .footer_left {
      float: left;
      width: 600px;
      #nav {
        float: left;
        width: 600px;
        padding-top: 30px;
        height: 16px;
        padding-bottom: 50px;
        a {
          float: left;
          color: #fff;
          height: 16px;
          font-size: 14px;
          line-height: 16px;
        }
        a:hover {
          color: #ff0000;
        }
        a:first-child {
          border-right: 2px solid #fff;
          height: 14px;
          line-height: 14px;
          padding-right: 16px;
        }
        a:nth-child(2) {
          border-right: 2px solid #fff;
          height: 14px;
          line-height: 14px;
          margin-left: 16px;
          padding-right: 16px;
        }
        a:nth-child(3) {
          border-right: 2px solid #fff;
          height: 14px;
          line-height: 14px;
          margin-left: 16px;
          padding-right: 16px;
        }
        a:nth-child(4) {
          border-right: 2px solid #fff;
          height: 14px;
          line-height: 14px;
          margin-left: 16px;
          padding-right: 16px;
        }
        a:nth-child(5) {
          border-right: 2px solid #fff;
          height: 14px;
          line-height: 14px;
          margin-left: 16px;
          padding-right: 16px;
        }
        a:last-child {
          border-right: none;
          height: 14px;
          line-height: 14px;
          margin-left: 16px;
        }
      }
      span {
        display: block;
        font-size: 14px;
      }
    }
    .footer_right {
      float: right;
      width: 180px;
      height: auto;
      font-size: 12px;
      .link {
        width: 200px;
        padding-top: 26px;
        span {
          width: 100px;
          border: 1px solid #fff;
          padding: 10px 0 10px 10px;
          img {
            width: 35px;
            height: 35px;
            padding: 5px 0 8px 11px;
            vertical-align: middle;
            cursor: pointer;
            border: none;
          }
        }
      }
      p {
        width: 150px;
        height: 10px;
        margin: 30px 0 0 64px;
      }
    }
  }
}
</style>