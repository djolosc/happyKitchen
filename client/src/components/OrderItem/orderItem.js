function OrderItem ({ order }) {
  return (
    <div className='orderItem'>
      <p>{order.id}</p>
      <p>{order.clientName}</p>
      <p>{order.clientAddress}</p>
      <p>{order.phone}</p>
      <p>{order.comments}</p>
    </div>
  )
}

export default OrderItem;