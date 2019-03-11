import React from 'react'
import './index.scss'

export default function NextClickTick(props) {
    return (
        <div className="light-swip" onClick={props.NextClick}>
            <div className="ActiveHead">
                <i className="iconfont icon-jiantouxia" />
                <div className="lightOne" />
                <div className="lightTwo" />
                <div className="lightThree" />
            </div>
        </div>
    )
}
