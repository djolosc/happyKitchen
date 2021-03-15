import './dishItem.css'

type Dish= {
  title: string;
  description: string;
  price: number;

}

const DishItem: React.FC<Dish> = ({title='new meal', description="nice meal", price=10 }) => {
  return (
    <div className='dishItem'>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{`${price} €`}</p>
    </div>
  )
}

export default DishItem;