import { createContext, useState,useRef, useEffect } from "react";
import {io} from 'socket.io-client'
export const AccountContext = createContext(null)

const AccountProvider = ({children}) =>{
    const [account,setAccount] = useState({name: "Saurabh Sanjay Patil",sub:"living_code2"});
    const [person,setPerson]= useState({})
    const [ActiveUsers, setActiveUsers] = useState([])
    const [newmessageFlag,setNewMessageFlag] = useState(false)
    const socket = useRef();
   useEffect(() => {
   socket.current = io("ws://localhost:9000")
   
    
   }, [])
   
    return (
        <AccountContext.Provider value={{account,setAccount,person,setPerson,setActiveUsers,socket,ActiveUsers, newmessageFlag ,setNewMessageFlag}}>

{children}

        </AccountContext.Provider>
    )
}

export default AccountProvider