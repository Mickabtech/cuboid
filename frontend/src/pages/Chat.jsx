import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import './Chat.css'
import UserChat from "../components/chat/UserChat";
import { AuthContext } from "../context/AuthContext";
import PotentialChats from "../components/chat/PotentialChats";


const Chat = () => {
  const { user } = useContext(AuthContext);

    const { userChats, isUserChatsloading, userChatsError } =
    useContext(ChatContext);


  return <div>
    <PotentialChats/>
    {userChats?.length < 1 ? null : <div className="horizontal">
      <div className="messages-box">
        {isUserChatsloading && <p>Loading chats....</p>}

        {userChats?.map((chat, index)=>{
          return (
            <div key={index}>
                <UserChat chat={chat} user={user}/>
            </div>
          )
        })}

      </div>
      <div>ChatBox</div>
      
      </div>}
  </div>;
};

export default Chat;
