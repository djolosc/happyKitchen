import './dishForm.css';
import { useForm } from "react-hook-form";


function DishForm ({ addNewDish }) {
  // eslint-disable-next-line 
  const { register, handleSubmit, errors, reset } = useForm();

  // eslint-disable-next-line 
  const onSubmit = data => {
    console.log(data)
    reset()
  }


  return (
    <form
      className="dish-form"
      // onSubmit={(e) => handleSubmit(addNewDish, onSubmit)}>
      onSubmit={handleSubmit(addNewDish)}>
      <h2>Add a new dish</h2>
      <label>Title</label>
      <input
        className="dishTitle"
        type="text"
        placeholder="Title"
        name="title"
        ref={register({ required: "Title required" })}
      />+
      <label>Description</label>
      <input
        className="dishDescription"
        type="text"
        placeholder="Description"
        name="description"
        ref={register({ required: "Description required" })}
      />
      <label>Price</label>
      <input
        className="price"
        type="number"
        step=".01"
        min="0"
        placeholder="Price"
        name="price"
        ref={register({ required: "Price required" })}
      />

      <input
        className="add-dish-btn"
        type="submit"
      />
      {errors.title && <p>{errors.title.message}</p>}
      {errors.description && <p>{errors.description.message}</p>}
      {errors.price && <p>{errors.price.message}</p>}
    </form>
  );

}

export default DishForm;