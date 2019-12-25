import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Tabbar.css'

export default class Tabbar extends Component {
    render () {
        if( this.props) {
            return (
                <div className="tabber_box">
                    <ul>
                        <li>
                            {
                                this.props.activeClass === 'activeIndex' ? <Link to="/" className="com-footer-index com-footer-index-active">首页</Link> : <Link to="/" className="com-footer-index">首页</Link>
                            }
                        </li>
                        <li>
                            {
                                this.props.activeClass === 'activeClass' ? <Link to="class" className="com-footer-classify com-footer-classify-active">分类</Link> : <Link to="class" className="com-footer-classify">分类</Link>
                            }
                        </li>
                        <li>
                            {
                                this.props.activeClass === 'activeMy' ? <Link to="my" className="com-footer-my com-footer-my-active">我的</Link> : <Link to="my" className="com-footer-my">我的</Link>
                            }
                        </li>
                    </ul>
                </div>
            )
        }
    }
}