import { Modal, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Mongo } from 'meteor/mongo';


const StyledBox = styled(Box)(()=>({
    display: 'flex',
    padding: '20px',
    borderRadius: '5px',
    margin: '5px',
    cursor: 'pointer',

}))

const Eachslot = ({slot, index, user, category}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [Status,setStatus] = useState(true)
    
    const Activate=(slot, user, category)=>{
        slot.status = 'booked'
        slot.save();
        setStatus(!Status)
        slot.Userid = user.username
        console.log(slot)

    }
  return (
    <>
    <StyledBox className={`${Status ? 'active' : 'inactive'}`} onClick={handleOpen}>
        {index}
    </StyledBox>
    <Modal
        open={open}
        onClose={handleClose}
        className={"modalstyle"}
        >
        <Box className={'modalbox'} onClick={ () => {Activate(slot,user)}} >
           <h4 style={{color:'#FD7014'}}>BookYourSpot</h4>
           <h2>Confirm Your Ticket</h2>
           <h2>{user.username}</h2>
           <h3>Seat No : {index}</h3>
           <h3>Category : {category.category}</h3>
           <h3>Price : {category.price}</h3>
           <button>
               Confirm Purchase
           </button>
        </Box>
    </Modal>
    </>
  )
}

export default Eachslot