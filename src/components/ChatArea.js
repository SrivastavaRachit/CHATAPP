import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

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
                    <DeleteOutlineIcon/>
                </IconButton>
            </div>

            <div className='messages-container'>Messages-container</div>
            <div className='text-input-area'>Text-input-area</div>
        </div>
    )
}

export default ChatArea;