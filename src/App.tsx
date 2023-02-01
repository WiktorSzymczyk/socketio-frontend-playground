import React from 'react';
import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {
	BrowserRouter as Router,
	Route,
	BrowserRouter,
	Routes,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
	return (
		<>
			<div className='bg-[#141414] w-screen h-screen flex flex-col justify-center items-center pb-[10%] text-white'>
				<h1 className='font-light text-5xl animate-character'>Hello</h1>
				<Link to='/register'>Register</Link>
				<Link to='/login'>Login</Link>
				<Routes>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/home'
						element={<Home />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
