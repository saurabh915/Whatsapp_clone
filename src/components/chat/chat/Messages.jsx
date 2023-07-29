import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useContext, useEffect, useState ,useRef} from 'react'
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

const Container = styled(Box)`

padding:1px 80px`
const Messages = ({person,conversation}) => {
  const {account,socket,setNewMessageFlag,newmessageFlag} = useContext(AccountContext)
  const [text, setText] = useState('')

  const [messages, setMessages] = useState([])
 const [File, setFile] = useState();
 const [image, setImage] = useState('')
  const scrollRef = useRef();
 const [incomingMessage, setIncomingMessage] =useState(null)
 
 useEffect(()=>{
  const getMessageDetails = async()=>{
    console.log("conversation._id is");
    console.log(conversation._Id);
     let data = await getMessages(conversation._id);
data && setMessages(data)
  }
  conversation._id && getMessageDetails();
 
 },[person._id,conversation._id,newmessageFlag]);
 

 useEffect(() => {
 scrollRef.current?.scrollIntoView({transition:'smooth'})
 }, [messages])
 
  const sendText = async(e)=>{
    
    if(e.key === 'Enter'){
  let message = {};
   if(!File){
       message ={
    senderId:account.sub,
    receiverId: person.sub,
    conversationId: conversation._id,
    type:'text',
    text:text
  }
    }
    else{
      message ={
        senderId:account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type:'file',
        text: image
      }

    }
    socket.current.emit('sendMessage',message);
 await newMessage(message)
 setText('');
 setFile('')
 setImage('')
 setNewMessageFlag(prev => !prev)
}
  }
useEffect(() => {
 socket.current.on("getMessage",data =>{
setIncomingMessage({
  ...data,
  createdAt:Date.now()
})
 })
}, [])

useEffect(() => {
 incomingMessage &&  conversation?.members?.includes(incomingMessage.senderId)&& 
 setMessages(prev =>[...prev , incomingMessage])
}, [incomingMessage ,conversation])



  return (
   <Wrapper>
<Component>
{
  messages && messages.map(message =>(
    <Container ref={scrollRef}>

      <Message message ={message}/>
    </Container>
  ))
}
</Component>
<Footer File={File} setFile = {setFile}text = {text} setText={setText} sendText={sendText} setImage = {setImage} person = {person}/>
   </Wrapper>
  )
}

export default Messages