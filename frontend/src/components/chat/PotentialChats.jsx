import React from 'react'
import { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'

const PotentialChats = () => {
  const {PotentialChats} = useContext(ChatContext)
  console.log("PotentialChats", PotentialChats)
  return (
    <div>Start Chat</div>
  )
}

export default PotentialChats