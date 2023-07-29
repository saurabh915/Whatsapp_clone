import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { setConversation,getConversation } from '../../../service/api'
import {fromatDate} from '../../../utils/common-utils'
const Component = styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;

`
const Container = styled(Box)`
display:flex;

`

const Timestamp = styled(Typography)`
font-size:12px;
margin-left:auto;
color:#00000099;
margin-right:20px;
`

const Text = styled(Typography)`
font-size:14px;
color: rgba(0,0,0,0.6);

`
const Image = styled('img')({
  width:50,
  height:50,
  borderRadius:'50%',
  padding:'0 14px',
    objectFit:'cover'
    
  })
  const Conversation = ({user}) => {
    const {setPerson,account,newmessageFlag} = useContext(AccountContext)
    const [message, setMessage] = useState({})
  useEffect(() => {
    const getConversationDetails = async()=>{
const data = await getConversation({senderId:account.sub ,receiverId:user.sub})
    setMessage({Text:data?.message,timestamp:data?.updatedAt})
}
getConversationDetails();
  }, [newmessageFlag])
  
const getUser = async()=>{
  setPerson(user)
  await setConversation({senderId:account.sub,receiverId:user.sub})
}
  return (
  <Component onClick={getUser}>
    <Box>
    
        <Image src={user.picture } alt="picture" srcset="" />
    </Box>
    <Box>
      <Container>
        
        <Text>
            {user.name}
        </Text>
        {
          message?.text && 
          <Timestamp>
          
{fromatDate(message?.timestamp)}
          </Timestamp>
   
  }
  </Container>
  <Box>
    {
      <Typography>
        {
          message?.text?.includes('localhost')?'media':message.text
        }
      </Typography>
    }
  </Box>
    </Box>
  </Component>
  )
}

export default Conversation