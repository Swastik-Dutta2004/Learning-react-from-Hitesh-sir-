import React, { Children, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = () =>{
    const[user,setuser] = useState(null)
return(
    <>
    <UserContext.Provider value={{user,setuser}}>
        {Children}
    </UserContext.Provider>
    </>
    )
}

export default UserContextProvider;