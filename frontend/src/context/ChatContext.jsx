
import { createContext, useState, useEffect } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";


export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) =>{

  const userID = localStorage.getItem('userId')

    const [userChats, setUserChats] = useState(null)
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false)
    const [userChatsError, setUserChatsError] = useState(null)

    useEffect(() =>{

      const getUserChats = async()=>{
            if(user?._id || userID){

                setIsUserChatsLoading(true)
                setUserChatsError(null)

              const response = await getRequest(`${baseUrl}/api/chats/${user?._id || userID}`)

              setIsUserChatsLoading(false)

              if(response.error){
                return setUserChatsError(response)
              }

              setUserChats(response)
            }
      }
      getUserChats()
    }, [user])



  return <ChatContext.Provider value={{
    userChats, isUserChatsLoading, userChatsError
  }}>

        {children}
  </ChatContext.Provider>
}