import React, { Component } from 'react'
import '../styles/Index.css'
import '../common/css/app.css'
import Header from '../components/Header'
import ReactSwipe from 'react-swipe';
import AxiosPost from '../services/request'
import Goods from '../components/Goods'
import {Link} from 'react-router-dom';

export class Index extends Component {
    constructor() {
        super();
        this.state = {
            banner_list: [
                {},
                {},
                {},
            ],
            nav_list: [],
            game_img: {},
            user_item_recommend: {
                item_list: [],
            },
            new_old: [
                111111
            ],
            activity_card: {
                left: {},
                right_top: {},
                right_bottom: {}
            },
            item_floor: [
                { itme_list: [] }
            ],
            success: false
        }
    }
    componentDidMount() {
        console.log('-------componentDidMount-----')
        this.getFirstData()
    }
    getFirstData = () => {
        let param = {
            api_name: "kyk.itemV2.getHomePagePartOne",
        }
        AxiosPost(param).then((res) => {
            let { banner_list, nav_list, game_img, user_item_recommend, activity_card, promise_list, ad_list } = res.data.list
            let first_list = res.data.list
            this.setState({
                banner_list,
                first_list,
                nav_list,
                game_img,
                user_item_recommend,
                activity_card,
                promise_list,
                ad_list
            })
            this.getSecondData()
        }).catch((err) => {
        })
    }
    getSecondData = () => {
        let param = {
            api_name: "kyk.itemV2.getHomePagePartTwo",
        }
        AxiosPost(param).then((res) => {
            let { item_floor, item_recommend_nav_list } = res.data.list
            this.setState({
                item_floor,
                item_recommend_nav_list,
                success: true,
            })
            this.getThirdData(item_recommend_nav_list[0].index_ads_id)
        }).catch((err) => {
        })
    }
    getThirdData = (id) => {
        console.log('---third0000')
        let param = {
            api_name: "kyk.itemV2.getHomePageItemRecommendList",
            recommend_id: id,
            first_row: 0,
            fetch_num: 10,
        }
        console.log('---third0000')
        AxiosPost(param).then((res) => {
            this.setState({
                goods_list: res.data.list
            })
        }).catch((err) => {
        })
    }
    render() {
        const {
            banner_list,    //顶部banner轮播图
            nav_list,   //导航标题
            user_item_recommend,    //新老用户
            item_floor, //商品楼层
            item_recommend_nav_list,    //推荐商品分类标题
            goods_list  //推荐商品

        } = this.state
        return (
            <div className="wrap">
                <Header />
                <div className="header">
                    <ReactSwipe className="carousel">
                        {
                            banner_list.map((item, key) => {
                                return (
                                    <div className="banner_img" key={key}>
                                        <img src={item.pic} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </ReactSwipe>
                </div>
                <div className="content">
                    <div className="nav_list flex_wrap">
                        {
                            nav_list.map((item, key) => {
                                return (
                                    <div className="nav_box" key={key}>
                                        <img src={item.pic} alt="" />
                                        <p>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="conduct">
                        <img src={this.state.game_img.img_url} alt=""/>
                    </div>
                    <div className="new_old_box_max">
                        <div className="new_old_box">
                            <ul className="new_old">
                                {
                                    user_item_recommend.item_list.map((item, key) => {
                                        return (
                                            <Link to={`/Detail/${item.item_id}`}>
                                                <li className={key > 0 ? 'goods_box goods_active' : 'goods_box'} key={key}>
                                                    <img className="goods_img" src={item.base_pic} alt=""/>
                                                    <div className="goods_info">
                                                        <div className="title betweenTwo">{item.item_name}</div>
                                                        <div className="price">￥<span>{item.real_price}</span></div>
                                                    </div>
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="activity_cart flex_wrap">
                        <div className="cart_left">
                            <img src={this.state.activity_card.left.pic} alt=""/>
                        </div>
                        <div className="cart_right">
                            <p className="first_right"><img src={this.state.activity_card.right_top.pic} alt=""/></p>
                            <p><img src={this.state.activity_card.right_bottom.pic} alt=""/></p>
                        </div>
                    </div>
                    <div className="floor_list">
                        {
                            item_floor.map((item, key) => {
                                return (
                                    <div className="floor_box" key={key}>
                                        <div className="floor_img">
                                            <img src={item.pic} alt=""/>
                                        </div>
                                        <ul className="floor_goods">
                                            {
                                                item.item_list && item.item_list.map((item, index) => {
                                                    return (
                                                        <li className="goods_child" key={index}>
                                                            <img className="base_pic" src={item.base_pic} alt=""/>
                                                            <div className="floor_goods_info">
                                                                <div className="title betweenTwo">{item.item_name}</div>
                                                                <p className="label">
                                                                    {
                                                                        item.help_red_packet_tag_list && item.help_red_packet_tag_list.map((item, index) => {
                                                                            return (
                                                                                <span key={index}>
                                                                                    {item}
                                                                                </span>
                                                                            )
                                                                        })
                                                                    }
                                                                </p>
                                                                <div className="floor_price flex_wrap">
                                                                    <div className="real_price">
                                                                        <p>
                                                                            <span className="mark" style={{ fontSize: '1px' }}>￥</span>
                                                                            <span className="real_price_now">{item.real_price}</span>
                                                                        </p>
                                                                        <p className="original_price">{item.original_price}</p>
                                                                    </div>
                                                                    <div className="add_cart">
                                                                        <span className="iconfont iconjia"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="footer">
                    <div className="foot_nav">
                        {
                            item_recommend_nav_list && item_recommend_nav_list.map((item, index) => {
                                return (
                                    <div className="nav_title" key={index}>
                                        <div className="first_title">{item.title}</div>
                                        <div className="secondary">{item.sub_title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="recommand_goods flex_wrap">
                        {
                            goods_list && goods_list.item_list.map((item, key) => {
                                return (
                                    <Goods key={key} goods_data={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }
}

export default Index
