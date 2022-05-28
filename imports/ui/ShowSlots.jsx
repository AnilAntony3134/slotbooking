import React from 'react'


const ShowSlots = ({slots, onClickAdd}) => {
  return (
    <li>
         {console.log(slots)}
        <div>{slots.category}</div>
        <span> Price {slots.price} </span>
        <span>{slots.Seats} Seats</span>
        <button onClick={ () => onClickAdd(slots) }>Add</button>
    </li>
  )
}

export default ShowSlots