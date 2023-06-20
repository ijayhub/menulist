import React, { useState } from 'react'
import Header from '../components/Header'
import Menulist from './Menulist';
import { data } from '../../data'

const Breakfast = () => {
    const [meals]=useState(data)
    return (
        <div>
            <Header title='Breakfast Menu💖'/>
            {meals && (
                <Menulist meals={meals.filter((meal)=>meal.type==='breakfast')}/>
            )}
        </div>
		);
}

export default Breakfast
