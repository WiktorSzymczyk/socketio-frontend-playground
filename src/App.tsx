import { BrowserRouter as Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Register from './components/Register/Register';

function App() {
	return (
		<>
			<div className='bg-[#141414] w-screen h-screen flex flex-col justify-center items-center pb-[10%]'>
				<h1 className='font-light text-5xl animate-character'>Hello</h1>
				<Register />
				<h1 onClick={() => window.location}></h1>
			</div>
		</>
	);
}

export default App;
