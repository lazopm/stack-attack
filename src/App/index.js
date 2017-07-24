import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import ss from './styles';
import Header from 'components/Header';
import Question from 'components/Question';
import Answers from 'components/Answers';

import { newQuestion } from 'store/actions';

class App extends Component {
    componentWillMount() {
        this.props.newQuestion();
    }
    render() {
        const { question, answers } = this.props;
        return (
            <div>
                <Header/>
                <div className={css(ss.Container)}>
                    <Question {...question} />
                    <Answers answers={answers} />
                </div>
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
