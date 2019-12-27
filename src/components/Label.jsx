import React, { Component } from 'react'
import './css/Label.css'

export default class Label extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <ul className="com_label">
                {
                    this.props.label_list.map((item, key) => {
                        return (
                            <li className="com_label_li" key={key}>{item}</li>
                        )
                    })
                }
            </ul>
        )
    }
}
