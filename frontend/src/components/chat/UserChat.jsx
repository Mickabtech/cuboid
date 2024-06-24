import React from "react";
import "./UserChat.css";
import { Container, Stack } from "react-bootstrap";
import Avatar from "../../assets/avatar.svg";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotifications";
import { useFetchLatestMessage } from "../../hooks/useFetchMessage";
import moment from "moment";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const { onlineUsers, notifications, markThisUserNotificationsAsRead } =
    useContext(ChatContext);
  const { latestMessage } = useFetchLatestMessage(chat);

  const unreadNotifications = unreadNotificationsFunc(notifications);
  const thisUserNotifications = unreadNotifications?.filter(
    (n) => n.senderId === recipientUser?._id
  );
  const isOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );

  const truncateText = (text) => {
    const shortText = text.substring(0, 20);

    if(text.length > 20){
      shortText = shortText + "..."
    }

    return shortText;
  };



  return (
    <Container>
      <Stack
        className="user-card"
        role="button"
        onClick={() => {
          if (thisUserNotifications?.length !== 0) {
            markThisUserNotificationsAsRead(
              thisUserNotifications,
              notifications
            );
          }
        }}
      >
        <div className="d-flex">
          <div className="me-2">
            <img src={Avatar} height="35px" />
          </div>

          <div className="text-content">
            <div className="name">
              {recipientUser?.username}

              <div className="text">
                {latestMessage?.text && (
                  <span>{truncateText(latestMessage?.text)}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="c-flex">
          <div className="date">
            {moment(latestMessage?.createdAt).calendar()}
          </div>

          <div
            className={
              thisUserNotifications?.length > 0 ? "this-user-notifications" : ""
            }
          >
            {thisUserNotifications?.length > 0
              ? thisUserNotifications?.length
              : ""}
          </div>
          <span className={isOnline ? "user-online" : ""}></span>
        </div>
      </Stack>
    </Container>
  );
};

export default UserChat;
