import React from 'react';
import styles from '../styles/QuizCard.module.css';
import { Link } from 'react-router-dom';

const QuizCard = ({ quiz }) => {
  return (
    <div className={styles.quizCard}>
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <p>Impressions: {quiz.impressions}</p>
      <Link to={`/quiz/${quiz.id}`}>Take Quiz</Link>
    </div>
  );
};

export default QuizCard;
