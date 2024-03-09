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

const Sidebar = () => {
  const[conversations, setConversations] = useState([
    {
      name:"TEST1",
      lastMessage:"LAST MESSAGE 1",
      timeStamp:"TODAY",
    },
    {
      name:"TEST2",
      lastMessage:"LAST MESSAGE 2",
      timeStamp:"TODAY",
    },
    {
      name:"TEST3",
      lastMessage:"LAST MESSAGE 3",
      timeStamp:"TODAY",
    },
  ])

  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAddAlt1Icon />
          </IconButton>

          <IconButton>
            <GroupAddIcon />
          </IconButton>

          <IconButton>
            <AddCircleIcon />
          </IconButton>

          <IconButton>
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
        {conversations.map((conversation) =>{
          return<ConversationsItem props={conversation} key={conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar;