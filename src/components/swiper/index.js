import React from 'react'
import Img from '../../assets/img/message/1.png'
import './index.scss'

/* eslint-disable */

const coinList = [
    {
        name: 'WICC/HHH',
        image: Img,
        price: '171.44/￥1.039',
        updown: '-1.27%',
        amount: '134,8338 KRW / ￥817.314'
    },
    {
        name: 'WICC/HHH',
        image: Img,
        price: '171.44/￥1.039',
        updown: '1.27%',
        amount: '134,8338 KRW / ￥817.314'
    },
    {
        name: 'WICC/HHH',
        image: Img,
        price: '171.44/￥1.039',
        updown: '-1.27%',
        amount: '134,8338 KRW / ￥817.314'
    },
    {
        name: 'WICC/HHH',
        image: Img,
        price: '171.44/￥1.039',
        updown: '1.27%',
        amount: '134,8338 KRW / ￥817.314'
    },
    {
        name: 'WICC/HHH',
        image: Img,
        price: '171.44/￥1.039',
        updown: '1.27%',
        amount: '134,8338 KRW / ￥817.314'
    },
    {
        name: 'WICC/HHH',
        image: Img,
        price: '171.44/￥1.039',
        updown: '1.27%',
        amount: '134,8338 KRW / ￥817.314'
    }
]
export default class swiper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          currentIndex: 0,
          coinLength: coinList.length,
        }
    }
    componentDidMount() {
        this.swiperLoop()
    }
    componentWillUnmount() {
        this.clearInter()
    }
    filterUpDown = (amount) => {
        return amount.indexOf('-') !== -1
    }
    // 开始定时
    swiperLoop = () => {
        this.interval = setInterval(() => {
            this.goNext()
        }, 3000)
    }
    clearInter = () => {
        clearInterval(this.interval)
    }
    // 选择是否放到尽头
    filterBack = (type) => {
        if (type === 'up') {
            if (this.state.currentIndex !== 0) {
                if (this.state.coinLength >= Math.abs(this.state.currentIndex)) {
                    return true
                } else {
                    return false
                }
            } else{
                return false
            }
        } else {
            if (this.state.coinLength <= Math.abs(this.state.currentIndex)) {
                return false
            } else {
                return true
            }
        }
    }
    // 向前加一
    goUp = () => {
        if (this.filterBack('up')) {
            this.setState({
                currentIndex: this.state.currentIndex + 1,
            })
        }
        
    }
    // 向后加一
    goNext = () => {
        if (this.filterBack('next')) {
            this.setState({
                currentIndex: this.state.currentIndex - 1,
            })
        }
        if (Math.abs(this.state.currentIndex) === this.state.coinLength) {
            this.setState({
                currentIndex: 0,
            })
        }
    }
    // clon币种列表
    filterCopy = (e) => {
        const copy = JSON.parse(JSON.stringify(e))
        const list = e.concat(copy)
        list.forEach((one, i) => {
            list[i].index = i + 1;
        });
        return list
    }
    render() {
        return (
            <div className="swiper">
                <div
                    className="swiper-main"
                    onMouseOver={this.clearInter}
                    onMouseOut={this.swiperLoop}
                    style={{ left: `${(this.state.currentIndex) * 306 + 50}px`
                    }}>
                    {
                        this.filterCopy(coinList).map((item) => (
                            <div key={item.index} className="swiper-item">
                                <h5>{item.name}</h5>
                                <img src={item.image} />
                                <span className="swiper-lable">最新价</span>
                                <div className="swiper-content">
                                    <span>{item.price}</span>
                                    <span className={this.filterUpDown(item.updown) ? 'swiper-up' : 'swiper-down'}>{item.updown}</span>
                                </div>
                                <span className="swiper-lable">成交额</span>
                                <div className="swiper-content">
                                    <span>{item.amount}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="changeItem right" onClick={ this.goNext }>
                    next
                </div>
                <div className="changeItem" onClick={ this.goUp }>
                    up
                </div>
            </div>
        )
    }
}
