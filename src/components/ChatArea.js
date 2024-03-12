import React, { useState } from 'react'
import './myStyles.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';

const ChatArea = () => {
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

      var props = conversations[0];

      const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className={"chatArea-container" + (lightTheme ? "" : " dark")}>
            <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>{props.name[0]}</p>
                <div className={"header-text" + (lightTheme ? "" : " dark")}>
                    <p className={"con-title" + (lightTheme ? "" : " dark")}>{props.name}</p>
                    <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>{props.timeStamp}</p>
                </div>
                <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
                    <DeleteOutlineIcon />
                </IconButton>
            </div>

            <div className={"messages-container" + (lightTheme ? "" : " dark")}>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
            </div>

            <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
                <input placeholder='Type a Message' className={"search-box" + (lightTheme ? "" : " dark")}/>
                <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
                    <SendIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea;