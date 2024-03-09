import React, { useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';

const MainContainer = () => {
  const [conversations, setConversations] = useState([
    {
      name: "TEST1",
      lastMessage: "LAST MESSAGE 1",
      timeStamp: "TODAY",
    },
    {
      name: "TEST2",
      lastMessage: "LAST MESSAGE 2",
      timeStamp: "TODAY",
    },
    {
      name: "TEST3",
      lastMessage: "LAST MESSAGE 3",
      timeStamp: "TODAY",
    },
  ])
  return (
    <div className='main-container'>
      <Sidebar />

      {/* <Welcome/> */}

      {/* <CreateGroups /> */}

      {/* <ChatArea props={conversations[0]} /> */}

      <Users_Groups/>
    </div>
  )
}

export default MainContainer;