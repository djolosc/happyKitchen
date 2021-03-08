import './menuForm.css';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';


function MenuForm ({ dishes, createNewMenu, selectedDishes, setSelectedDishes, menus }) {

  const { register, handleSubmit, reset } = useForm();
  let { id } = useParams();


  // const shouldRedirect = false;
  //TODO navigate to menu item, remove should Redirect, etc

  const onSubmit = data => {

    const parsedData = {
      title: data.title,
      DishId: selectedDishes.map(id => parseInt(id))
    }
    createNewMenu(parsedData);
    reset();
    console.log(alert('Menu havs been saved successfully!'))
    // location.replace(`/menu/${id}`)
    // return  <Redirect  to=`/menu/${id}`/>
    // props.history.push(`/menu/${id}`);

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
            <h2 >{dish.title}</h2>
            <p >{dish.description}</p>
            <p >{dish.price}</p>
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