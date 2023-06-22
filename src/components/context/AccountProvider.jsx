import { createContext, useState } from "react";

export const AccountContext = createContext(null)

const AccountProvider = ({children}) =>{
    const [account,setAccount] = useState({name: "Saurabh Sanjay Patil",sub:"living_code2"});
    const [person,setPerson]= useState({})
    return (
        <AccountContext.Provider value={{account,setAccount,person,setPerson}}>

{children}

        </AccountContext.Provider>
    )
}

export default AccountProvider