import React, { Component } from 'react'

  import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import AxiosPost from '../services/request'
//  import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import  '../styles/Detail.css'


export default class Detail extends Component {
    constructor(props) {
        super();
        this.state = {
        }
    }
    componentDidMount() {
        console.log('props', this.props)
        this.getDetailData()
    }
    getDetailData = () => {
        let param = {
            item_id: 1304,
            api_name: "kyk.item.getItemInfonew",
            third_tag: 1,
        }
        AxiosPost(param).then((res) => {
            console.log('res', res)
            this.setState({
                data_json: res.data.list
            })
        }).catch((err) => {
        })
    }
    render() {
        const settings = {
            infinite: true,
            speed: 2000,    //滑动持续时间
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        const data_json = this.state.data_json
        return (
            <div className="wrap">
                <header>
                    <Slider {...settings}>
                        {
                            this.state.data_json && data_json.banner_pic.map((item, key) => {
                                return (
                                    <img key={key} src={item} />
                                )
                            })
                        }
                    </Slider>
                </header>
                <div className="content">
                    <div className="content_top">
                        <div className="con_top_price">
                            <p>
                                ￥<span>{data_json && data_json.special_price}</span>
                                <span>{data_json && data_json.old_original_price}</span>
                            </p>
                        </div>
                        <div className="con_top_title">{data_json && data_json.item_name}</div>
                        <div className="con_top_sub_title">{data_json && data_json.item_sub_title}</div>
                        <div>
                            <img src="" />
                        </div>
                    </div>
                </div>
                <div className="down_but">
                <Link className="link" to={`/Confirm?order_id=${33}`}>
                <div>跳转下单s页</div>
                </Link>
                </div>
            </div>
        )
    }
}
