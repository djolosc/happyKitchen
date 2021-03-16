import {FunctionComponent} from 'react';
import './dishItem.css'

type Dish= {
  
    title: string;
    description: string;
    price: number;
    id: string;

}

const DishItem: FunctionComponent<Dish> = ({ title, description, price } : Dish) => {
  return (
    <div className='dishItem'>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{`${price} €`}</p>
    </div>
  )
}

export default DishItem;