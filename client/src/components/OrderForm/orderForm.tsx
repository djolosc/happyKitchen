import './orderForm.css';
import { useForm } from 'react-hook-form';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useHistory } from 'react-router';
import { SetStateAction, FunctionComponent } from 'react';
import {data, parsedData, menu} from '../../Types';

type createNewOrder = (parsedData: parsedData) => void;

type props = {
  createNewOrder:createNewOrder;
  menus: menu[]
  chosenMenu: menu[];
  setChosenMenu: React.Dispatch<SetStateAction<menu | [] | any>>;
}

const OrderForm: FunctionComponent<props & RouteComponentProps> =({createNewOrder, menus, chosenMenu, setChosenMenu}) => {


  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  const onSubmit = (data: data) => {
    const parsedData = {...data,  DishId: chosenMenu.map((menu) => parseInt(menu.id))};
    console.log('PD', parsedData);
    console.log('data', data);
    createNewOrder(parsedData);
    setChosenMenu([]);
    reset();
    history.push('/bye');
  };

  const handleCheckBox = (event: any) => {
    console.log(event)
    event.preventDefault();
    if (event.target.checked) {
      setChosenMenu([...chosenMenu, event.target.value]);
      console.log('cM', typeof chosenMenu[0]);
    } else {
      setChosenMenu(chosenMenu.filter((dish) => dish !== event.target.value));
    }
  };

  return (
    <form
      data-testid="orderForm"
      className="order-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style>
      <div className="container">
        <h2 className="title-order">
          Hi Friend! What would you like to eat today?
        </h2>
        {menus && menus.length > 0 && (
          <>
            <div className="elem-dish">
              {menus[0]?.Dishes.map((dish) => (
                <div key={dish.id} className="flexChild">
                  <h3 className="title">{dish.title}</h3>
                  <p className="description">{dish.description}</p>
                  <p>€ {dish.price}</p>
                  <input
                    type="checkbox"
                    onChange={handleCheckBox}
                    value={dish.id}
                    name={dish.title}
                    ref={register}
                    className="checkbox"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <div className="input-field-container">
          <h2 className="contact-details"> CONTACT INFORMATON</h2>
          <input
            className="clientName"
            type="text"
            placeholder="Name"
            name="clientName"
            ref={register({ required: 'Name required' })}
          />
          <label></label>
          <input
            className="clientAddress"
            type="text"
            placeholder="Address"
            name="clientAddress"
            ref={register({ required: 'Address required' })}
          />
          <label></label>
          <input
            className="clientPhone"
            type="number"
            placeholder="Phone"
            name="clientPhone"
            ref={register()}
          />
          <label></label>
          <input
            className="comments"
            type="text"
            placeholder="Comments"
            name="comments"
            ref={register()}
          />
          <label></label>
          <input className="send-button" type="submit" />
          {errors.title && <p>{errors.title.message}</p>}
          {errors.description && <p>{errors.description.message}</p>}
          {errors.price && <p>{errors.price.message}</p>}
        </div>
      </div>
    </form>
  );
}

export default withRouter(OrderForm);
