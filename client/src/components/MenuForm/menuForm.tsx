import './menuForm.css';
import { useForm } from "react-hook-form";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useHistory } from 'react-router';
import { SetStateAction, FunctionComponent } from 'react';
import type {dish, menu, parsedMenu} from '../../Types';

//TODO UPTADE => navigate to menu item by Id


type createNewMenu = (paresedData: parsedMenu) => void;

type Imports = {
  
  dishes: dish[];
  selectedDishes: dish[];
  createNewMenu: createNewMenu;
  setSelectedDishes: React.Dispatch<SetStateAction<dish[]>>;

}

const MenuForm: FunctionComponent<Imports & RouteComponentProps> = ({ dishes, createNewMenu, selectedDishes, setSelectedDishes }: Imports) => {


  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();


  const onSubmit = (data: menu) => {
    const parsedData = {...data, DishId: selectedDishes.map((dish: dish) => parseInt(dish.id))}
    createNewMenu(parsedData);
    reset();
    history.push('/menu_saved');
  }

  const handleCheckBox = (event: any) => {
    event.preventDefault()
    if (event.target.checked) {
      setSelectedDishes([...selectedDishes, event.target.value])
    } else {
      setSelectedDishes(selectedDishes.filter((dish: dish) => dish !== event.target.value))
    }
  }

  return (
    <form  data-testid="menuForm" className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="menu-title">
        <input
          className="menuTitle_field"
          type="text"
          placeholder="Insert Menu name"
          name="title"
          ref={register({ required: "Title required" })}
        />
      </div>
      <div className="menu-item">
        {dishes?.map((dish: dish) =>
          <div className="dish" key={dish.id}>
            <h3 >{dish.title}</h3>
            <p >{dish.description}</p>
            <p >€ {dish.price}</p>
            <input type="checkbox"
              onChange={handleCheckBox}
              value={dish.id}
              name={dish.title}
              ref={register}
              className="checkbox"
            />
          </div>
        )}
      </div>
      <input type="submit" className="onSubmit" />
    </form>
  );
}

export default withRouter(MenuForm);