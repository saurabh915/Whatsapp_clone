import { Box, Dialog } from '@mui/material'
import React, { useContext } from 'react'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import styled from '@emotion/styled'
import ChatBox from './chat/ChatBox'
import { AccountContext } from '../context/AccountProvider'

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
    const {person} = useContext(AccountContext)
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
        {/* */}
        
        {Object.keys(person).length ?<ChatBox/>:<EmptyChat/>  }
    </RightComponent>
</Component>
   </Dialog>
  )
}

export default ChatDialog