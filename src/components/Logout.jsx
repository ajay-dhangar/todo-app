import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  function handleLogout() {

    localStorage.removeItem('token');
    localStorage.removeItem('email');
    

    navigate('/login');
  }

  return (
    <div className="div">
      <h1 className="h1">Logout</h1>
      <button className="input" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
