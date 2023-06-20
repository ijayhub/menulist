import React from 'react'
import{Routes, Route}from 'react-router-dom'
import Breakfast from './pages/Breakfast';
import Dinner from './pages/Dinner';
import Home from './pages/Home';
import Lunch from './pages/Lunch';
import Snacks from './pages/Snacks';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/breakfast' element={<Breakfast />}></Route>
			<Route path='/lunch' element={<Lunch />}></Route>
			<Route path='/dinner' element={<Dinner/>}></Route>
			<Route path='/snacks' element={<Snacks />}></Route> 
		</Routes>
	);
}

export default App
