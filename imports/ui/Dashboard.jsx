import { styled, Typography } from '@mui/material'
import { borderRadius, Box, fontSize } from '@mui/system'
import React from 'react'

const StyledBox = styled(Box)(()=> ({
    backgroundColor: "#222831",
    height: '140px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const Left = styled(Box)(()=>({
    color: '#FD7014',
    marginLeft: '10px',
}))
const Middle = styled(Box)(()=>({
    color: 'white',
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}))

const Right = styled(Box)(()=>({
    color: '#686D76',
    marginRight: '20px',
}))
const ItemBox = styled(Box)(()=>({
    // color: '#FD7014',
    display: 'inline',
    backgroundColor: '#FD7014',
    color: 'black',
    padding: '5px',
    marginRight: '20px',
    marginLeft: '20px',
    marginBottom: '20px',
    borderRadius: '2px'
}))
const Dashboard = ({user, logout, seats}) => {
    let count = 0;
    let available = 0;
    let gold = 0;
    let platinum = 0;
    let economy = 0;
    const countfunction = () => {
        seats.map((category)=>{
            category.individualslot.map((eachslot)=>{
                if (eachslot.status==='booked' && eachslot.Userid===user.username)
                {
                    count++
                }
                else {
                    available++
                }
                console.log(user.username)
            })
        })
    }
    const counteach = () => {
        seats.map((category)=>{
            if (category.category === 'Platinum'){
                category.individualslot.map((eachslot)=>{
                    if (eachslot.status==='booked' && eachslot.Userid===user.username)
                    {
                        platinum++
                    }
                })
            }
            else if (category.category === 'Gold'){
                category.individualslot.map((eachslot)=>{
                    if (eachslot.status==='booked' && eachslot.Userid===user.username)
                    {
                        gold++
                    }
                })
            }
            else if (category.category === 'Economy'){
                category.individualslot.map((eachslot)=>{
                    if (eachslot.status==='booked' && eachslot.Userid===user.username)
                    {
                        economy++
                    }
                })
            }
        })
    }
    countfunction()
    counteach()
  return (
    <StyledBox>
        <Left>
            <Typography variant='h4' fontWeight={200}>BookYourSpot.</Typography>
        </Left>
        <Middle>
            <Typography className='bookedbox' mb={2}>Booked:<ItemBox>{count}</ItemBox> </Typography>
            <Typography className='bookedbox'  mb={2}>Available:<ItemBox>{available}</ItemBox></Typography>
            <Typography className='bookedbox'>Platinum:<ItemBox>{platinum}</ItemBox>Gold :<ItemBox>{gold}</ItemBox>Economy: <ItemBox>{economy}</ItemBox></Typography>
        </Middle>
        <Right>
            <Typography variant='h6' display={"inline"} fontWeight={200}>Welcome back, </Typography>
            <Typography display={"inline"} fontSize={'26px'} fontWeight={200} color={'#FD7014'}>{user.username}</Typography>
            <Typography onClick={logout} align={"right"}>Log Out</Typography>
           
        </Right>
    </StyledBox>
  )
}

export default Dashboard;