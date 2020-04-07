import React, { Component } from 'react';
import Swiper from "swiper"
import "../../assets/css/index.css"
import "../../assets/css/swiper.min.css"
class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerLists: [{
                "id": 1,
                "imgsrc": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d1fb47f07c29a6da962edf16dda7a76.jpg?thumb=1&w=720&h=360"
            }, {
                "id": 2,
                "imgsrc": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af6a1aaf908b750bbeacd7e0d1945086.jpg?thumb=1&w=720&h=360"
            }, {
                "id": 3,
                "imgsrc": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88777c26c1017590a9f1f6df42189b5e.jpg?thumb=1&w=720&h=360"
            }],
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
        }
    }
    componentDidMount() {
        this.getBanner()
    }
    getBanner = () => {
        new Swiper(".swiper-container", {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    render() {
        return (
            <div className="page">
                {/*头部*/}
                <div className="home-header">蓝果小镇商城</div>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.bannerLists.map((banner, key) => {
                                return (
                                    <div className="swiper-slide" key={key}>
                                        <img src={banner.imgsrc} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 商品列表 */}
                <div class="home-product">
                    <div class="home-product-list">
                        <ul>
                            {
                                this.state.homeListDatas.map((list, key) => {
                                    return (
                                        <li>
                                            <a href="">
                                                <img src={list.imgsrc} alt />
                                                <h3>{list.title}</h3>
                                                <span class="price">{list.price}</span>
                                                <span class="unprice">{list.unprice}</span>
                                                <div class="new-product">新品</div>
                                                <div class="sales">销售: 0</div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}

export default HomeComponent;