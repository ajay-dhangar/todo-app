import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const email = localStorage.getItem('email')
	console.log(email);

  return (
    <div>
      <div className="nav">
      {/* <h3>{email}</h3> */}
        <nav>
          <ul className='nav-item'>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/todolist'>TodoList</Link></li>
            <li>Email: {email}</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Home
