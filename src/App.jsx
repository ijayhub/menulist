import React from 'react'
import{Routes, Route}from 'react-router-dom'
import Breakfast from './components/Breakfast';
import Dinner from './components/Dinner';
import Home from './components/Home';
import Lunch from './components/Lunch';
import Snacks from './components/Snacks';

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
