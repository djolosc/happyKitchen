import './orderForm.css';
import { useForm } from "react-hook-form";
// import MenuItemById from '../MenuItemById/menuItemById';


//TODO: ADD MENU WITH DISHES
function OrderForm ({ createNewOrder, menus, dishes, chosenMenu, setChosenMenu }) {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = data => {
    const parsedData = {
      clientName: data.clientName,
      clientAddress: data.clientAddress,
      clientPhone: data.clientPhone,
      comments: data.comments,
      DishId: chosenMenu.map(id => parseInt(id))

    }
    console.log('PD', parsedData)
    console.log('data', data)
    createNewOrder(parsedData);
    reset()
  }

  console.log('menus -> ', menus);

  // const selectedMenu = () => {
  //   if (menus && menus.length > 0) {
  //     return menus.find(menu => parseInt(menu.id) === id);
  //   }
  // }
  // let menu = selectedMenu();



  const handleCheckBox = (event) => {
    event.preventDefault()
    if (event.target.checked) {
      console.log('eCO', event.target.checked)
      console.log('eVO', event.target.value)
      console.log('eVo', event.target)
      setChosenMenu([...chosenMenu, event.target.value])
      console.log('cM', typeof chosenMenu[0])
    } else {
      setChosenMenu(chosenMenu.filter(dish => dish !== event.target.value))

    }
  }


  return (
    <form
      className="order-form"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <h2>Make your order</h2>
        {menus && menus.length > 0 && (
          <>
            <p>{menus[0].title}</p>

            <div >

              {menus[0].Dishes.map((dish) =>
                <div key={dish.id} className="flexChild">
                  <h2 >{dish.title}</h2>
                  <p >{dish.id}</p>
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

            {/* <div>
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
          </div> */}
          </>
        )}
        <div className="input-field-container">
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
            className="clientPhone"
            type="number"
            placeholder="Phone"
            name="clientPhone"
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
        </div>
      </div>
    </form>
  );

}

export default OrderForm;