import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

<<<<<<< HEAD
    try {
      const response = await axios.post('https://mern-todo-app-0pnc.onrender.com/user/login', {
        email: email,
        password: password,
      });
=======
	async function loginUser(event) {
		event.preventDefault();
	
		try {
			const response = await axios.post('https://mern-todo-app-0pnc.onrender.com/user/login', {
				email: email,
				password: password,
			});
	
			console.log(response.data);
	
			if (response.data.token) {
				localStorage.setItem('token', response.data.token);
				Navigate('/');
			} else {
				alert('Login failed. Please check your details.');
			}
		} catch (error) {
			console.error(error);
			alert('Login failed. Please try again later.');
		}
	}
>>>>>>> 14a26278bc6f92be779a4dbf9bd5a10e2371b60d

      console.log(response.data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        navigate('/');
      } 
    } catch (error) {
      console.error(error.response.data);
      alert('Login failed. Please try again later.');
    }
  }

  return (
    <div className="div">
      <h1 className="h1">Login</h1>
      <form className="form" onSubmit={loginUser}>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <button className="input" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

<<<<<<< HEAD
export default Login;
=======
export default Login
>>>>>>> 14a26278bc6f92be779a4dbf9bd5a10e2371b60d
