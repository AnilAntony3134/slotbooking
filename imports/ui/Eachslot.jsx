import { Modal, styled, Typography } from '@mui/material'
import {Meteor} from 'meteor/meteor'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Slots from '../collections/Slots'


const StyledBox = styled(Box)(()=>({
    display: 'flex',
    padding: '20px',
    borderRadius: '5px',
    margin: '5px',
    cursor: 'pointer',

}))

const Eachslot = ({slot, index, user, category:{_id:id, price, category}}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [status, setStatus] = React.useState(slot.status === 'available' ? true : false)
    // const [slotuser, setSlotuser] = React.useState(slot.Userid || '')
    
    const Activate=()=>{
        const seat = slot.seatNo-1
        Meteor.call('booked',{seat,user,id}, (err, res)=>{
            if (err) {
                alert(`Some Error Occoured in activating: ${err}`);
                return
            }
            setStatus(false);
            setOpen(false);
            setSlotuser(Meteor.userId())
        })
    }
    const DeActivate=()=>{
        const seat = slot.seatNo-1
        Meteor.call('remove',{seat,user,id,slot},(err, res)=>{
            if (err) {
                alert(`Some Error Occoured in deactivating: ${err}`);
                return
            }
            setStatus(true);
            setOpen(false);    
        })
    }
  return (
    <>
    <StyledBox className={`${status ? 'active': 'inactive'} ${slot.Userid !== user.username && slot.status === 'booked' ? 'disabledslot' : ''}`} onClick={handleOpen}>
       {slot.seatNo}
    </StyledBox>
    <Modal
        open={open}
        onClose={handleClose}
        className={"modalstyle"}
        >
        <Box className={'modalbox'} onClick={ () => {
            status ? Activate() : DeActivate()      
            }}>
           <h4 style={{color:'#FD7014'}}>BookYourSpot</h4>
           <h2>Confirm Your Ticket</h2>
           <h2>{slot.Userid}</h2>
           <h3>Seat No : {slot.seatNo}</h3>
           <h3>Category : {category}</h3>
           <h3>Price : {price}</h3>
           <button>
               {status ?'Buy Ticket':'Sell Ticket'}
           </button>
        </Box>
    </Modal>
    </>
  )
}

export default Eachslot