import React, { Component } from 'react'
import './index.scss'

export default class FourthContant extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        const Active = this.props.Init
        return (
            <div style={this.props.style} className="fourth">
                <div className="fourth-main">
                    {/* 头像 */}
                    <div className={Active ? 'fourth-head-active fourth-head' : 'fourth-head'} />
                    {/* 内容 */}
                    <div className="fourth-contain">
                        <div>
                            <a href="https://github.com/tenggouwa" rel="noopener noreferrer" target="_blank">
                                <i className="iconfont icon-github" />
                            </a>
                        </div>
                        <div>
                            <i className="iconfont icon-weixin-copy" />
                        </div>
                        <div>
                            <i className="iconfont icon-youxiang-copy" />
                        </div>
                        <div>
                            <i className="iconfont icon-web-icon-" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
