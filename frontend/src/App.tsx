import React from 'react';
import './App.css';

function App() {
  const handleSupportClick = () => {
    console.log('Opening REDO Customer Support...');
    alert('Welcome to REDO Customer Support! 🎉');
  };

  return (
    <div className="app-container">
      <button onClick={handleSupportClick} className="support-button">
        REDO Customer Support
      </button>
    </div>
  );
}

export default App;