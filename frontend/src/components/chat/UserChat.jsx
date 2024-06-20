import React from 'react'
import './UserChat.css'
import { Container, Stack } from 'react-bootstrap';
import Avatar from '../../assets/avatar.svg'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'
import { useContext } from 'react';
import { ChatContext } from "../../context/ChatContext"

const UserChat = ({chat, user}) => {

  const {recipientUser} = useFetchRecipientUser(chat, user);
  const {onlineUsers} = useContext(ChatContext);

  const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id )

  return (
    <Container>
      <Stack className='user-card' role='button'>
        <div className="d-flex">
          <div className="me-2">
                <img src={Avatar} height='35px'/>
          </div>

          <div className="text-content">
            <div className="name">
              {recipientUser?.firstname}
              <div className="text">Text Message</div>
            </div>
          </div>

        </div>
          <div className="c-flex">
            <div className="date">
              12/12/2024
            </div>

            <div className="this-user-notifications">2</div>
            <span className={isOnline ? 'user-online' : ''}></span>
          </div>
      </Stack>
    </Container>
  )
}

export default UserChat