import React, { useState, useEffect } from 'react';

export default function Register() {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleCreateUser(e: React.FormEvent) {
		e.preventDefault();
		fetch('http://localhost:7000/blog', {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				name,
				email,
				password,
			}),
		});
		setName('');
		setUsername('');
		setEmail('');
		setPassword('');
	}

	return (
		<div>
			<form
				className='flex flex-col justify-center items-center w-screen'
				onSubmit={handleCreateUser}
			>
				<div className='flex flex-col space-y-4 pt-5 w-[15%]'>
					<input
						type='text'
						placeholder='Name'
						className='p-2 border-4 rounded-md border-blue-700'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<input
						type='text'
						placeholder='Username'
						className='p-2 border-4 rounded-md border-blue-700'
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
					<input
						type='text'
						placeholder='Email'
						className='p-2 border-4 rounded-md border-blue-700'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<input
						type='text'
						placeholder='Password'
						className='p-2 border-4 rounded-md border-blue-700'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>
				<button className='mt-5 text-xl text-white font-bold border-4 px-10 py-2 rounded-md border-blue-700'>
					Login
				</button>
			</form>
		</div>
	);
}
