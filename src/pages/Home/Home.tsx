import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Home() {
	const location = useLocation();
	return (
		<div>
			<h1>{location.state.id}</h1>
		</div>
	);
}
