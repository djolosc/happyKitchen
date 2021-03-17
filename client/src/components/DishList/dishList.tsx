import DishItem from '../DishItem/dishItem'
import { FunctionComponent } from 'react'
import type {dish} from '../../Types';


type DishProps = {
    dishes: dish[]
}


const DishList: FunctionComponent<DishProps> = ({dishes}) => {
    return (
        <div className='dishList'>
            {dishes.map(dish => <DishItem dish={dish} />
            )}
        </div>
    )
}

export default DishList;