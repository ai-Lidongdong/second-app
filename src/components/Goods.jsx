import React, { Component } from 'react'
import './css/Goods.css'

export class Goods extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const goods_data = this.props.goods_data
        return (
            <li className="recommand_box">
                <div className="recommand_img">
                    <img src={goods_data.base_pic} alt=""/>
                </div>
                <div className="recommand_info">
                    <div className="recommand_title">{goods_data.item_name}</div>
                    <div className="recommand_label">
                      {
                          goods_data.help_red_packet_tag_list && goods_data.help_red_packet_tag_list.map((item, key) => {
                              return (
                                  <label></label>
                              )
                          })
                      }
                    </div>
                    <div className="recommand_info_down">
                        <p className="recommand_pirce"></p>
                        <p className="recommand_icon"></p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Goods
