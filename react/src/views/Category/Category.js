import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import asyncComponent from "../../components/async/asyncComponent"
import Axios from "axios"
import IScroll from "iscroll"
import "../../assets/css/category.css"
const CategoryRight = asyncComponent(() => import("./CategoryRight"))
class CategoryComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryListDatas: []
    }
    this.myScroll = null
    this.setListDatas = []
    this.cid = "858"
  }
  componentDidMount() {
    this.getCategoryData()
    this.setCategoryData()
  }
  scrollLeft = () => {
    document.getElementById("scroll-left").addEventListener("touchmove", function (e) {
      e.preventDefault()
    }, false)
    this.myScroll = new IScroll("#scroll-left", {
      scrollX: false,
      ScrollY: true,
      preventDefault: false
    })
  }
  getCategoryData = () => {
    Axios.get("/api/v4/catalog/list").then((res) => {
      if (res.data.status == "success") {
        this.setState({
          categoryListDatas: res.data.data
        }, () => {
          this.scrollLeft()
        })
      }
    })
  }
  setCategoryData = () => {
    Axios.get("/api/v4/catalog/list").then((res) => {
      if (res.data.status == "success") {
        this.setListDatas = res.data.data
        for (let i = 0; i < this.setListDatas.length; i++) {
          this.setListDatas[i].flag = false
        }
        this.setState({
          categoryListDatas: this.setListDatas
        }, () => {
          this.scrollLeft()
          this.defaultCategoryStyle()
        })
      }
    })
  }
  defaultCategoryStyle = () => {
    if (this.setListDatas.length > 0) {
      for (let i = 0; i < this.setListDatas.length; i++) {
        if (this.setListDatas[i].cat_id == this.cid) {
          this.setListDatas[i].flag = true
          break;
        }
      }
      this.setState({
        categoryListDatas: this.setListDatas
      })
    }
  }
  replacePageUrl = (pageUrl) => {
    this.props.history.replace(pageUrl)
  }
  changeCategoryStyle = (pageUrl, pageIndex) => {
    if (this.setListDatas.length > 0) {
      for (let i = 0; i < this.setListDatas.length; i++) {
        this.setListDatas[i].flag = false
      }
    }
    this.setListDatas[pageIndex].flag = true
    this.setState({
      categoryListDatas: this.setListDatas
    })
    this.replacePageUrl(pageUrl)
  }
  render() {
    return (
      <div className="pages">
        <div className="category-header">
          <div className="back"></div>
          <div className="header">分类</div>
        </div>
        <div className="category-main">
          <div id="scroll-left" className="category-left">
            <div>
              {
                this.state.categoryListDatas.map((categoryList, index) => {
                  return (
                    <div className={categoryList.flag ? "category-item active" : "category-item"} key={index} onClick={this.changeCategoryStyle.bind(this, "/mobile/category?cid=" + categoryList.cat_id, index)}>{categoryList.cat_name}</div>
                  )
                })
              }
            </div>
          </div>
          <div className="category-content">
            <Switch>
              <Route to="/mobile/category" component={CategoryRight}></Route>
              <Redirect to="/mobile/category/items"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryComponent;