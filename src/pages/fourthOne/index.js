import React, { Component } from 'react'

export default class FourthContant extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        console.log(this.props.style)
    }
    render() {
        return (
            <div style={this.props.style}>
                Four
            </div>
        )
    }
}
