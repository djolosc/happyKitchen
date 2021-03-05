import DishItem from '../DishItem/dishItem'

function DishList ({ dishes }) {
  return (
    <div className='dishList'>
      {dishes.map(dish =>
        <DishItem key={dish.id} dish={dish} />
      )}
    </div>
  )
}

export default DishList;