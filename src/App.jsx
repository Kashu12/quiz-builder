import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import CreateQuiz from './pages/CreateQuiz';
import QuizDetail from './pages/QuizDetail';
import Login from './pages/login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Dashboard} />
        <Route path="/create-quiz" component={CreateQuiz} />
        <Route path="/quiz/:id" component={QuizDetail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


