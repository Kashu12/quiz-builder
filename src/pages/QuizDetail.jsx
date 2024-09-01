import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById } from '../utils/api';
import Question from '../components/Question';

const QuizDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await getQuizById(id);
      setQuiz(response.data);
    };

    fetchQuiz();
  }, [id]);

  if (!quiz) return <p>Loading...</p>;

  return (
    <div>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );
};

export default QuizDetail;
