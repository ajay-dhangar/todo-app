import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Logout from './Logout'


const Home = () => {
  const email = localStorage.getItem('email')
  console.log(email);

  const [selectedOption, setSelectedOption] = useState(''); // State to track selected option

  // Define a function to handle the change in the select element
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="nav">
        {/* <h3>{email}</h3> */}
        <nav>
          <ul className='nav-item'>
            <li><Link to='/todolist'>TodoList</Link></li>

            <li>
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                <option value="register">Register</option>
                <option value="login">Login</option>
                <option value="logout">Logout</option>
              </select>

              {/* Conditional rendering based on the selected option */}
              {selectedOption === 'register' && <Register /> }
              {selectedOption === 'login' && <Login /> }
              {selectedOption === 'logout' && <Logout />}
            </li>

            <li>{email}</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Home
