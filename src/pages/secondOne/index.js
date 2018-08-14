import React, { Component } from 'react'

export default class SecondContant extends Component {
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
                Two
            </div>
        )
    }
}
