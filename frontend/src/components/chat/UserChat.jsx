import React from 'react'
import './UserChat.css'
import { Stack } from 'react-bootstrap';
import Avatar from '../../assets/avatar.svg'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'

const UserChat = ({chat, user}) => {

  const {recipientUser} = useFetchRecipientUser(chat, user)

  return (
    <div>
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
            <span className='user-online'></span>
          </div>
      </Stack>
    </div>
  )
}

export default UserChat