<template>
  <div class="home-product">
    <div class="home-product-list">
      <ul>
        <li v-for="homeListData in homeListDatas" :key="homeListData.id">
          <router-link to tag="a">
            <img :src="homeListData.imgsrc" alt />
            <h3>{{homeListData.title}}</h3>
            <span class="price">{{homeListData.price}}</span>
            <span class="unprice">{{homeListData.unprice}}</span>
            <div class="new-product">新品</div>
            <div class="sales">销售: 0</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeListDatas: [
        {
          id: 1,
          imgsrc:
            "https://gd4.alicdn.com/imgextra/i4/2235376635/O1CN01KhkkMd1yssSC1ve2T_!!2235376635.jpg",
          title: "小米无线鼠标",
          price: 69.0,
          unprice: 79.0
        },
        {
          id: 2,
          imgsrc:
            "https://img.alicdn.com/imgextra/i4/2081895850/O1CN01hQgm3i1t5LZezfODW_!!2081895850.jpg_960x960Q50s50.jpg_.webp",
          title: "笔记本电脑",
          price: 1698.0,
          unprice: 2198.0
        },
        {
          id: 3,
          imgsrc:
            "https://gd2.alicdn.com/imgextra/i2/2245691027/O1CN01uO4ynT1JSPF7Oxycl_!!2245691027.png_400x400.jpg",
          title: "小米8 青春版",
          price: 1788.0,
          unprice: 1788.0
        },
        {
          id: 4,
          imgsrc:
            "https://gd4.alicdn.com/imgextra/i4/2235376635/O1CN01KhkkMd1yssSC1ve2T_!!2235376635.jpg",
          title: "小米无线鼠标",
          price: 69,
          unprice: 79
        },
        {
          id: 5,
          imgsrc:
            "https://gd4.alicdn.com/imgextra/i4/2235376635/O1CN01KhkkMd1yssSC1ve2T_!!2235376635.jpg",
          title: "小米无线鼠标",
          price: 69,
          unprice: 79
        },
        {
          id: 6,
          imgsrc:
            "https://gd4.alicdn.com/imgextra/i4/2235376635/O1CN01KhkkMd1yssSC1ve2T_!!2235376635.jpg",
          title: "小米无线鼠标",
          price: 69,
          unprice: 79
        },
        {
          id: 7,
          imgsrc:
            "https://gd4.alicdn.com/imgextra/i4/2235376635/O1CN01KhkkMd1yssSC1ve2T_!!2235376635.jpg",
          title: "小米无线鼠标",
          price: 69,
          unprice: 79
        },
        {
          id: 8,
          imgsrc:
            "https://gd4.alicdn.com/imgextra/i4/2235376635/O1CN01KhkkMd1yssSC1ve2T_!!2235376635.jpg",
          title: "小米无线鼠标",
          price: 69,
          unprice: 79
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped="scoped">
.home-product {
  margin-bottom: 2rem;
  width: 100%;

  .home-product-list {
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 45%;
        height: 7.5rem;
        text-align: center;
        margin: 10px 0 0 10px;
        border: 1px #ccc solid;

        a {
          text-align: left;
          img {
            width: 90%;
          }

          h3 {
            margin: 0 0 0 10px;
            font-size: 0.37rem;
          }

          span {
            font-size: 0.4rem;
            display: block;
            margin: 50px 0 0 10px;

            &::before {
              content: "￥";
            }
          }

          .price {
            color: #ec5151;
            width: 45%;
            float: left;
          }

          .unprice {
            color: #ccc;
            float: right;
            margin-right: 22px;
            text-decoration: line-through;
          }

          div {
            font-size: 0.4rem;
            margin: 10px 0 0 10px;
            color: #ccc;
          }

          .new-product {
            width: 50%;
            float: left;
          }

          .sales {
            float: right;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
