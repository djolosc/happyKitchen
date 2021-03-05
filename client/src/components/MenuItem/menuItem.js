import './menuItem.css';

function MenuItem ({ menu }) {
  return (
    <div className='menuItem'>
      <h2>{menu.title}</h2>

    </div>
  )
}

export default MenuItem;