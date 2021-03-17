import {FunctionComponent} from 'react';
import './dishItem.css'
import type {dish} from '../../Types';


type prop = {
  dish: dish;
}

const DishItem: FunctionComponent<prop> = ({ dish }) => {
  return (
    <div className='dishItem'>
      <h2>{dish.title}</h2>
      <p>{dish.description}</p>
      <p>{`${dish.price} €`}</p>
    </div>
  )
}

export default DishItem;