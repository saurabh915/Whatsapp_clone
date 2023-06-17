import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem ,styled} from '@mui/material';
import { useState } from 'react';

const MenuOption = styled(MenuItem)`
font-size: 14px;
padding:15px 60px 5px 24px;
color: #4A4A4A;
`


const HeaderMenu = () => {
    const [open, setOpen] = useState(null)
    const handleClose = ()=>{
        setOpen(null);
    }

    const handleClick =(e)=>{
       
        setOpen(e.currentTarget);
        
    }
  return (
  <>
  <MoreVertIcon onClick={handleClick}/>
  
  <Menu
       keepMounted
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
     
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
  </>
  )
}

export default HeaderMenu