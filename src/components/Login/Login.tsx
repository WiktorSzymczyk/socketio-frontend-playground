import React from 'react';

export default function Login() {
	return (
		<div className='flex justify-center items-center'>
			<h1>Hello</h1>
			<form>
				<input
					type='text'
					placeholder='Username'
				/>
				<input
					type='text'
					placeholder='Password'
				/>
				<button>Login</button>
			</form>
		</div>
	);
}
