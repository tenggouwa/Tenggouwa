import React, { Component } from 'react'
import FirstContant from '../firstOne'
import SecondContant from '../secondOne'
import ThirdContant from '../thirdOne'
import FourthContant from '../fourthOne'
import './home.scss'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerList: [{
                bg: '#f6f6f6'
            },
            {
                bg: '#87d9e1'
            },
            {
                bg: '#8185d7'
            },
            {
                bg: '#e187cf'
            }],
            offsetheight: document.documentElement.clientHeight, // 获取当前页面的高度
            fullPage: -1, // 当前在第几页
            fullPageNum: false, // 是否在滑动
        }
        this.scroll = this.scroll.bind(this)
        this.pageInfo = this.pageInfo.bind(this)
        this.InitPage = this.InitPage.bind(this)
        this.goUpDown = this.goUpDown.bind(this)
    }
    componentDidMount() {
        setTimeout(() => {
            this.InitPage()
        }, 100)
        // 添加鼠标滑动事件
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', this.scroll, false)
        }
        document.onmousewheel = window.onmousewheel = this.scroll.bind(this)
    }
    InitPage() {
        this.setState({ fullPage: 0 })
    }
    // 点击左侧小点时跳转到相应的page
    pageInfo(index) {
        this.setState({
            fullPage: index
        })
    }
    // 鼠标事件
    scroll(f) {
        const e = f || window.event
        // 是否正在滑动
        if (this.state.fullPageNum) {
            return false
        }
        //   e.wheelDelta为负数时向下滑动
        if (e.wheelDelta < 0) {
            if (this.state.fullPage >= 3) {
                return false
            }
            this.goUpDown(1)
        //   否则就是向上划
        } else {
            if (this.state.fullPage <= 0) {
                return false
            }
            this.goUpDown(0)
        }
        return true
    }
    // 向上0或者向下1
    goUpDown(e) {
        this.setState({ fullPageNum: true })
        if (e === 0) {
            this.pageInfo(this.state.fullPage - 1)
        } else {
            this.pageInfo(this.state.fullPage + 1)
        }
        setTimeout(() => {
            this.setState({ fullPageNum: false })
        }, 1000)
    }
    NextTick() {
        this.goUpDown(1)
    }
    render() {
        return (
            <div className="section" style={{ height: this.state.offsetheight + 'px' }}>
                <div className="container" style={{ height: this.state.offsetheight + 'px', transform: 'translate3d(0px, -' + (this.state.fullPage * this.state.offsetheight) + 'px ,0px)' }}>
                    <FirstContant NextClick={() => { this.NextTick() }} Init={this.state.fullPage === 0} style={{ height: this.state.offsetheight + 'px' }} />
                    <SecondContant NextClick={() => { this.NextTick() }} Init={this.state.fullPage === 1} style={{ height: this.state.offsetheight + 'px' }} />
                    <ThirdContant NextClick={() => { this.NextTick() }} Init={this.state.fullPage === 2} style={{ height: this.state.offsetheight + 'px' }} />
                    <FourthContant NextClick={() => { this.NextTick() }} Init={this.state.fullPage === 3} style={{ height: this.state.offsetheight + 'px' }} />
                </div>
                <div className="fixed-list">
                    {
                        this.state.bannerList.map((item, index) => (
                            <div
                                key={index}
                                className={this.state.fullPage === index ? 'color' : ''}
                                onClick={() => { this.pageInfo(index) }}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}
