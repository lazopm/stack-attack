import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newQuestion } from 'store/actions';

class App extends Component {
    componentWillMount() {
        this.props.newQuestion();
    }
    render() {
        return (
            <div>
                hello world
            </div>
        );
    }
};
const mapDispatchToProps = {
    newQuestion,
};

export default connect(null, mapDispatchToProps)(App);
