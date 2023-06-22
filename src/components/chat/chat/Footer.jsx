import React, { useState } from 'react'
import { EmojiEmotionsOutlined,AttachFile,Mic } from '@mui/icons-material'
import { Box, InputBase } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)`
height :55px;
background: #ededed;
display:flex;
width:97%;
align-items:center;
padding: 0px 15px;
& > *{
    margin:5px;
    color: #919191;
}
`

const Search = styled(Box)`
background-color: #FFFFFF;
border-radius: 18px;
width: calc(94% - 100px);
`
const InputField = styled(InputBase)`
width:80%;
padding:20px;
height: 20px;
padding-left:25px;
font-size:14px;

`

const ClipIcon = styled(AttachFile)`
transform: rotate(40deg)
`

const Footer = ({sendText,setText,text}) => {
 
  return (
    
  <Container>
<EmojiEmotionsOutlined/>
<ClipIcon/>
<Search>
  
    <InputField placeholder='Type a message'
    onChange={(e)=>{setText(e.target.value)}}
    onKeyDown={sendText}
    value={text}
    />
</Search>
<Mic/>
  </Container>
  )
}

export default Footer