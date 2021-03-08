import './orderForm.css';
import { useForm } from "react-hook-form";
// import MenuItemById from '../MenuItemById/menuItemById';


//TODO ADD MENU WITH DISHES

function OrderForm ({ createNewOrder, menus, dishes, chosenMenu, setChosenMenu }) {
  const { register, handleSubmit, errors, reset } = useForm();
  // eslint-disable-next-line 
  const onSubmit = data => {
    console.log(data)
    createNewOrder(data);
    reset()
  }

  // const selectedMenu = () => {
  //   if (menus && menus.length > 0) {
  //     return menus.find(menu => parseInt(menu.id) === id);
  //   }
  // }
  // let menu = selectedMenu();

  console.log('menus -> ', menus);

  const handleCheckBox = (event) => {
    event.preventDefault()
    if (event.target.checked) {
      setChosenMenu([...chosenMenu, event.target.value])
    } else {
      setChosenMenu(chosenMenu.filter(dish => dish !== event.target.value))
    }
  }


  return (
    <form
      className="order-form"
      onSubmit={handleSubmit(onSubmit)}>
      <h2>Make your order</h2>
      { menus && menus.length > 0 && (
        <>
          <p>{menus[0].title}</p>

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
        </>
      )}
      <label>Name</label>
      <input
        className="clientName"
        type="text"
        placeholder="Name"
        name="clientName"
        ref={register({ required: "Name required" })}
      />
      <label>Address</label>
      <input
        className="clientAddress"
        type="text"
        placeholder="Address"
        name="clientAddress"
        ref={register({ required: "Address required" })}
      />
      <label>Phone</label>
      <input
        className="phone"
        type="number"
        placeholder="Phone"
        name="phone"
        ref={register()}
      />
      <label>Comments</label>
      <input
        className="comments"
        type="text"
        placeholder="Comments"
        name="comments"
        ref={register()}
      />
      <input
        className="add-order-btn"
        type="submit"
      />
      {errors.title && <p>{errors.title.message}</p>}
      {errors.description && <p>{errors.description.message}</p>}
      {errors.price && <p>{errors.price.message}</p>}
    </form>
  );

}

export default OrderForm;