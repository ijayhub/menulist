import React, { useState } from 'react'
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';

const Lunch = () => {
    const [meals] = useState(data);
    return (
    <div>
        <Header title='Lunch Menu💖'/>
        {meals && (
            <Menulist meals={meals.filter((meal)=>meal.type==='lunch')}/>
        )}
    </div>
    )
}

export default Lunch
