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
                src: '...',
                link: '...',
            },
            {
                key: 1,
                src: '...',
                link: '...',
            },
            {
                key: 2,
                src: '...',
                link: '...',
            },
            {
                key: 3,
                src: '...',
                link: '...',
            },
            {
                key: 4,
                src: '...',
                link: '...',
            },
            {
                key: 5,
                src: '...',
                link: '...',
            }
        ]
        return (
            <div style={this.props.style} className="third">
                {
                    dataList.map(item => (
                        <div className="third-gorup" key={item.key}>
                            <div />
                            <p>{item.src}</p>
                            <CopyToClipboard key="copyToClipboard" text={item.src} onCopy={() => { Message.success('复制成功') }}>
                                <button>复制地址</button>
                            </CopyToClipboard>
                        </div>
                    ))
                }
            </div>
        )
    }
}
