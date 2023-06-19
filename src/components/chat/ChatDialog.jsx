import { Box, Dialog } from '@mui/material'
import React from 'react'
import Menu from './menu/Menu'
import EmptyChat from './EmptyChat'
import styled from '@emotion/styled'

const Component = styled(Box)`
display:flex;
`

const  LeftComponent = styled(Box)`
min-width: 450px;
`
const  RightComponent = styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left: 1px solid rgba(0,0,0,0.14)
`
const ChatDialog = () => {
    const dialogStyle = {
        height: '96%',
        width:'100%',
       margin: '20px',
        maxWidth:'100%',
        maxHeight:'100%',
        boxShadow:'none',
        overFlow: 'hidden',
        borderRadius: '0px'
    }
  return (
   <Dialog open= {true} 
   PaperProps={{sx:dialogStyle}} 
   hideBackdrop={true}
   minWidth= {'md'}
   >
<Component>
    <LeftComponent>
        <Menu/>
    </LeftComponent>
    <RightComponent>
        <EmptyChat/>
    </RightComponent>
</Component>
   </Dialog>
  )
}

export default ChatDialog