import React, { useEffect, useState } from 'react'
import { EmojiEmotionsOutlined,AttachFile,Mic } from '@mui/icons-material'
import { Box, InputBase } from '@mui/material'
import styled from '@emotion/styled'
import { uploadFile } from '../../../service/api'

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

const Footer = ({sendText,setText,text,File,setFile,setImage}) => {
 useEffect(()=>{
  const getImage = async()=>{
    if(File){
      const data = new FormData();
      data.append("name",File.name);
      data.append("file",File);

   let response = await uploadFile(data);
  setImage(response.data) 
  
  }
  }
  getImage();
 },[File])
 
 
  const onFileChange = (e)=>{
  setFile(e.target.files[0]);
  setText(e.target.files[0].name)
 }
  return (
    
  <Container>
<EmojiEmotionsOutlined/>
<label htmlFor='fileInput'>
<ClipIcon/>
</label>
<input id= "fileInput" type='file' 
style={{display:'none'}}
onChange={(e)=>{ onFileChange(e)}}
/>
<Search>
  
    <InputField placeholder='Type a message'
    onChange={(e)=>{setText(e.target.value)}}
    onKeyDown={(e)=>{sendText(e)}}
    value={text}
    />
</Search>
<Mic/>
  </Container>
  )
}

export default Footer