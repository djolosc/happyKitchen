import DishItem from '../DishItem/dishItem'
import * as React from 'react';

type DishL = {
    dishes: Array<[string]>
}

const DishList: React.FC <DishL> = ({ dishes }) => {
    return (
        <div className='dishList'>
            {dishes.map(dish => <DishItem dish={dish} />
            )}s
        </div>
    )
}

export default DishList;