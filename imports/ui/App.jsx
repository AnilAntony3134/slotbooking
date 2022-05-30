import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import {useTracker} from 'meteor/react-meteor-data'
import { Slots } from '../collections/Slots'
import ShowSlots from './ShowSlots';
import { LoginForm } from './LogInform';
import Dashboard from './Dashboard';
import { Typography } from '@mui/material';

export const save = (seats) => {
    platinum.save();
    gold.save();
    economy.save();
}

export const App = () => {

  // const Addseats = (slots,lot)=> {
  //   Slots.lot.individualslot.push({status:'available',Userid:''})
  //   slots.individualslot.push({status:'available',Userid:''})
  //   settotal(slots.individualslot)
  //   console.log(total)}

  const AddSlot = ({_id}) => 
  {
    seats.remove(_id);
  }


  var user = useTracker(() => Meteor.user());

  const logout = () => Meteor.logout();

  const userFilter = user ? {userId: user.id}: {};

  const seats = useTracker(() => {
    if (!user) {
      return [];
    }

  return Slots.find({}).fetch()})
    console.log(seats[0])
  

  return(
  <div className='main'>
    {user ?(
      <Fragment>
        <Dashboard user={user} logout={logout}/>
        <Typography fontSize={"32px"} align={"center"} bgcolor={'#393E46'} color={'white'} pt={'20px'}>Choose Your Seats</Typography>
        {  
          seats.map((slot) => 
          <ShowSlots slots={slot} key={slot._id} user={user} seats={seats} addslot={AddSlot}/>
        )}
      </Fragment>
    ): (
      <LoginForm />
    )}
  </div>
  )
};
