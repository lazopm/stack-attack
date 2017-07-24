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

const matchStateToProps = ({
    question,
    answers
}) => ({
    question,
    answers,
});

export default connect(matchStateToProps, mapDispatchToProps)(App);
