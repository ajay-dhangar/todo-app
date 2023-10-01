import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const Navigate = useNavigate()

	async function registerUser(event) {
		event.preventDefault();
	
		try {
			const response = await axios.post('https://mern-todo-app-0pnc.onrender.com/user/register', {
				email: email,
				password: password,
			});
	
			console.log(response.data);
	
			if (response.data.token) {
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('email', response.data.email)
				Navigate('/');
			} else {
				alert('Registration failed. Please check your details.');
			}
		} catch (error) {
			console.error(error);
			alert('Registration failed. Please try again later.');
		}
	}
	

	return (
		<div className='div'>
			<h1 className='h1'>Register</h1>
			<form className='form' onSubmit={registerUser}>
			
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
				<input className='input' type="submit" value="Register" />
			</form>
		</div>
	)
}

export default Register