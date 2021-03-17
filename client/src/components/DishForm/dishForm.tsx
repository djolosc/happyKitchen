import './dishForm.css';
import { useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useHistory } from 'react-router';
import {  FunctionComponent } from 'react';
import type {data} from '../../Types';

type addNewDish = (data: data) => void;

type params = {
  addNewDish: addNewDish;
}


const DishForm: FunctionComponent<params & RouteComponentProps> = ({addNewDish}) => {


  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  const onSubmit = (data: data) => {
    addNewDish(data);
    reset();
    history.push('/dish_saved');
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style>
      <form
        className="dish-form"
        onSubmit={handleSubmit(onSubmit)}
        data-testid="dishForm"
      >
        <h2>Add a new dish</h2>
        <div className="form-control">
          <input
            className="dishTitle"
            type="text"
            placeholder="Title"
            name="title"
            ref={register({ required: 'Title required' })}
          />
        </div>
        <div className="form-control">
          <input
            className="dishDescription"
            type="text"
            placeholder="Description"
            name="description"
            ref={register({ required: 'Description required' })}
          />
        </div>
        <div className="form-control">
          <input
            className="price"
            type="number"
            step=".01"
            min="0"
            placeholder="Price"
            name="price"
            ref={register({ required: 'Price required' })}
          />
        </div>
        <div className="form-control">
          <input className="add-dish-btn" type="submit" />
        </div>
        {errors.title && <p>{errors.title.message}</p>}
        {errors.description && <p>{errors.description.message}</p>}
        {errors.price && <p>{errors.price.message}</p>}
      </form>
    </Grid>
  );
}

export default withRouter(DishForm);
