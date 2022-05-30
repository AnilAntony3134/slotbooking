import { Modal, styled, Typography } from '@mui/material'
import {Meteor} from 'meteor/meteor'
import { Box } from '@mui/system'
import React, { useState } from 'react'


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
    const [status,setStatus] = useState(slot.status === 'available'? true : false)
    
    const Activate=()=>{
        setStatus(true);
        console.log('activate')
        const seat = slot.seatNo-1
        Meteor.call('booked',{seat,user,id})
        
    }
    const DeActivate=()=>{
        setStatus(false)
        console.log('deactivate')
        const seat = slot.seatNo-1
        Meteor.call('remove',{seat,user,id})
        
    }
  return (
    <>
    <StyledBox className={`${status ? 'active' : 'inactive'}`} onClick={handleOpen}>
    {/* <StyledBox className={status ? 'active' : 'inactive'} onClick={handleOpen}> */}

        {slot.seatNo}
    </StyledBox>
    <Modal
        open={open}
        onClose={handleClose}
        className={"modalstyle"}
        >
        <Box className={'modalbox'} onClick={ () => {
            (slot.status === 'available') ? Activate() : DeActivate()      
            }}>
           <h4 style={{color:'#FD7014'}}>BookYourSpot</h4>
           <h2>Confirm Your Ticket</h2>
           <h2>{user.username}</h2>
           <h3>Seat No : {slot.seatNo}</h3>
           <h3>Category : {category}</h3>
           <h3>Price : {price}</h3>
           <button>
               Confirm Purchase
           </button>
        </Box>
    </Modal>
    </>
  )
}

export default Eachslot