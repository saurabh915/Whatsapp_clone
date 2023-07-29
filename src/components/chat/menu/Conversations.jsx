import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../service/api';
import { Box, Divider } from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../context/AccountProvider';
import styled from '@emotion/styled';


const Component = styled(Box)`
height:81vh;
overflow: overlay;

`

const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
background-color: #e9edef;
opacity:.6;
`
const Conversations = ({text}) => {
   const [users, setusers] = useState([]) 
   const {account,socket,setActiveUsers} = useContext(AccountContext);
 
   
   useEffect(() => {
const fetchData = async()=>{
let response = await getUsers();
const filteredData = response.filter(user=>
  user.name.toLowerCase().includes(text.toLowerCase())
)

setusers(filteredData);

}
fetchData();

}, [text]);

useEffect(() => {
  
  socket.current.emit("addUsers",account);
  socket.current.on("getUsers",users=>{
    setActiveUsers(users)
  })
}, [account])

  return (
  <Component>
    {
      
        users.map(user =>(
          user.sub !== account.sub &&
          <>
          
          <Conversation user ={user}/>
          <StyledDivider/>
          </>
        ))
    }
    
  </Component>
  )
}

export default Conversations