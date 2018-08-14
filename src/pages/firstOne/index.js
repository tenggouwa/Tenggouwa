import React, { Component } from 'react'

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
            <div style={this.props.style}>
                One
            </div>
        )
    }
}
