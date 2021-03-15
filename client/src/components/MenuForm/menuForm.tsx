import './menuForm.css';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';

//TODO UPTADE => navigate to menu item by Id

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

type selectedDishes = dish[];

type Imports={
  dishes: dishes;
  selectedDishes: selectedDishes;
  createNewMenu: function

}

type data = {
  title: string;
  DishId:selectedDishes;
}
const menuForm: React.FC<Imports>

function MenuForm ({ dishes, createNewMenu, selectedDishes, setSelectedDishes }) {

  const { register, handleSubmit, reset } = useForm();
  let { id } : {id: string} = useParams();
  const history = useHistory();


  const onSubmit = (data: data) => {
    const parsedData = {
      title: data.title,
      DishId: selectedDishes.map((id: string) => parseInt(id))
    }
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