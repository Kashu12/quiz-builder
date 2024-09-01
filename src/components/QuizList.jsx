import React, { useEffect, useState } from 'react';
import QuizCard from './Quizcard';
import { getAllQuizzes } from '../utils/api';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await getAllQuizzes();
      setQuizzes(response.data);
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizList;
