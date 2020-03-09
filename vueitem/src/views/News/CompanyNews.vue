<!--  -->
<template>
  <div class="companynews">
    <div class="img_text">
      <div class="news_img">
        <img src="../../assets/img/1478243670210855.jpg" />
      </div>
      <div class="txt">
        <strong>LED液晶拼接屏现在市场现状?</strong>
        <div>2016-08-13</div>
        <p>2008年以来，随着LCD拼接屏和大尺寸商务显示器产品的规模化应用的高速推进,价格竞争开始成为大屏市场的一个重要博弈领域。除了波晶技术产品外,背投影和正投影显示系统、互动投影系统和LED大屏产业也加入到大屏显示价格竞争的行列中来。</p>
      </div>
    </div>
    <div class="companynews_list">
      <ul>
        <li>
          <span>2016-07-05</span>
          <mark>液晶拼接屏关键技术得到突破,迈向更小拼按间隙</mark>
          <img src="../../assets/img/arr-pic.jpg" />
        </li>
        <li>
          <span>2016-07-05</span>
          <mark>该如何选择液晶拼接屏和亮度</mark>
          <img src="../../assets/img/arr-pic.jpg" />
        </li>
        <li>
          <span>2016-08-10</span>
          <mark>液晶拼接大屏、液晶拼接</mark>
          <img src="../../assets/img/arr-pic.jpg" />
        </li>
        <li>
          <span>2016-07-06</span>
          <mark>大屏信息化时代的便利</mark>
          <img src="../../assets/img/arr-pic.jpg" />
        </li>
      </ul>
    </div>
    <div class="paging">
      <a href="javascript:;">上一页</a>
      <button type="button">1</button>
      <a href="javascript:;">下一页</a>
    </div>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
.companynews {
  float: left;
  width: 976px;
  height: 300px;
  margin-top: 20px;
  margin-left: 20px;
  .img_text {
    width: 976px;
    height: 180px;
    border-bottom: 1px solid #ccc;
    .news_img {
      float: left;
      img {
        width: 194px;
        height: 125px;
      }
    }
    .txt {
      width: 500px;
      height: 100px;
      float: left;
      margin-left: 100px;
      strong {
        padding-top: 20px;
        font-size: 14px;
        color: #666;
      }
      p {
        width: 675px;
        margin: 10px 0px;
        padding-top: 10px;
        border-top: 1px solid #ccc;
        font-size: 14px;
        color: #666;
      }
      div {
        font-size: 12px;
        color: #666;
      }
      div::before {
        content: url("../../assets/img/date.png");
        width: 12px;
        height: 10px;
        margin-right: 5px;
      }
    }
  }
  .companynews_list {
    ul {
      li {
        color: #666;
        margin-top: 14px;
        span {
          color: #666;
          font-size: 14px;
        }
        mark {
          background: #fff;
          margin-left: 50px;
          color: #666;
          font-size: 14px;
        }
        img {
          float: right;
        }
      }
      li span::before {
        content: url("../../assets/img/date2.png");
        margin-right: 10px;
      }
    }
  }
  .paging {
    margin-left: 400px;
    margin-top: 10px;
    button {
      border: none;
      color: #fff;
      background: #ff0000;
      width: 20px;
      height: 30px;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>