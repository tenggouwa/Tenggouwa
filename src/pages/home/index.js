import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { I18n } from 'react-i18next';
// import styles from './home.scss';

// import ReactDom from 'react-dom';

// console.log(styles);
function mapStateToProps(state) {
    return state;
}

@connect(mapStateToProps)
export default class App extends Component {
    static propTypes = {
        test: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.state = {
            d: 11111
        };
    }
    // const t2 = '123';
    render() {
        const { test } = this.props;
        return <div>1231212{this.state.d}{test}</div>;
    }
}

App.defaultProps = {
    test: 1
};
