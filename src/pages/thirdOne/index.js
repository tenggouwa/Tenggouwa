import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Message from '../../components/message/index'
import './index.scss'

export default class ThirdContant extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        const dataList = [
            {
                key: 0,
                src: 'http://admin5268.gz01.bdysite.com/Tenggouwa/Img/1.jpg',
                name: '恒生智汇云',
                link: 'https://ito.hs.net/',
            },
            {
                key: 1,
                src: 'http://admin5268.gz01.bdysite.com/Tenggouwa/Img/2.png',
                name: '33.cn复杂美',
                link: 'https://www.33.cn/',
            },
            {
                key: 2,
                src: 'http://admin5268.gz01.bdysite.com/Tenggouwa/Img/3.jpg',
                name: '找币交易所',
                link: 'https://www.zhaobi.com/#/index',
            },
            {
                key: 3,
                src: 'http://admin5268.gz01.bdysite.com/Tenggouwa/Img/4.jpg',
                name: 'Fortuna官网',
                link: 'https://fota.io/',
            },
            {
                key: 4,
                src: 'http://admin5268.gz01.bdysite.com/Tenggouwa/Img/5.jpg',
                name: 'FortunaBBS论坛',
                link: 'https://bbs.fota.io/',
            },
            {
                key: 5,
                src: 'http://admin5268.gz01.bdysite.com/Tenggouwa/Img/6.jpg',
                name: '方塔衍生品交易平台',
                link: 'http://47.96.74.52:8089/home4',
            }
        ]
        return (
            <div style={this.props.style} className="third">
                {
                    dataList.map(item => (
                        <div className="third-gorup" key={item.key}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <div
                                    className="third-back"
                                    style={{
                                        background: `url('${item.src}') no-repeat center`,
                                    }}
                                />
                            </a>
                            <p>{item.name}</p>
                            <CopyToClipboard key="copyToClipboard" text={item.link} onCopy={() => { Message.success('地址已经复制到您的剪切板了哦！') }}>
                                <button>复制地址</button>
                            </CopyToClipboard>
                        </div>
                    ))
                }
            </div>
        )
    }
}
