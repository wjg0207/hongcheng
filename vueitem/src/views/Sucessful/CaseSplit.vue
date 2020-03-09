<!--  -->
<template>
  <div class="case">
    <div class="about_right">
      <ul>
        <li v-for="caseData in caseDatas" :key="caseData.id">
          <img :src="caseData.imgsrc" />
          <h3>{{caseData.h3}}</h3>
        </li>
      </ul>
      <!--翻页效果-->
      <div class="paging">
        <a href="javascript:;">上一页</a>
        <button type="button">1</button>
        <button type="button" class="fff">2</button>
        <a href="javascript:;">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      caseDatas: [
        {
          id: 1,
          imgsrc: require("../../assets/img/1478255776566685.jpg"),
          h3: "绵阳LG47寸2*2拼接"
        },
        {
          id: 2,
          imgsrc: require("../../assets/img/1478327390539274.jpg"),
          h3: "宜宾学院三星46寸3.5mm2*4拼接"
        },
        {
          id: 3,
          imgsrc: require("../../assets/img/1478327390539274.jpg"),
          h3: "成都三星55寸 2*2拼接"
        },
        {
          id: 4,
          imgsrc: require("../../assets/img/1478540522637817.jpg"),
          h3: "宜宾LG49寸3.5mm 3*3拼接"
        },
        {
          id: 5,
          imgsrc: require("../../assets/img/1478255848781457.jpg"),
          h3: "三星55寸mm 2*2拼接"
        },
        {
          id: 6,
          imgsrc: require("../../assets/img/1478255776566685.jpg"),
          h3: "重庆三星55寸3.9mm 5x4拼接"
        },
        {
          id: 7,
          imgsrc: require("../../assets/img/1478540990776164.jpg"),
          h3: "绵阳 三星47寸2*2拼接"
        },
        {
          id: 8,
          imgsrc: require("../../assets/img/1478539447130300.jpg"),
          h3: "昭通 三星55寸 5.5mm 3x3拼接"
        },
        {
          id: 9,
          imgsrc: require("../../assets/img/1478543015219720.jpg"),
          h3: "阿坝州 三星5.5 2*2拼接"
        },
        {
          id: 10,
          imgsrc: require("../../assets/img/1478525749104881.jpg"),
          h3: "成都LG47寸4.9mm 2*2拼接"
        },
        {
          id: 11,
          imgsrc: require("../../assets/img/1478539787408371.jpg"),
          h3: "南充 奇美50寸 12mm 2*2拼接"
        },
        {
          id: 12,
          imgsrc: require("../../assets/img/1478540990776164.jpg"),
          h3: "长寿县 三星48寸8mm 4x3拼接"
        }
      ]
    };
  }
};
</script>
<style lang='less' scoped>
.case {
  float: left;
  .about_right {
    width: 950px;
    height: 260px;
    margin-left: 30px;
    position: relative;
    ul {
      float: left;
      width: 976px;
      height: 300px;
      li {
        width: 220px;
        height: 130px;
        float: left;
        margin-left: 20px;
        padding-top: 50px;
        cursor: pointer;
        img {
          width: 220px;
          height: 130px;
        }
        h3 {
          font-size: 12px;
          text-align: center;
          color: #666;
        }
      }
    }
    .paging {
      position: absolute;
      bottom: -360px;
      left: 50%;
      margin-left: -50px;
      button {
        border: none;
        color: #fff;
        background: #ff0000;
        width: 20px;
        height: 30px;
        cursor: pointer;
        outline: none;
      }
      a {
        color: #666;
      }
      a:hover {
        color: #ff0000;
      }
      .fff {
        background: #fff;
        color: #666;
      }
    }
  }
}
</style>