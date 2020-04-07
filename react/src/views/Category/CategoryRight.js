import React, { Component } from 'react';
import Axios from "axios"
import url from "url"
import IScroll from "iscroll"
class CategoryRight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsListDatas: []
    }
    this.myScroll = null
  }
  componentDidMount() {
    this.getGoodsData(858)
  }
  componentWillReceiveProps(newProps) {
    let query = url.parse(newProps.location.search, true).query
    let cid = query.cid
    if (cid) {
      this.getGoodsData(cid)
    }
  }
  scrollRight = () => {
    document.getElementById("scroll-right").addEventListener("touchmove", function (e) {
      e.preventDefault()
    }, false)
    this.myScroll = new IScroll("#scroll-right", {
      scrollX: false,
      ScrollY: true,
      preventDefault: false
    })
  }
  getGoodsData = (cid) => {
    Axios.get("/api/v4/catalog/list/" + cid).then((res) => {
      if (res.data.status == "success") {
        this.setState({
          goodsListDatas: res.data.data
        }, () => {
          this.scrollRight()
        })
      }
    })
  }
  render() {
    return (
      <div className="goods-content-wrap" id="scroll-right">
        <div>
          {
            this.state.goodsListDatas.map((goodsList, index) => {
              return (
                <div className="goods-wrap" key={index}>
                  <div className="category-name">{goodsList.cat_name}</div>
                  <div className="goods-item-wrap">
                    {
                      goodsList.child.map((goods, index) => {
                        return (
                          <ul key={index}>
                            <li><img src={goods.touch_icon} alt="" /></li>
                            <li>{goods.cat_name}</li>
                          </ul>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default CategoryRight;