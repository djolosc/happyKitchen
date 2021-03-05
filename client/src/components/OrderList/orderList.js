import OrderItem from '../OrderItem/orderItem'

function OrderList ({ orders }) {
  return (
    <div className='menuList'>
      {orders.map(order =>
        <OrderItem order={order} />
      )}
    </div>
  )
}

export default OrderList;