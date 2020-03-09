<!--  -->
<template>
  <div class="product">
    <div class="product_right">
      <ul>
        <li v-for="productData in productDatas" :key="productData.id">
          <img :src="productData.imgsrc" />
          <h3>{{productData.h3}}</h3>
        </li>
      </ul>
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
  data() {
    return {
      productDatas: [
        {
          id: 1,
          imgsrc: require("../../assets/img/1478327071498566.jpg"),
          h3: "绵阳LG47寸2*2拼接"
        },
        {
          id: 2,
          imgsrc: require("../../assets/img/1478327202681623.jpg"),
          h3: "绵阳LG47寸2*2拼接"
        },
        {
          id: 3,
          imgsrc: require("../../assets/img/1478327253100991.jpg"),
          h3: "绵阳LG47寸2*2拼接"
        },
        {
          id: 4,
          imgsrc: require("../../assets/img/1478327295252467.jpg"),
          h3: "绵阳LG47寸2*2拼接"
        },
        {
          id: 5,
          imgsrc: require("../../assets/img/1478327353970366.jpg"),
          h3: "绵阳LG47寸2*2拼接"
        },
        {
          id: 6,
          imgsrc: require("../../assets/img/1478327390539274.jpg"),
          h3: "绵阳LG47寸2*2拼接"
        }
      ]
    };
  }
};
</script>
<style lang='less' scoped>
.product {
  float: left;
  .product_right {
    width: 700px;
    height: 260px;
    margin-left: 30px;
    position: relative;
    ul {
      float: left;
      width: 876px;
      li {
        width: 270px;
        height: 160px;
        float: left;
        margin-left: 20px;
        padding-top: 40px;
        cursor: pointer;
        img {
          width: 270px;
          height: 160px;
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
      bottom: -220px;
      left: 50%;
      margin-left: 10px;
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