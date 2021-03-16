import './orderItem.css'
import {FunctionComponent} from 'react';

type dish = {
  id: string;
  title: string;
  description: string;
  image: null; 
  createdAt: 'string';
  updatedAt: 'string';
  price: number;
}

type dishes = dish[];


type order = {
  id: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  comments: string;
  Dishes: dishes;
  
}
const OrderItem: FunctionComponent<order> = ({id, clientName, clientAddress, clientPhone, comments, Dishes} : order) => {


  return (
    <div className='orderItem'>
      <p>Order ID: {id}</p>
      <p>Name: {clientName}</p>
      <p>Address:  {clientAddress}</p>
      <p>Phone: {clientPhone}</p>
      <p>Comments: {comments}</p>

      {Dishes.map((dish) =>
        <div key={dish.id}>
          <p >{dish.title}</p>
        </div>
      )}
    </div>
  )
}

export default OrderItem;