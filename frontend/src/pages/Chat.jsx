import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import './Chat.css'
import UserChat from "../components/chat/UserChat";
import { AuthContext } from "../context/AuthContext";
import PotentialChats from "../components/chat/PotentialChats";
import ChatBox from "../components/chat/ChatBox";
import { Container } from "react-bootstrap";


const Chat = () => {
  const { user } = useContext(AuthContext);

    const { userChats, isUserChatsloading, updateCurrentChat } =
    useContext(ChatContext);


  return <Container>
    <PotentialChats/>
    {userChats?.length < 1 ? null : ( <div className="horizontal">
      <div className="messages-box">
        {isUserChatsloading && <p>Loading chats....</p>}

        {userChats?.map((chat, index)=>{
          return (
            <div key={index} onClick={() => updateCurrentChat(chat) }>
                <UserChat chat={chat} user={user}/>
            </div>
          )
        })}

      </div>
      
      <ChatBox/>
      
      </div>)}
  </Container>;
};

export default Chat;
