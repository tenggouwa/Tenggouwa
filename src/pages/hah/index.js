import React, { Component } from 'react'
import Swiper from '@/components/swiper/index1'

export default class FirstContant extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="first">
                <Swiper />
            </div>
        )
    }
}
