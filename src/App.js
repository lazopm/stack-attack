import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newQuestion } from 'store/actions';
import Answers from 'components/Answers';
import Question from 'components/Question';

class App extends Component {
    componentWillMount() {
        this.props.newQuestion();
    }
    render() {
        const { question, answers } = this.props;
        return (
            <div>
                <Question {...question} />
                <Answers answers={answers} />
            </div>
        );
    }
};

const mapDispatchToProps = {
    newQuestion,
};

const matchStateToProps = ({
    busy,
    question,
    answers
}) => ({
    busy,
    question,
    answers,
});

export default connect(matchStateToProps, mapDispatchToProps)(App);
