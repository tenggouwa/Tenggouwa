import React, { Component } from 'react'
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
                key: 0,
                src: '...',
                link: '...',
            },
            {
                key: 0,
                src: '...',
                link: '...',
            },
            {
                key: 0,
                src: '...',
                link: '...',
            },
            {
                key: 0,
                src: '...',
                link: '...',
            }
        ]
        console.log(dataList)
        return (
            <div style={this.props.style} className="third">
                <div className="third-gorup">
                    <div />
                    <p>17681875268</p>
                    <button>复制地址</button>
                </div>
                <div className="third-gorup">
                    <div />
                    <p>17681875268</p>
                    <button>复制地址</button>
                </div>
                <div className="third-gorup">
                    <div />
                    <p>17681875268</p>
                    <button>复制地址</button>
                </div>
                <div className="third-gorup">
                    <div />
                    <p>17681875268</p>
                    <button>复制地址</button>
                </div>
                <div className="third-gorup">
                    <div />
                    <p>17681875268</p>
                    <button>复制地址</button>
                </div>
                <div className="third-gorup">
                    <div />
                    <p>17681875268</p>
                    <button>复制地址</button>
                </div>
            </div>
        )
    }
}
