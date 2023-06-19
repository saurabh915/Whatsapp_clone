import { Box, Divider, Typography, styled } from '@mui/material';
import React from 'react'
import { emptyChatImage } from '../constants/data';
const Component = styled(Box)`
background:#faf9fa;
padding: 30px 0;
text-align:center;
height:100vh;
width:100%;

`;

const StyleDivider = styled(Divider)`
margin: 40px 0;
opacity:0.4;
`

const Container = styled(Box)`
padding:0 200px;
`

const Image = styled('img')({
width:400,
marginTop:100


})

const Title = styled(Typography)`
font-size:32px;
margin: 25px 0 10px 0;
font-family:inherit;
font-weight:100;
color:#41525d
`
const Subtitle = styled(Typography)`
font-size:14px;
color:#667781;
font-weight:400;
font-family:inherit;
`
const EmptyChat = () => {
  return (
   <Component>
    <Container>
      <Image src={emptyChatImage} alt="" />
   <Title>WhatsApp Web</Title>
   <Subtitle>Send and receive messages without keeping your phone online.</Subtitle>
  
   <Subtitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Subtitle>
   <StyleDivider/>
    </Container>
   </Component>
  )
}

export default EmptyChat;