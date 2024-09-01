import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserQuizzes } from '../utils/api';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await getUserQuizzes(); // API call to get quizzes
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="dashboard">
      <h2>Your Quizzes</h2>
      <Link to="/create-quiz" className="create-quiz-button">Create New Quiz</Link>
      <div className="quiz-list">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <div key={quiz._id} className="quiz-item">
              <h3>{quiz.title}</h3>
              <p>Type: {quiz.type}</p>
              <p>Impressions: {quiz.impressions}</p>
              <div className="quiz-actions">
                <Link to={`/quiz/${quiz._id}`} className="view-button">View</Link>
                <Link to={`/edit-quiz/${quiz._id}`} className="edit-button">Edit</Link>
              </div>
            </div>
          ))
        ) : (
          <p>You haven't created any quizzes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
