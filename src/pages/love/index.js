import React, { Component } from 'react'
import LoveItem from './loveItem.js'
import './index.scss'

export default class Love extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loveList: [],
            activeStatus: false
        }
    }
    componentDidMount() {
        this.init()
    }
    init = () => {
        const loveList = []
        for (let i = 0; i <= 300; i += 1) {
            loveList[i] = i
        }
        this.setState({ loveList })
        this.setState({ activeStatus: true })
    }
    render() {
        const { loveList, activeStatus } = this.state
        return (
            <div className="love">
                {
                    loveList.map(() => (
                        <LoveItem />
                    ))
                }
                <div className="love-font">
                    <div className={activeStatus ? 'font-item active' : 'font-item'}>花花花 !!!!! 520快乐  臭三皮  Hello</div>
                </div>
            </div>
        )
    }
}
