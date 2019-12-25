import React, { Component } from 'react'

export class Goods extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        const goods_data = this.props.goods_data
        return (
            <li>
                <div className="recommand_img">
                    <img src=""/>
                </div>
                <div className="recommand_info">
                    <div className="recommand_title"></div>
                    <div className="recommand_label"></div>
                    <div className="recommand_info_down">
                        <p class="recommand_pirce"></p>
                        <p class="recommand_icon"></p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Goods
