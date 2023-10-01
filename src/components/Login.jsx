import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const Navigate = useNavigate

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

	return (
		<div className='div'>
			<h1 className='h1'>Login</h1>
			<form className='form' onSubmit={loginUser}>
				<input className='input'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input className='input'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input className='input' type="submit" value="Login" />
			</form>
		</div>
	)
}

export default Login
