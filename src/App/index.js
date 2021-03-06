import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import ss from './styles';
import Header from 'components/Header';
import Question from 'components/Question';
import Answers from 'components/Answers';
import Footer from 'components/Footer';

import { newQuestion, chooseAnswer } from 'store/actions';

class App extends Component {
    componentWillMount() {
        this.props.newQuestion();
    }
    render() {
        const {
            question,
            answers,
            result,
            chooseAnswer,
            newQuestion,
            score,
        } = this.props;
        return (
            <div>
                <Header score={score} />
                <div className={css(ss.Container)}>
                    <Question {...question} />
                    <Answers
                        answers={answers}
                        result={result}
                        choiceHandler={chooseAnswer}
                        retry={newQuestion}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = {
    newQuestion,
    chooseAnswer,
};

const matchStateToProps = ({ question, answers, result, score }) => ({
    question,
    answers,
    result,
    score,
});

export default connect(
    matchStateToProps,
    mapDispatchToProps,
)(App);
