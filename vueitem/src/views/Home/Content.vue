<!-- 首页内容组件 -->
<template>
  <div class="content">
    <div class="content_top">
      <div class="about">
        <div class="about_content">
          <h1>关于我们</h1>
          <router-link to="/about" class="link">查看更多 +</router-link>
        </div>
        <div class="img">
          <img src="../../assets/img/1478702445964815.jpg" alt />
        </div>
      </div>
      <div class="news">
        <div class="news_content">
          <h1>新闻动态</h1>
          <router-link to="/news" class="link">更多新闻 +</router-link>
        </div>
        <div class="img">
          <div class="img_text">
            <div class="txt">
              <strong>LED液晶拼接屏现在市场现状?</strong>
              <p>2008年以来,随着LCD拼接屏和大尺寸商务显示器产品的规模化应用的高速推进..</p>
              <span>2016-08-13</span>
            </div>
            <div class="news_img">
              <img src="../../assets/img/1478243670210855.jpg" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="contact_content">
          <h1>联系我们</h1>
        </div>
        <div class="contact_img">
          <img src="../../assets/img/contact.jpg" alt />
        </div>
      </div>
    </div>
    <div class="content_center">
      <div class="about_list">
        <p>我们是一家显示系统研发。商用显示面板销售、工程安装及售后服务于一体的高科技企业;公司主营产品有三星、LG. 奇美电子等液晶面板。我们始终致力于为广大用户提供高质量、高性能高性价比的..</p>
      </div>
      <div class="news_list">
        <ul>
          <li>
            液品拼接屏关键技术得到突破,迈向更小拼接间隙
            <span>2016-07-05</span>
          </li>
          <li>
            该如何选择液品拼接屏和亮度
            <span>2016-07-05</span>
          </li>
          <li>
            液晶拼接大屏、液晶拼接
            <span>2016-08-10</span>
          </li>
        </ul>
      </div>
      <div class="contact_list">
        <ul>
          <li>
            <span>手机 : 400-9675-186</span>
          </li>
          <li>
            <span>传真 : 028-86912595</span>
          </li>
          <li>
            <span>地址 : 四川成都市金牛区茶店子蜀西路36号金路天下</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 产品中心导航 -->
    <div class="content_bottom">
      <div class="product_title">
        <h2>产品中心</h2>
        <div class="product_title_right">
          <div id="prevs"></div>
          <div id="nexts"></div>
          <router-link tag="div" to="/product" id="more">更多产品</router-link>
        </div>
      </div>
      <div class="product_img_wrap">
        <ul id="slide_img">
          <router-link tag="li" to="/product">
            <i>46寸3.5mm液晶拼接</i>
            <img src="../../assets/img/1478327416101202.jpg" />
          </router-link>
          <router-link tag="li" to="/product">
            <i>46寸5.5mm液晶拼接</i>
            <img src="../../assets/img/1478543015219720.jpg" />
          </router-link>
          <router-link tag="li" to="/product">
            <i>49寸3.5mm液晶拼接</i>
            <img src="../../assets/img/1478327253100991.jpg" />
          </router-link>
          <router-link tag="li" to="/product">
            <i>55寸5.5mm液晶拼接</i>
            <img src="../../assets/img/1478327295252467.jpg" />
          </router-link>
          <router-link tag="li" to="/product">
            <i>55寸3.5mm液晶拼接</i>
            <img src="../../assets/img/1478327071498566.jpg" />
          </router-link>
          <router-link tag="li" to="/product">
            <i>55寸5.5mm液晶拼接</i>
            <img src="../../assets/img/1478327202681623.jpg" />
          </router-link>
          <router-link tag="li" to="/product">
            <i>49寸5.5mm液晶拼接</i>
            <img src="../../assets/img/1478327253100991.jpg" />
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.content {
  width: 1200px;
  height: 545px;
  margin: 0 auto;
  margin-top: 40px;
  overflow: hidden;
  .content_top {
    width: 1200px;
    height: 150px;
    margin-bottom: 20px;
    float: left;
    .about {
      float: left;
      width: 380px;
      height: 140px;
      .about_content {
        width: 380px;
        height: 30px;
        h1 {
          float: left;
          width: 100px;
          font-weight: 500;
          font-size: 20px;
          margin-bottom: 24px;
        }
        h1::before {
          content: url("../../assets/img/title_bg.png");
          padding-right: 5px;
        }
        .link {
          float: right;
          font-size: 14px;
          margin-top: 5px;
        }
        a {
          color: #666;
        }
        a:hover {
          color: #e70012;
        }
        .img {
          width: 380px;
          height: 100px;
        }
      }
    }
    .news {
      float: left;
      width: 380px;
      height: 140px;
      margin: 0 30px;
      .news_content {
        width: 380px;
        height: 30px;
        h1 {
          float: left;
          width: 100px;
          font-weight: 500;
          font-size: 20px;
          margin-bottom: 24px;
        }
        h1::before {
          content: url("../../assets/img/title_bg.png");
          padding-right: 5px;
        }
        .link {
          float: right;
          font-size: 14px;
          margin-top: 5px;
        }
        a {
          color: #666;
        }
        a:hover {
          color: #e70012;
        }
      }
      .img {
        width: 380px;
        height: 100px;
        .img_text {
          width: 380px;
          height: 100px;
          float: left;
          .txt {
            width: 220px;
            height: 100px;
            float: left;
            strong {
              font-size: 12px;
              padding-top: 20px;
            }
            p {
              font-size: 12px;
              margin: 5px 0;
              color: #666;
            }
            span {
              font-size: 12px;
              color: #666;
            }
            span::before {
              content: url("../../assets/img/date.png");
              width: 12px;
              height: 10px;
              margin-right: 5px;
            }
          }
          .news_img {
            float: right;
            img {
              width: 150px;
              height: 100px;
            }
          }
        }
      }
    }
    .contact {
      float: left;
      width: 380px;
      height: 140px;
      .contact_content {
        width: 380px;
        height: 30px;
        h1 {
          float: left;
          width: 100px;
          font-weight: 500;
          font-size: 20px;
          margin-bottom: 24px;
        }
        h1::before {
          content: url("../../assets/img/title_bg.png");
          padding-right: 5px;
        }
        .link {
          float: right;
          font-size: 14px;
          margin-top: 5px;
        }
        a {
          color: #666;
        }
        a:hover {
          color: #e70012;
        }
        .contact_img {
          width: 380px;
          height: 100px;
        }
      }
    }
  }
  .content_center {
    width: 1200px;
    height: 80px;
    line-height: 26px;
    margin-top: 180px;
    font-size: 12px;
    color: #666;
    .about_list {
      width: 380px;
      float: left;
    }
    .news_list {
      float: left;
      margin: 0 30px;
      ul {
        li {
          span {
            margin-left: 54px;
          }
        }
        li:nth-child(2) span {
          margin-left: 153px;
        }
        li:nth-child(3) span {
          margin-left: 177px;
        }
      }
    }
    .contact_list {
      ul {
        li:first-child span::before {
          content: url("../../assets/img/tel.png");
          width: 9px;
          height: 12px;
          margin-right: 10px;
        }
        li:nth-child(2) span::before {
          content: url("../../assets/img/fax.png");
          width: 12px;
          height: 12px;
          margin-right: 8px;
        }
        li:nth-child(3) span::before {
          content: url("../../assets/img/addr.png");
          width: 9px;
          height: 12px;
          margin-right: 10px;
        }
      }
    }
  }
  .content_bottom {
    width: 100%;
    height: 30px;
    margin-top: 50px;
    .product_title {
      width: 1200px;
      height: 30px;
      margin: 0 auto;
      h2 {
        float: left;
        width: 100px;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 24px;
      }
      h2::before {
        content: url("../../assets/img/title_bg.png");
        padding-right: 5px;
      }
      .product_title_right {
        float: right;
        div {
          float: left;
          line-height: 30px;
        }
        #more {
          width: 80px;
          height: 30px;
          color: #fff;
          text-align: center;
          border-radius: 15px;
          background: #e70012;
          margin-right: 20px;
          font-size: 12px;
          cursor: pointer;
        }
        #more:hover {
          color: blue;
        }
        #prevs,
        #nexts {
          width: 27px;
          height: 26px;
          margin-top: 2px;
          margin-right: 10px;
          cursor: pointer;
        }
        #prevs {
          background: url("../../assets/img/btnL.png") no-repeat;
        }
        #prevs:hover {
          background: url("../../assets/img/btnLh.png") no-repeat;
        }
        #nexts {
          background: url("../../assets/img/btnr.png") no-repeat;
        }
        #nexts:hover {
          background: url("../../assets/img/btnrh.png") no-repeat;
        }
      }
    }
    .product_img_wrap {
      width: 1200px;
      height: 320px;
      margin-top: 20px;
      position: relative;
      #slide_img {
        width: 9999px;
        height: 320px;
        position: absolute;
        left: 0;
        li {
          float: left;
          margin-right: 20px;
          width: 280px;
          height: 180px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          i {
            position: absolute;
            width: 258px;
            height: 30px;
            font-style: normal;
            color: #fff;
            font-style: 14px;
            line-height: 30px;
            padding-left: 20px;
            bottom: -30px;
            z-index: 100;
            background: rgba(0, 0, 0, 0.5);
            transition: all ease 0.3s;
          }
          img {
            width: 100%;
            height: 180px;
            transition: all ease 0.3s;
          }
          img:hover {
            transform: scale(1.2);
            transition: all ease 0.3s;
          }
        }
        li:hover {
          border: 1px solid #1881d5;
        }
        li:hover i {
          bottom: 0px;
          transition: all ease 0.3s;
        }
      }
    }
  }
}
</style>