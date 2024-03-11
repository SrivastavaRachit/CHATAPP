import React, { useState } from 'react'
import './myStyles.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'; import { IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from './ConversationsItem';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lightTheme = useSelector((state) => state.themeKey)
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
      <div className={'sb-header' + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton>
            <AccountCircleIcon className={'icon' + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>

        <div>
          <IconButton onClick={() => { navigate('users') }}>
            <PersonAddAlt1Icon className={'icon' + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton onClick={() => { navigate('groups') }}>
            <GroupAddIcon className={'icon' + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton onClick={() => { navigate('create-groups') }}>
            <AddCircleIcon className={'icon' + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton onClick={() => { dispatch(toggleTheme()) }}>
            {lightTheme && <NightlightIcon className={'icon' + (lightTheme ? "" : " dark")} />}
            {!lightTheme && <LightModeOutlinedIcon className={'icon' + (lightTheme ? "" : " dark")} />}
          </IconButton>
        </div>
      </div>

      <div className={'sb-search' + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder='Search' className={'search-box' + (lightTheme ? "" : " dark")} />
      </div>

      <div className={'sb-conversations' + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return <ConversationsItem props={conversation}
            key={conversation.name} />
        })}
      </div>
    </div>
  )
}

export default Sidebar;