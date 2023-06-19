import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import Profile from './Profile';

const Component = styled(Box)`
background:#ededed;
height:85%;
`
 const Header = styled(Box)`
 background: #008069;
 height: 107px;
 color: #FFFFFF;
 display:flex;
 
 & > svg,& > p{
margin-top:auto;
padding:15px;
font-weight: 600
 }
 `
 const Text = styled(Typography)`
 font-size:18px;
 `;

const InfoDrawer = ({open, setOpen}) => {
 const handleClose = ()=>{
   setOpen(false)
 }
   const drawerStyle={ 
  
    left:20,
    top:17,
    height:'95%',
    width:'29.5%',
    boxShadow:'none'
    

    

 }


    return (
    <div>

<Drawer
open={open}
PaperProps={{sx:drawerStyle}}
keepMounted={true}
style={{zIndex:1500}}
onClose={handleClose}
>
<Header>
<ArrowBackIcon onClick={()=>{setOpen(false)}}/>
<Text>Profile</Text>
</Header>
<Component>

   <Profile/>
</Component>
</Drawer>

    </div>
  )
}

export default InfoDrawer