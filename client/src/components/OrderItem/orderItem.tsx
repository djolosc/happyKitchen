import './orderItem.css'
import {FunctionComponent} from 'react';
import type {order} from '../../Types';

type props={
  order: order
}

const OrderItem: FunctionComponent<props> = ({order}) => {

  return (
    <div className='orderItem'>
      <p>Order ID: {order.id}</p>
      <p>Name: {order.clientName}</p>
      <p>Address:  {order.clientAddress}</p>
      <p>Phone: {order.clientPhone}</p>
      <p>Comments: {order.comments}</p>

      {order.Dishes.map((dish) =>
        <div key={dish.id}>
          <p >{dish.title}</p>
        </div>
      )}
    </div>
  )
}

export default OrderItem;