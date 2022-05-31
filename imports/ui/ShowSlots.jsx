import { Box, Grid, styled, Typography } from '@mui/material'
import Slots from '../collections/Slots'
import React, { useState } from 'react'
import { Class } from 'meteor/jagi:astronomy';
import Eachslot from './Eachslot'

const StyledBox = styled(Box)(() => ({
    display: 'flex',
    backgroundColor: '#393E46',
    color: 'white',
    justifyContent: 'center',
}))
const SeatContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))
const Title = styled(Typography)(() => ({
    display: 'flex',
    fontSize: '32px',
    padding: '20px',
    color: '#FD7014',
}))
const SeatBox = styled(Box)(() => ({
      padding: "20px",
      backgroundColor: "#222831",

}))
const Seats = styled(Grid)(() => ({
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '450px',
      overflow: 'hidden',
      flexWrap: 'wrap'
}))

const ShowSlots = ({slots, user, addslot}) => {
  const newslots = Slots.find({}).fetch()
  const [total, settotal] = useState(slots.individualslot)  

  return (
    <StyledBox>
      <SeatContainer>
        <Title>{slots.category}</Title>
        <Typography mt={'-15px'} mb={'35px'}> {slots.price} </Typography>
        <Seats>
        {
          total.map((seat, index)=>
          <Eachslot slot={seat} key={index} index={index} user={user} category={slots}/>
          ) 
        }
        </Seats>
      </SeatContainer>

    </StyledBox>
  )
}

export default ShowSlots