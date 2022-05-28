import React from 'react'


const Bookedslots = ({slots,onClickRemove}) => {
  return (
    <li>
        <span>{slots.text}</span>
        <button onClick={ () => onClickRemove(slots) }>Add</button>
    </li>
  )
}

export default Bookedslots