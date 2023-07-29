import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { fromatDate ,downloadMedia} from '../../../utils/common-utils'
import {AccountContext} from '../../context/AccountProvider'
import { GetApp } from '@mui/icons-material'
 

const Own = styled(Box)`
display:flex;
  background:#dcf8c6;
  max-width: 40%;
  margin-left:auto;
  padding:5px;
  width:fit-content;
  border-radius:10px;
  word-break:break-word;
  margin-bottom:5px;
 
  ` 
  const Wrapper = styled(Box)`
  background:#FFFFFF;
  max-width: 60%;

  padding:5px;
  width:fit-content;
  border-radius:10px;
  word-break:break-word;
  ` ;
  const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
  
  `

  const Time = styled(Typography)`
  font-size:10px;
  color:#919191;
  margin-top:6px;
  word-break: keep-all;
  `
const Message = ({message}) => {
 

  const {account} = useContext(AccountContext)
  return (
    <>
{
  
  account.sub === message.senderId ?
  <Own>
    {
      message.type === 'file' ? <ImageMessage message = {message}/>:<TextMessage message = {message}/>


    }
     
    </Own> :    <Wrapper>
     
    <Text>{message.text}</Text>
      <Time>{fromatDate(message.createdAt)}</Time>

    </Wrapper>

}
  
</>
  )
}
const TextMessage = ({message})=>{
return(
  <>
   <Text>{message.text}</Text>
      <Time>{fromatDate(message.createdAt)}</Time>
  </>
)
}

const ImageMessage = ({message})=>{
  return(
    <Box style={{position:'relative'}}>
    {
      message?.text?.includes('.pdf') ?
      <Box >
<iframe src={message.text}/>
<Text style={{fontSize:'14px'}}>{message.text.split('/').pop()}</Text>
    
      </Box>
      :
      <img style={{width:300, height:'100%'}}src={message.text} alt = {message.text}/>
    }
    <Time style={{position:'absolute',bottom:0, right:0}}>
  <GetApp 
   onClick={(e)=>{downloadMedia(e,message.text)}}
  style={{marginRight:10,border:'1px solid grey',borderRadius:'50%'}}
  fontSize='small'
  />
  {fromatDate(message.createdAt)}</Time>
    </Box>
  )
  }
export default Message