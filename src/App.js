import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/home';
import Login from './components/login/login';
import WelcomeUser from './Welcome';

function App() {
  // 1. User State
  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem('app_user') || null;
  });
  
  // 2. UI States
  const [introFinished, setIntroFinished] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Controls visibility of Login Screen

  // --- ACTIONS ---
  
  const handleLogout = () => {
    localStorage.removeItem('app_user');
    setCurrentUser(null);
    setIntroFinished(false);
  };

  const handleLoginSuccess = (username) => {
    localStorage.setItem('app_user', username);
    setCurrentUser(username);
    setIntroFinished(false);
    setShowLogin(false); // Close login screen
  };

  // --- RENDER LOGIC ---

  // A. If "Show Login" is clicked, show the Login Component
  if (showLogin) {
    return (
      <Login 
        onLoginSuccess={handleLoginSuccess} 
        onCancel={() => setShowLogin(false)} // Pass a close function
      />
    );
  }

  // B. If User just logged in, show Welcome Animation
  if (currentUser && !introFinished) {
    return (
      <WelcomeUser 
        username={currentUser} 
        onAnimationEnd={() => setIntroFinished(true)} 
      />
    );
  }

  // C. Default: Show Website
  return (
    <div className="App">
      <Home 
        username={currentUser} 
        onLogout={handleLogout} 
        onOpenLogin={() => setShowLogin(true)} // Pass the open function down
      />    
    </div>
  );
}

export default App;