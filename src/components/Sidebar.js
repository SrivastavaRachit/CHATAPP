import React, { useState } from 'react'
import './myStyles.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

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
    <div className='sidebar-container'>
      <div className='sb-header dark'>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>

        <div>
          <IconButton onClick={() => { navigate('users') }}>
            <PersonAddAlt1Icon />
          </IconButton>

          <IconButton onClick={() => { navigate('groups') }}>
            <GroupAddIcon />
          </IconButton>

          <IconButton onClick={() => { navigate('create-groups') }}>
            <AddCircleIcon />
          </IconButton>

          <IconButton >
            <NightlightIcon />
          </IconButton>
        </div>
      </div>

      <div className='sb-search'>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder='Search' className='search-box' />
      </div>

      <div className='sb-conversations'>
        {conversations.map((conversation) => {
          return <ConversationsItem props={conversation}
            key={conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar;