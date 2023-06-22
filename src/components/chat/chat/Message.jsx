import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { fromatDate } from '../../../utils/common-utils'

const Message = ({message}) => {
  const Own = styled(Box)`
  background:#dcf8c6;
  max-width: 60%;
  margin-left:auto;
  padding:5px;
  width:fit-content;
  border-radius:10px;
  word-break:break-word;
  ` 
  const Wrapper = styled(Box)`
  background:#FFFFFF;
  max-width: 60%;

  padding:5px;
  width:fit-content;
  border-radius:10px;
  word-break:break-word;
  ` 
  return (
    <Own>
      <Typography>{message.text}</Typography>
      <Typography>{fromatDate(message.createdAt)}</Typography>
    </Own>
  )
}

export default Message