import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Quiz Builder</h1>
      </div>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/create-quiz">Create Quiz</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;