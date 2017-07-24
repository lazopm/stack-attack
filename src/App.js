import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newQuestion } from 'store/actions';
import Answer from 'components/Answer';
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
                {answers.map(({ id, ...props }) =>
                    <Answer key={id} {...props} />
                )}
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
