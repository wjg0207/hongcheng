<!-- 分类右边  -->
<template>
  <div id="cate-right">
    <div class="cate-right">
      <div class="category">
        <div
          class="category-item"
          v-for="categoryGoodsListData in categoryGoodsListDatas"
          :key="categoryGoodsListData.cat_id"
        >
          <h3>{{categoryGoodsListData.category_name}}</h3>
          <ul>
            <li v-for="categoryGoods in categoryGoodsListData.child" :key="categoryGoods.cat_id">
              <a href>
                <img :src="categoryGoods.touch_icon" alt />
                <p>{{categoryGoods.cat_name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import datalist from "@/data/categoryList.json";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      categoryGoodsListDatas: datalist.categoryDataLists
    };
  },
  watch: {
    //监视
    $route(to) {
      console.log(to);
      console.log(to.params.id);
      var categoryId = to.params.id;
      console.log(categoryId);
      this.getCategoryGoodsFn(categoryId);
    }
  }
};
</script>
<style lang="less">
#cate-right {
  width: 100%;
  height: 100%;

  .cate-right {
    overflow-y: scroll;
    height: 100%;
    padding: 10px;

    .category {
      h3 {
        font-size: 0.37rem;
        text-align: center;
        line-height: 1.2rem;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        li {
          width: 33%;
          margin-bottom: 10px;
          img {
            width: 1.4rem;
          }
          p {
            font-size: 0.32rem;
          }
        }
      }
    }
  }
}
</style>
