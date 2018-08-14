import React, { Component } from 'react'
import './index.scss'

export default class FirstContant extends Component {
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
            <div style={this.props.style} className="first">
                <div className={Active ? 'first-tit-active first-tit' : 'first-tit'}>
                    <h1>WEB</h1>
                    <p>前端工程师</p>
                </div>
                <br />
                <div className={Active ? 'first-poem-active first-poem' : 'first-poem'}>
                    <p>莫愁前路无知己，天下谁人不识君。</p>
                    <p>Do not worry that no one is your close friend, everyone under the sun knows about you.</p>
                </div>
                <div className="light-swip" onClick={this.props.NextClick}>
                    <div className="ActiveHead">
                        <i className="iconfont icon-jiantouxia" />
                        <div className="lightOne" />
                        <div className="lightTwo" />
                        <div className="lightThree" />
                    </div>
                </div>
            </div>
        )
    }
}
