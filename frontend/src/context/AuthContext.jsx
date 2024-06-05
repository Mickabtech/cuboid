import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({
      name: "",
    });

  return <AuthContext.Provider value = {{
    user
  }}>
        {children}
  </AuthContext.Provider>
}