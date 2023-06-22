import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { emptyChatImage } from '../../constants/data'
import Footer from './Footer'
import { getMessages, newMessage } from '../../../service/api'
import {AccountContext} from '../../context/AccountProvider'
import Message from './Message'
const Wrapper = styled(Box)`
background-image:url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})

`

const Component = styled(Box)`
height: 80vh;
overflow-y:scroll;
`
const Messages = ({person,conversation}) => {
  const {account} = useContext(AccountContext)
  const [text, setText] = useState('')
 const [messages, setMessages] = useState([])
 useEffect(()=>{
  const getMessageDetails = async()=>{
    console.log("conversation._id is");
    console.log(conversation._Id);
     let data = await getMessages(conversation._id);
data && setMessages(data)
  }
  getMessageDetails();
 
 },[person._id,conversation._id]);
 
  const sendText = async(e)=>{
if(e.key === 'Enter'){
  let message ={
    senderId:account.sub,
    receiverId: person.sub,
    conversationId: conversation._id,
    type:'text',
    text:text
  }
 await newMessage(message)
 setText('');
}
  }




  return (
   <Wrapper>
<Component>
{
  messages && messages.map(message =>(
    <Message message ={message}/>
  ))
}
</Component>
<Footer text = {text} setText={setText} sendText={sendText} person = {person}/>
   </Wrapper>
  )
}

export default Messages