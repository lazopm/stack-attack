import React from 'react';

const Question = ({
    title,
    body,
}) =>
    <div>
        <h2 dangerouslySetInnerHTML={{__html: title}}/>
        <div dangerouslySetInnerHTML={{__html: body}}/>
    </div>;

export default Question;
