import React from 'react';

const Question = ({ question }) => {
  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <div key={index}>
          <input type="radio" name="answer" />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
