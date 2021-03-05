// import './menuForm.css';
// import { useState } from 'react';
// import { useForm } from "react-hook-form";

// function MenuForm ({ dishes }) {
//   // eslint-disable-next-line 
//   const [selectedDishes, setSelectedDishes] = useState([]);
//   // eslint-disable-next-line 
//   const { register, handleSubmit, errors, reset } = useForm();

//   const onSubmit = data => {
//     console.log(data)
//     // reset()
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="menu-title">
//         <p>Menu</p>
//       </div>
//       <div>
//         {dishes.map((dish, i) =>
//           <label key={dish.id}>
//             <input type="checkbox"
//               value={dish.name}
//               name="sameName"
//               ref={register}
//             />{dish.name}</label>
//         )
//         }
//       </div>
//       <input type="submit" className="onSubmit" />
//     </form>
//   );
// }

// export default MenuForm;