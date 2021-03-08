import './dishForm.css';
import { useForm } from "react-hook-form";
import { CssBaseline, Grid } from '@material-ui/core';



function DishForm ({ addNewDish }) {

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = data => {
    addNewDish(data)
    reset()
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <form
        className="dish-form"
        onSubmit={handleSubmit(onSubmit)}>
        <h2>Add a new dish</h2>
        <div className="form-control">
          {/* <label>Title</label> */}
          <input
            className="dishTitle"
            type="text"
            placeholder="Title"
            name="title"
            ref={register({ required: "Title required" })}
          />
        </div>
        <div className="form-control">
          {/* <label>Description</label> */}
          <input
            className="dishDescription"
            type="text"
            placeholder="Description"
            name="description"
            ref={register({ required: "Description required" })}
          />
        </div>
        <div className="form-control">
          {/* <label>Price</label> */}
          <input
            className="price"
            type="number"
            step=".01"
            min="0"
            placeholder="Price"
            name="price"
            ref={register({ required: "Price required" })}
          />
        </div>
        <div className="form-control">
          <input
            className="add-dish-btn"
            type="submit"
          />
        </div>
        {errors.title && <p>{errors.title.message}</p>}
        {errors.description && <p>{errors.description.message}</p>}
        {errors.price && <p>{errors.price.message}</p>}
      </form>
    </Grid>
  );

}

export default DishForm;