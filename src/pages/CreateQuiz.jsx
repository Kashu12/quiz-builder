import React, { useState } from 'react';
import { createQuiz } from '../utils/api';

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], answer: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quizData = {
      title,
      questions,
    };
    try {
      await createQuiz(quizData);
      alert('Quiz created successfully');
    } catch (error) {
      console.error('Failed to create quiz', error);
    }
  };

  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index][e.target.name] = e.target.value;
    setQuestions(newQuestions);
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Quiz Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        {questions.map((question, index) => (
          <div key={index}>
            <label>Question {index + 1}</label>
            <input
              type="text"
              name="question"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e)}
            />
            {question.options.map((option, optIndex) => (
              <input
                key={optIndex}
                type="text"
                name={`option${optIndex}`}
                value={option}
                onChange={(e) => {
                  const newOptions = [...question.options];
                  newOptions[optIndex] = e.target.value;
                  setQuestions((prevQuestions) =>
                    prevQuestions.map((q, qIndex) =>
                      qIndex === index ? { ...q, options: newOptions } : q
                    )
                  );
                }}
              />
            ))}
          </div>
        ))}
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
