import React from 'react';
import {useTracker} from 'meteor/react-meteor-data'
import { Slots } from '../collections/Slots'
import ShowSlots from './ShowSlots';

export const App = () => {

  const seats = useTracker(() => Slots.find({}).fetch())
  
  const AddSlot = ({_id}) => 
    {
      Slots.remove(_id);
    }

  return(
  <div className='main'>
    <h1>Parking lot App</h1>
    {  
      seats.map((slot) => 
      <ShowSlots slots={slot} key={slot._id} onClickAdd={AddSlot}/>
    )}
  </div>
  )
};
