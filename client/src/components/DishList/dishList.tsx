import DishItem from '../DishItem/dishItem'
import * as React from 'react';
import { FunctionComponent } from 'react'

type dish = {
  id: string;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
}

type DishProps = {
    dishes: dish[]
}


const DishList: FunctionComponent<DishProps> = ({dishes}) => {
    return (
        <div className='dishList'>
            {dishes.map(dish => <DishItem dish={dish} />
            )}s
        </div>
    )
}

export default DishList;