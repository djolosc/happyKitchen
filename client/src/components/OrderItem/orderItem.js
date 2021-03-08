function OrderItem ({ order, chosenMenu }) {
  console.log('chosenMenu -> ', chosenMenu);
  console.log('order -> ', order);

  //TODO: FIX DISHES AND PHONE (NOT RENDERED)
  return (
    <div className='orderItem'>
      <p>{order.id}</p>
      <p>{order.clientName}</p>
      <p>{order.clientAddress}</p>
      <p>{order.phone}</p>
      <p>{order.comments}</p>
      { chosenMenu && chosenMenu.length > 0 && (
        <>
          <div>
            {chosenMenu.map((dish) =>
              <div key={dish.id}>
                <p >{dish.title}</p>

              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default OrderItem;