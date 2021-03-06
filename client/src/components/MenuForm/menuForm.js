import './menuForm.css';
import { useState } from 'react';
import { useForm } from "react-hook-form";

function MenuForm ({ dishes, createNewMenu }) {
  // eslint-disable-next-line 
  const [selectedDishes, setSelectedDishes] = useState([]);
  // eslint-disable-next-line 
  const { register, handleSubmit, errors, reset } = useForm();
  // eslint-disable-next-line 
  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(createNewMenu)}>
      <div className="menu-title">
        <p>Menu</p>
      </div>
      <div>
        {dishes.map((dish) =>
          <label key={dish.id}>
            <input type="checkbox"
              value={dish.title}
              name="dishesMenu"
              ref={register}
            />{dish.title}</label>
        )
        }
      </div>
      <input type="submit" className="onSubmit" />
    </form>
  );
}

export default MenuForm;