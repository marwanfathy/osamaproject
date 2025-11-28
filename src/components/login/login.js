import React, { useState } from 'react';
import './login.css'; 
import usersData from '../data/users.json'; 

function Login({ onLoginSuccess, onCancel }) { // Add onCancel prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanUser = username.trim();
    const cleanPass = password.trim();

    const account = usersData.find(
      (user) => user.username === cleanUser && user.password === cleanPass
    );

    if (account) {
      onLoginSuccess(account.username); 
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      {/* --- CLOSE BUTTON --- */}

      <div className="login-box">
        <h2>Login</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            autoCapitalize="none"
            autoCorrect="off"
            value={username}
            onChange={e => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
          <button type="submit">Enter</button>
          {error && <p className="error">Wrong username or password</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;