import './DishSaved.css'
import DelayRedirect from '../timeDelay/DelayRedirect'
function DishSaved () {

  return (
    <div className="container-dishSaved">
      <DelayRedirect to='/menu' delay= {5000} />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style>

      <div className="text-menu">
        <h2> Dish has been saved </h2>
        <h2>  succesfully!</h2>
      </div>
    </div>
  )
}

//Add timout feature to nav to add a dish or show what dishes are saved.

export default DishSaved;



