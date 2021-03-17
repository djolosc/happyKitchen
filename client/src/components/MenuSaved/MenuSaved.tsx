
import './MenuSaved.css'
import DelayRedirect from '../timeDelay/DelayRedirect'

function MenuSaved() {
  return (
    <div data-testid="menuSaved" className="container-menuSaved">
    <DelayRedirect to='/menu' delay= {5000} />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style>

      <div className="text-menu">
        <h2> Menu has been saved </h2>
        <h2>  succesfully!</h2>
      </div>
    </div>
  )
}
export default MenuSaved;

