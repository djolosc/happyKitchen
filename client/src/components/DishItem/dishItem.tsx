import {FunctionComponent} from 'react';
import './dishItem.css'

type Dish= {
  
  id: string;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
}

type props = {
  dish: Dish
}

const DishItem: FunctionComponent<props> = ({dish}) => {
  return (
    <div className='dishItem'>
      <h2>{dish.title}</h2>
      <p>{dish.description}</p>
      <p>{`${dish.price} €`}</p>
    </div>
  )
}

export default DishItem;