import React, { Component } from 'react'
import './css/Goods.css'
import Label from './Label'
import {Link} from 'react-router-dom';

export class Goods extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
    }
    render() {
        const goods_data = this.props.goods_data
        return (
                <li className="recommand_box">
                <Link to="../pages/Detail">
                    <div className="recommand_img">
                        <img src={goods_data.base_pic} alt=""/>
                    </div>
                    <div className="recommand_info">
                        <div className="recommand_title">
                            <p className="betweenTwo">{goods_data.item_name}</p>
                        </div>
                        <div className="recommand_label">
                            <Label label_list={goods_data.help_red_packet_tag_list}/>
                        </div>
                        <div className="recommand_info_down flex_wrap">
                            <p className="recommand_pirce">
                                ￥<span>{goods_data.real_price}</span>
                                <span className="recommand_original_price">{goods_data.original_price}</span>
                            </p>
                            <p className="recommand_icon">
                                <span className="iconfont iconjia"></span>
                            </p>
                        </div>
                    </div>
            </Link>
                </li>
        )
    }
}

export default Goods
