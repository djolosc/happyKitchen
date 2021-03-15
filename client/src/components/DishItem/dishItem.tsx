
import './dishItem.css'

type Dish= {
  dish: {
    title: string;
    description: string;
    price: number;
  }

}



const DishItem: React.FC<Dish> = ({ dish }) => {
  return (
    <div className='dishItem'>
      <h2>{dish.title}</h2>
      <p>{dish.description}</p>
      <p>{`${dish.price} €`}</p>
    </div>
  )
}

export default DishItem;