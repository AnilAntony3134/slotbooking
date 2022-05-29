import { styled, Typography } from '@mui/material'
import { Box, fontSize } from '@mui/system'
import React from 'react'

const StyledBox = styled(Box)(()=> ({
    backgroundColor: "#222831",
    height: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const Left = styled(Box)(()=>({
    color: '#FD7014',
    marginLeft: '10px',
}))

const Right = styled(Box)(()=>({
    color: '#686D76',
    marginRight: '20px',
}))
const Dashboard = ({user, logout}) => {
    console.log(user);
  return (
    <StyledBox>
        <Left>
            <Typography variant='h4' fontWeight={200}>BookYourSpot.</Typography>
        </Left>
        <Right>
            <Typography variant='h6' display={"inline"} fontWeight={200}>Welcome back, </Typography>
            <Typography display={"inline"} fontSize={'26px'} fontWeight={200} color={'#FD7014'}>{user.username}</Typography>
            <Typography onClick={logout} align={"right"}>Log Out</Typography>
        </Right>
    </StyledBox>
  )
}

export default Dashboard;