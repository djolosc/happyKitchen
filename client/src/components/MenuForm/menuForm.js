import './menuForm.css';
import { useForm } from "react-hook-form";

function MenuForm ({ dishes, createNewMenu, selectedDishes, setSelectedDishes }) {

  const { register, handleSubmit, reset } = useForm();

  //TODO MENU ITEM Fx
  const onSubmit = data => {
    const parsedData = {
      title: data.title,
      DishId: selectedDishes.map(id => parseInt(id))
    }
    createNewMenu(parsedData);
    reset();
  }

  const handleCheckBox = (event) => {
    event.preventDefault()
    if (event.target.checked) {
      setSelectedDishes([...selectedDishes, event.target.value])
    } else {
      setSelectedDishes(selectedDishes.filter(dish => dish !== event.target.value))
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="menu-title">
        <label>Menu name</label>
        <input
          className="menuTitle"
          type="text"
          placeholder="Menu"
          name="title"
          ref={register({ required: "Title required" })}
        />
      </div>
      <div>
        {dishes.map((dish) =>
          <div key={dish.id}>
            <span >
              {dish.title}</span>
            <input type="checkbox"
              onChange={handleCheckBox}
              value={dish.id}
              name={dish.title}
              ref={register}
            />
          </div>
        )}
      </div>
      <input type="submit" className="onSubmit" />
    </form>



  );
}

export default MenuForm;