import React from 'react';
import './ErrorScreen.css';
const ErrorScreen = ({ message }) => {
  return (
    <div className="error-container">
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorScreen;