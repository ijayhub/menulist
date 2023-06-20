import React, { useState } from 'react'
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';
const Dinner = () => {
    const [meals] = useState(data);
    return (
        <div>
            <Header title='Dinner Menu💖' />
				{meals && (
					<Menulist meals={meals.filter((meal) => meal.type === 'dinner')} />
				)}
			
		</div>
	);
}

export default Dinner
