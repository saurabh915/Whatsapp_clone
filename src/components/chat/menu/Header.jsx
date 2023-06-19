import React from 'react'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import ChatIcon from '@mui/icons-material/Chat';
import { AccountContext } from '../../context/AccountProvider'
import { useContext ,useState} from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';
const Component = styled(Box)`
height:44px;
background: #ededed;
padding:8px 16px;
display:flex;
align-items: center;
width:420px;
`
const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%'
}) 
const Wrapper = styled(Box)`
margin-left: auto;
& >*{
    margin-left:2px;
    padding:8px;
    color:#000;
}

& :first-child{
    font-size:22px;
    margin-right:8px;
    margin-top:3px;
}
`
const Header = () => {
    const toggleDrawer = ()=>{
      setOpenDrawwer(!openDrawwer);
    }
     const [openDrawwer, setOpenDrawwer] = useState(false)
    const {account} = useContext(AccountContext)
  return (
 <>
  <Component>
    <Image src={account.picture ||"https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-24-scaled.jpg" } alt="DP" onClick={()=>{toggleDrawer()}} />

 <Wrapper>
 <AutoModeIcon/>
 <ChatIcon/>
<HeaderMenu openDrawwer = {openDrawwer} setOpenDrawwer= {setOpenDrawwer}/>
 </Wrapper>
  </Component>
 <InfoDrawer open = {openDrawwer} setOpen={setOpenDrawwer} />
 </>
 )
}

export default Header