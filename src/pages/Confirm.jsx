import React, { Component } from 'react'
import '../styles/Confirm.css'
import url from  'url'
import { parse } from 'querystring';

export default class Confirm extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        let props = this.props.location.search
        console.log('url.parse(props)', url.parse(props, true).query)
    }
    render() {
        return (
            <div className='confirm_wrap'>
                Confirm
            </div>
        )
    }
}
