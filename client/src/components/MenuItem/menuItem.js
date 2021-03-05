import './menuItem.css';
import { useState } from 'react';

function MenuItem ({ menu }) {
  const [selectedDish, setSelectedDish] = useState([])

  return (
    <div className='menuItem'>
      <h2>{menu.title}</h2>
    </div>
  )
}

export default MenuItem;