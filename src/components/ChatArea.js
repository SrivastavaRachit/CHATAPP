import React from 'react'
import './myStyles.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

const ChatArea = ({props}) => {
    return (
        <div className='chatArea-container'>
            <div className='chatArea-header'>
                <p className='con-icon'>{props.name[0]}</p>
                <div className='header-text'>
                    <p className='con-title'>{props.name}</p>
                    <p className='con-timeStamp'>{props.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteOutlineIcon />
                </IconButton>
            </div>

            <div className='messages-container'>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
                <MessageOthers/>
                <MessageSelf/>
            </div>

            <div className='text-input-area'>
                <input placeholder='Type a Message' className='search-box'/>
                <IconButton>
                    <SendIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea;