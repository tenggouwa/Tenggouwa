import React, { Component } from 'react'
import './index.scss'

export default class SecondContant extends Component {
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
            <div style={this.props.style} className="second" >
                <div className="second-main">
                    {/* 头像 */}
                    <div className={Active ? 'second-head-active second-head' : 'second-head'} />
                    {/* 内容 */}
                    <div className="second-contain">
                        <div className={Active ? 'second-title-active second-title' : 'second-title'}>
                            <p>滕华伟 - 男 - 93</p>
                            <p>web前端开发工程师</p>
                        </div>
                        <div className="second-block">
                            <div className={Active ? 'second-group-active second-group' : 'second-group'}>
                                <p style={{ opacity: '0.5' }}>4-5年</p>
                                <p style={{ opacity: '0.5' }}>区块链</p>
                                <p style={{ opacity: '0.5' }}>IT</p>
                            </div>
                            <div className={Active ? 'second-group-active second-group' : 'second-group'}>
                                <p style={{ opacity: '0.7' }}>Javascript</p>
                                <p style={{ opacity: '0.8' }}>H5/CSS3</p>
                                <p style={{ opacity: '0.8' }}>JQ</p>
                            </div>
                            <div className={Active ? 'second-group-active second-group' : 'second-group'}>
                                <p style={{ opacity: '0.7' }}>react</p>
                                <p style={{ opacity: '0.8' }}>vue</p>
                                <p style={{ opacity: '0.8' }}>webpack/gulp</p>
                                <p style={{ opacity: '0.8' }}>git/svn</p>
                                <p style={{ opacity: '0.4' }}>angular</p>
                            </div>
                            <div className={Active ? 'second-group-active second-group' : 'second-group'}>
                                <p style={{ opacity: '0.7' }}>ES6,7</p>
                                <p style={{ opacity: '0.8' }}>axios</p>
                                <p style={{ opacity: '0.7' }}>echarts</p>
                                <p style={{ opacity: '0.5' }}>Canvas/Svg</p>
                            </div>
                            <div className={Active ? 'second-group-active second-group' : 'second-group'}>
                                <p style={{ opacity: '0.8' }}>ElementUI</p>
                                <p style={{ opacity: '0.8' }}>AntD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
