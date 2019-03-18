/* eslint-disable */
import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Img from '@/assets/img/message/1.png'
import './index1.scss'
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
export default class Example extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
  }
  filterUpDown = (amount) => {
      return amount.indexOf('-') !== -1
  }

  render() {
    return(
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
              coinList.map((item) => (
                  <div key={item.index} className="swiper-slide">
                      <h5>{item.name}</h5>
                      <img src={item.image} />
                      <span className="swipe-lable">最新价</span>
                      <div className="swipe-content">
                          <span>{item.price}</span>
                          <span className={this.filterUpDown(item.updown) ? 'swipe-up' : 'swipe-down'}>{item.updown}</span>
                      </div>
                      <span className="swipe-lable">成交额</span>
                      <div className="swipe-content">
                          <span>{item.amount}</span>
                      </div>
                  </div>
              ))
          }
        </div>
        <div className="swiper-pagination" />
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    )
  }
}