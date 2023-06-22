import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { setConversation } from '../../../service/api'

const Component = styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;

`

const Image = styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
    padding:'0 14px',
    objectFit:'cover'

})
const Conversation = ({user}) => {
const getUser = async()=>{
  setPerson(user)
  await setConversation({senderId:account.sub,receiverId:user.sub})
}
  const {setPerson,account} = useContext(AccountContext)
  return (
  <Component onClick={getUser}>
    <Box>
    
        <Image src={user.picture } alt="picture" srcset="" />
    </Box>
    <Box>
        <Typography>
            {user.name}
        </Typography>
    </Box>
  </Component>
  )
}

export default Conversation