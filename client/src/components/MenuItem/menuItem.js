import './menuItem.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiService from '../../ApiService'

function MenuItem ({ menus }) {
  const [menu, setMenu] = useState([]);
  let { id } = useParams();
  // console.log('menus -> ', menus);
  // console.log('id -> ', id);
  // const getOneMenu = () => {
  //   ApiService.getMenu()
  //     .then(menus.filter(menu => setMenu(menu.id === id)))
  // }
  // console.log('getOneMenu: ', getOneMenu);
  // console.log('menu -> ', menu);

  useEffect(() => {
    return fetch('http://localhost:3000/menu')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, []);



  return (
    <div className='menuItem'>

      <h2>ID: {id}</h2>
      <h2>{menu.title}</h2>
      {/* <span>
        {selectedDishes.map(dish =>
          <p>{dish.title}</p>
        )}</span> */}
    </div>
  )
}

export default MenuItem;
