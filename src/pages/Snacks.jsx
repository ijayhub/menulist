import React, { useState } from 'react'
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';

const Snacks = () => {
    const [meals] = useState(data);
    return (
		<div>
			<Header title='Snacks Menu💖' />
				{meals && (
					<Menulist meals={meals.filter((meal) => meal.type === 'snacks')} />
				)}
			
		</div>
	);
}

export default Snacks
